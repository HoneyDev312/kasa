export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "";

export const SITE_BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function isMockMode() {
  return process.env.USE_MOCKS === "true";
}
