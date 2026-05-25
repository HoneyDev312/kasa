import { cookies } from "next/headers";

const AUTH_TOKEN_COOKIE = "kasa_auth_token";

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
