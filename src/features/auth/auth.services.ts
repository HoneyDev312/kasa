import { apiClient } from "@/lib/apiClient";
import { API_BASE_URL, isMockMode } from "@/lib/config";
import type { AuthResponse, LoginCredentials } from "./auth.types";

export async function login(credentials: LoginCredentials) {
  if (isMockMode() || !API_BASE_URL) {
    const { loginWithMockUser } = await import("@/mocks/auth");

    return loginWithMockUser(credentials);
  }

  return apiClient.post<AuthResponse>("/auth/login", credentials, {
    auth: false,
  });
}
