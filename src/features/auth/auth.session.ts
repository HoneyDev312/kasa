import { cookies } from "next/headers";
import type { User, UserRole } from "./auth.types";

const AUTH_TOKEN_COOKIE = "kasa_auth_token";
const USER_ROLES: UserRole[] = ["client", "owner", "admin"];

export async function getAuthToken() {
  const cookieStore = await cookies();

  return cookieStore.get(AUTH_TOKEN_COOKIE)?.value;
}

export async function setAuthToken(token: string) {
  const cookieStore = await cookies();

  cookieStore.set(AUTH_TOKEN_COOKIE, token, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

export async function clearAuthToken() {
  const cookieStore = await cookies();

  cookieStore.delete(AUTH_TOKEN_COOKIE);
}

export async function getAuthUser(): Promise<User | null> {
  const token = await getAuthToken();

  if (!token) {
    return null;
  }

  const payload = decodeJwtPayload(token);
  const id = Number(payload?.id);
  const role = payload?.role;

  if (!Number.isInteger(id) || !isUserRole(role)) {
    return null;
  }

  return {
    id,
    email: typeof payload?.email === "string" ? payload.email : undefined,
    name: typeof payload?.name === "string" ? payload.name : "",
    role,
  };
}

function decodeJwtPayload(token: string): Record<string, unknown> | null {
  const [, payload] = token.split(".");

  if (!payload) {
    return null;
  }

  try {
    const normalizedPayload = payload.replace(/-/g, "+").replace(/_/g, "/");
    const json = Buffer.from(normalizedPayload, "base64").toString("utf8");

    return JSON.parse(json) as Record<string, unknown>;
  } catch {
    return null;
  }
}

function isUserRole(role: unknown): role is UserRole {
  return typeof role === "string" && USER_ROLES.includes(role as UserRole);
}
