import { MessagesDesktopView } from "@/features/messages/components/MessagesDesktopView";
import { MessagesModal } from "@/features/messages/components/MessagesModal";
import { getModalCloseHref } from "@/features/messages/messages.helpers";

type MessagesModalPageProps = {
  searchParams: Promise<{
    from?: string | string[];
  }>;
};

export default async function MessagesModalPage({
  searchParams,
}: MessagesModalPageProps) {
  const closeHref = getModalCloseHref(await searchParams);

  return (
    <MessagesModal closeHref={closeHref} title="Messages">
      <MessagesDesktopView from={closeHref} />
    </MessagesModal>
  );
}
