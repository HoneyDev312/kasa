import styles from "./ConversationDetail.module.css";

type ConversationDetailProps = {
  id: string;
};

export function ConversationDetail({ id }: ConversationDetailProps) {
  return (
    <article className={styles.detail}>
      <h1 className={styles.title}>Conversation {id}</h1>
    </article>
  );
}
