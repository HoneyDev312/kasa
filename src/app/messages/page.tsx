import { ConversationList } from "@/features/messages";
import styles from "@/features/messages/components/MessagesPage.module.css";

export default function Messages() {
  return (
    <section className={styles.page}>
      <h1 className={styles.title}>Messages</h1>
      <ConversationList />
    </section>
  );
}
