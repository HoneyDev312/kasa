import type { ReactNode } from "react";
import { ConversationList } from "./ConversationList";
import styles from "./MessagesDesktopView.module.css";

type MessagesDesktopViewProps = {
  children?: ReactNode;
  from?: string;
};

export function MessagesDesktopView({
  children,
  from,
}: MessagesDesktopViewProps) {
  return (
    <div className={styles.desktopView}>
      <aside className={styles.sidebar}>
        <ConversationList compact from={from} />
      </aside>
      <section className={styles.conversationPanel}>
        {children ?? (
          <p className={styles.emptyState}>Selectionnez une conversation.</p>
        )}
      </section>
    </div>
  );
}
