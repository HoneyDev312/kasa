import type {
  AuthResponse,
  LoginCredentials,
  User,
} from "@/features/auth/auth.types";

const mockUser: User = {
  id: 1,
  email: "demo@kasa.fr",
  name: "Utilisateur demo",
  role: "client",
};

export function loginWithMockUser(
  credentials: LoginCredentials
): Promise<AuthResponse> {
  void credentials;

  return Promise.resolve({
    token: createMockToken(mockUser),
    user: mockUser,
  });
}

function createMockToken(user: User) {
  const header = encodeBase64Url({ alg: "none", typ: "JWT" });
  const payload = encodeBase64Url(user);

  return `${header}.${payload}.mock-signature`;
}

function encodeBase64Url(value: unknown) {
  return Buffer.from(JSON.stringify(value))
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}
