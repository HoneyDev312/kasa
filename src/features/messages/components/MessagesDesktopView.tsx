import type { ReactNode } from "react";
import { BackLink, Typography } from "@/shared";
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
        <BackLink className={styles.backLink} href={from ?? "/"} size="large" />
        <Typography as="h2" className={styles.title} variant="h1">
          Messages
        </Typography>
        <ConversationList
          compact
          conversations={conversations}
          from={from}
          selectedConversationId={selectedConversationId}
        />
        {conversations.length === 0 ? (
          <Typography className={styles.emptyList} color="dark">
            Pas de conversation
          </Typography>
        ) : null}
      </aside>
      <section className={styles.conversationPanel}>
        {children ?? (
          <Typography className={styles.emptyState} color="dark">
            Selectionnez une conversation.
          </Typography>
        )}
      </section>
    </div>
  );
}
