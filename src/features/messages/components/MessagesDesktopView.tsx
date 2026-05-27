import type { ReactNode } from "react";
import Link from "next/link";
import type { ConversationSummary } from "../messages.types";
import { ConversationList } from "./ConversationList";
import styles from "./MessagesDesktopView.module.css";

type MessagesDesktopViewProps = {
  children?: ReactNode;
  conversations: ConversationSummary[];
  from?: string;
  selectedConversationId?: string;
};

export function MessagesDesktopView({
  children,
  conversations,
  from,
  selectedConversationId,
}: MessagesDesktopViewProps) {
  return (
    <div className={styles.desktopView}>
      <aside className={styles.sidebar}>
        <Link className={styles.backLink} href={from ?? "/"}>
          ← Retour
        </Link>
        <h2 className={styles.title}>Messages</h2>
        <ConversationList
          compact
          conversations={conversations}
          from={from}
          selectedConversationId={selectedConversationId}
        />
      </aside>
      <section className={styles.conversationPanel}>
        {children ?? (
          <p className={styles.emptyState}>Selectionnez une conversation.</p>
        )}
      </section>
    </div>
  );
}
