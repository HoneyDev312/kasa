import { redirect } from "next/navigation";
import { getAuthUser } from "@/features/auth/auth.session";
import {
  getModalCloseHref,
  MessagesDesktopView,
  MessagesModal,
} from "@/features/messages";
import {
  getMessages,
  toConversationSummaries,
} from "@/features/messages/messages.services";
import type { ConversationSummary } from "@/features/messages";
import {
  getMessagesErrorMessage,
  isUnauthorizedMessageError,
} from "@/features/messages/messages.errors";
import styles from "@/features/messages/components/MessagesPage.module.css";

type MessagesModalPageProps = {
  searchParams: Promise<{
    from?: string | string[];
  }>;
};

export default async function MessagesModalPage({
  searchParams,
}: MessagesModalPageProps) {
  const user = await getAuthUser();

  if (!user) {
    redirect("/login");
  }

  const closeHref = getModalCloseHref(await searchParams);
  let conversations: ConversationSummary[] = [];
  let errorMessage = "";

  try {
    const messages = await getMessages();
    conversations = toConversationSummaries(messages, user.id);
  } catch (error) {
    if (isUnauthorizedMessageError(error)) {
      redirect("/login");
    }

    errorMessage = getMessagesErrorMessage(error);
  }

  return (
    <MessagesModal closeHref={closeHref} title="Messages">
      <MessagesDesktopView conversations={conversations} from={closeHref}>
        {errorMessage ? (
          <p className={styles.emptyState}>{errorMessage}</p>
        ) : undefined}
      </MessagesDesktopView>
    </MessagesModal>
  );
}
