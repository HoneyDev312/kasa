import { redirect } from "next/navigation";
import { getAuthUser } from "@/features/auth/auth.session";
import {
  ConversationDetail,
  MessagesBackLink,
} from "@/features/messages";
import {
  getPropertyMessages,
  toConversationMessages,
} from "@/features/messages/messages.services";
import type { ConversationMessage } from "@/features/messages";
import { isUnauthorizedMessageError } from "@/features/messages/messages.errors";
import styles from "@/features/messages/components/MessagesPage.module.css";

type MessagePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Message({ params }: MessagePageProps) {
  const user = await getAuthUser();

  if (!user) {
    redirect("/login");
  }

  const { id } = await params;
  let messages: ConversationMessage[] = [];

  try {
    const apiMessages = await getPropertyMessages(id);
    messages = toConversationMessages(apiMessages, user.id);
  } catch (error) {
    if (isUnauthorizedMessageError(error)) {
      redirect("/login");
    }

  }

  return (
    <section className={[styles.page, styles.conversationPage].join(" ")}>
      <header className={styles.pageHeader}>
        <MessagesBackLink className={styles.backLink} href="/messages">
          ← Retour
        </MessagesBackLink>
      </header>
      <ConversationDetail id={id} messages={messages} />
    </section>
  );
}
