import { redirect } from "next/navigation";
import { getAuthUser } from "@/features/auth/auth.session";
import { ConversationList } from "@/features/messages";
import { BackLink, Typography } from "@/shared";
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

export default async function Messages() {
  const user = await getAuthUser();

  if (!user) {
    redirect("/login");
  }

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
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <BackLink className={styles.backLink} href="/" size="large" />
        <Typography as="h1" className={styles.title} variant="h1">
          Messages
        </Typography>
      </header>
      {errorMessage ? (
        <Typography className={styles.emptyState} color="dark">
          {errorMessage}
        </Typography>
      ) : conversations.length > 0 ? (
        <ConversationList conversations={conversations} />
      ) : (
        <Typography className={styles.emptyState} color="dark">
          Aucune conversation pour le moment.
        </Typography>
      )}
    </section>
  );
}
