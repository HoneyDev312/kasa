import {
  getModalCloseHref,
  getMockConversations,
  MessagesDesktopView,
  MessagesModal,
} from "@/features/messages";

type MessagesModalPageProps = {
  searchParams: Promise<{
    from?: string | string[];
  }>;
};

export default async function MessagesModalPage({
  searchParams,
}: MessagesModalPageProps) {
  const closeHref = getModalCloseHref(await searchParams);
  const conversations = getMockConversations();

  return (
    <MessagesModal closeHref={closeHref} title="Messages">
      <MessagesDesktopView conversations={conversations} from={closeHref} />
    </MessagesModal>
  );
}
