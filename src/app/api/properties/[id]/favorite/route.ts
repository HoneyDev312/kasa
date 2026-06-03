import {
  addMockFavoriteProperty,
  removeMockFavoriteProperty,
} from "@/mocks/properties";

type FavoriteRouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function POST(
  _request: Request,
  { params }: FavoriteRouteContext
) {
  const { id } = await params;

  return Response.json(await addMockFavoriteProperty(id));
}

export async function DELETE(
  _request: Request,
  { params }: FavoriteRouteContext
) {
  const { id } = await params;

  return Response.json(await removeMockFavoriteProperty(id));
}
