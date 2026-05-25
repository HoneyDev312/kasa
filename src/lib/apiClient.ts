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

  // Tous les appels backend passent par ce wrapper pour centraliser les headers,
  // la sérialisation JSON, l'authentification et la gestion des erreurs.
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
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
  // À compléter quand la session front sera en place.
  return undefined;
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
