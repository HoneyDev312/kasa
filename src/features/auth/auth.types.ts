export type UserRole = "client" | "owner" | "admin";

export type User = {
  id: number;
  email?: string;
  name: string;
  picture?: string | null;
  role: UserRole;
};

export type LoginCredentials = {
  email: string;
  password: string;
};

export type AuthResponse = {
  token: string;
  user: User;
};

export type LoginActionState = {
  message: string;
};
