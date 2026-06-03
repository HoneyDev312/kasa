import { getMockFavoriteProperties } from "@/mocks/properties";

export async function GET() {
  return Response.json(await getMockFavoriteProperties());
}
