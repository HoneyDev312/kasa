import Link from "next/link";
import { redirect } from "next/navigation";
import { getAuthUser } from "@/features/auth/auth.session";
import { ConversationList } from "@/features/messages";
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
        <Link className={styles.backLink} href="/">
          ← Retour
        </Link>
        <h1 className={styles.title}>Messages</h1>
      </header>
      {errorMessage ? (
        <p className={styles.emptyState}>{errorMessage}</p>
      ) : conversations.length > 0 ? (
        <ConversationList conversations={conversations} />
      ) : (
        <p className={styles.emptyState}>Aucune conversation pour le moment.</p>
      )}
    </section>
  );
}
