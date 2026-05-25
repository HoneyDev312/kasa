import {
  ConversationDetail,
  getModalCloseHref,
  MessagesDesktopView,
  MessagesModal,
} from "@/features/messages";

type MessageModalPageProps = {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    from?: string | string[];
  }>;
};

export default async function MessageModalPage({
  params,
  searchParams,
}: MessageModalPageProps) {
  const { id } = await params;
  const closeHref = getModalCloseHref(await searchParams);

  return (
    <MessagesModal closeHref={closeHref} title="Messages">
      <MessagesDesktopView from={closeHref}>
        <ConversationDetail id={id} />
      </MessagesDesktopView>
    </MessagesModal>
  );
}
