import { API_BASE_URL } from "./config";
import type { ApiErrorResponse } from "@/shared/types/api.types";

export type RequestOptions = Omit<RequestInit, "body"> & {
  auth?: boolean;
  body?: unknown;
  token?: string;
};

export class ApiError extends Error {
  code?: string;
  status: number;

  constructor(message: string, status: number, code?: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
  }
}

async function request<T>(
  endpoint: string,
  { auth = true, body, headers, token, ...options }: RequestOptions = {}
): Promise<T> {
  const authToken = token ?? (auth ? await getSessionToken() : undefined);
  const url = await getRequestUrl(endpoint);

  // Tous les appels backend passent par ce wrapper pour centraliser les headers,
  // la sérialisation JSON, l'authentification et la gestion des erreurs.
  const response = await fetch(url, {
    ...options,
    body: body === undefined ? undefined : JSON.stringify(body),
    headers: {
      ...(body === undefined ? {} : { "Content-Type": "application/json" }),
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      ...headers,
    },
  });

  const payload = await parseResponse(response);

  // Le backend Express renvoie les erreurs sous la forme `{ error: string }`.
  if (!response.ok) {
    const errorPayload = payload as ApiErrorResponse | undefined;
    throw new ApiError(
      errorPayload?.error ||
        errorPayload?.message ||
        "Une erreur est survenue",
      response.status,
      errorPayload?.error
    );
  }

  // Le backend actuel renvoie directement les données. Cette branche garde une
  // compatibilité simple avec un futur format `{ data }` si on l'ajoute plus tard.
  if (isDataResponse<T>(payload)) {
    return payload.data;
  }

  return payload as T;
}

/**
 * Construit l'URL appelée par le client API.
 * Si une API externe est configurée, elle est utilisée en priorité. Sinon,
 * l'application appelle ses propres Route Handlers Next.js, ce qui permet de
 * déployer le front seul avec les données mockées.
 */
async function getRequestUrl(endpoint: string) {
  // Cas production avec un vrai backend externe.
  if (API_BASE_URL) {
    return `${API_BASE_URL}${endpoint}`;
  }

  // Côté navigateur, une URL relative suffit pour appeler le même domaine.
  if (typeof window !== "undefined") {
    return endpoint;
  }

  // Côté serveur, fetch a besoin d'une URL absolue : on la reconstruit depuis
  // les headers de la requête courante.
  const { headers } = await import("next/headers");
  const headersList = await headers();
  const host = headersList.get("x-forwarded-host") ?? headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") ?? "http";

  // Fallback utile en développement si aucun header de domaine n'est disponible.
  if (!host) {
    return `http://localhost:3000${endpoint}`;
  }

  return `${protocol}://${host}${endpoint}`;
}

async function parseResponse(response: Response) {
  // Certains endpoints DELETE peuvent répondre sans corps.
  if (response.status === 204) {
    return undefined;
  }

  const text = await response.text();

  if (!text) {
    return undefined;
  }

  try {
    return JSON.parse(text) as unknown;
  } catch {
    return text;
  }
}

function isDataResponse<T>(payload: unknown): payload is { data: T } {
  return (
    typeof payload === "object" &&
    payload !== null &&
    "data" in payload
  );
}

async function getSessionToken() {
  if (typeof window !== "undefined") {
    return undefined;
  }

  const { getAuthToken } = await import("@/features/auth");

  return getAuthToken();
}

export const apiClient = {
  get<T>(endpoint: string, options?: RequestOptions) {
    return request<T>(endpoint, { ...options, method: "GET" });
  },
  post<T>(endpoint: string, body?: unknown, options?: RequestOptions) {
    return request<T>(endpoint, { ...options, body, method: "POST" });
  },
  put<T>(endpoint: string, body?: unknown, options?: RequestOptions) {
    return request<T>(endpoint, { ...options, body, method: "PUT" });
  },
  patch<T>(endpoint: string, body?: unknown, options?: RequestOptions) {
    return request<T>(endpoint, { ...options, body, method: "PATCH" });
  },
  delete<T>(endpoint: string, options?: RequestOptions) {
    return request<T>(endpoint, { ...options, method: "DELETE" });
  },
};
