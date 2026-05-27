import {
  ConversationDetail,
  getModalCloseHref,
  getMockConversationMessages,
  getMockConversations,
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
  const conversations = getMockConversations();
  const messages = getMockConversationMessages(id);

  return (
    <MessagesModal closeHref={closeHref} title="Messages">
      <MessagesDesktopView
        conversations={conversations}
        from={closeHref}
        selectedConversationId={id}
      >
        <ConversationDetail id={id} messages={messages} />
      </MessagesDesktopView>
    </MessagesModal>
  );
}
