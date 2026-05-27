import Link from "next/link";
import { ConversationList, getMockConversations } from "@/features/messages";
import styles from "@/features/messages/components/MessagesPage.module.css";

export default function Messages() {
  const conversations = getMockConversations();

  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <Link className={styles.backLink} href="/">
          ← Retour
        </Link>
        <h1 className={styles.title}>Messages</h1>
      </header>
      <ConversationList conversations={conversations} />
    </section>
  );
}
