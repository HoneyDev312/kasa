import {
  ConversationDetail,
  getMockConversationMessages,
  MessagesBackLink,
} from "@/features/messages";
import styles from "@/features/messages/components/MessagesPage.module.css";

type MessagePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Message({ params }: MessagePageProps) {
  const { id } = await params;
  const messages = getMockConversationMessages(id);

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
