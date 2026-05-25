import type { User } from "@/types/user";

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
