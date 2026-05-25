import { getModalCloseHref } from "@/features/messages/getModalCloseHref";
import { MessagesDesktopView } from "@/features/messages/MessagesDesktopView";
import { MessagesModal } from "@/features/messages/MessagesModal";

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
