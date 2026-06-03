import { getMockMessages } from "@/mocks/messages";

export async function GET() {
  return Response.json(await getMockMessages());
}
