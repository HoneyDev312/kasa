import { apiClient } from "@/lib/apiClient";
import type { AuthResponse, LoginCredentials } from "./auth.types";

export function login(credentials: LoginCredentials) {
  return apiClient.post<AuthResponse>("/auth/login", credentials, {
    auth: false,
  });
}
