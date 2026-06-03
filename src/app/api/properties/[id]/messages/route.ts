import {
  getMockPropertyMessages,
  sendMockPropertyMessage,
} from "@/mocks/messages";

type MessagesRouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_request: Request, { params }: MessagesRouteContext) {
  const { id } = await params;

  return Response.json(await getMockPropertyMessages(id));
}

export async function POST(request: Request, { params }: MessagesRouteContext) {
  const { id } = await params;
  const body = (await request.json().catch(() => ({}))) as {
    content?: unknown;
  };
  const content = String(body.content ?? "").trim();

  if (!content) {
    return Response.json({ error: "Message vide" }, { status: 400 });
  }

  return Response.json(await sendMockPropertyMessage(id, content));
}
