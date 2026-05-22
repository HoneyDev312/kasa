export type UserRole = "client" | "owner" | "admin";

export type User = {
  id: number;
  email?: string;
  name: string;
  picture?: string | null;
  role: UserRole;
};
