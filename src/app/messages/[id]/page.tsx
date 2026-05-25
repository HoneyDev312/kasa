import { ConversationDetail } from "@/features/messages/ConversationDetail";
import styles from "@/features/messages/MessagesPage.module.css";

type MessagePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Message({ params }: MessagePageProps) {
  const { id } = await params;

  return (
    <section className={styles.page}>
      <ConversationDetail id={id} />
    </section>
  );
}
