import { loginWithMockUser } from "@/mocks/auth";

export async function POST(request: Request) {
  const credentials = await request.json().catch(() => ({}));

  return Response.json(await loginWithMockUser(credentials));
}
