import {
  getModalCloseHref,
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

  return (
    <MessagesModal closeHref={closeHref} title="Messages">
      <MessagesDesktopView from={closeHref} />
    </MessagesModal>
  );
}
