import { getMockPropertyById } from "@/mocks/properties";

type PropertyRouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_request: Request, { params }: PropertyRouteContext) {
  const { id } = await params;
  const property = await getMockPropertyById(id);

  if (!property) {
    return Response.json({ error: "Logement introuvable" }, { status: 404 });
  }

  return Response.json(property);
}
