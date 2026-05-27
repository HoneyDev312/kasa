"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import type { ConversationSummary } from "../messages.types";
import styles from "./ConversationList.module.css";

type ConversationListProps = {
  compact?: boolean;
  conversations: ConversationSummary[];
  from?: string;
  selectedConversationId?: string;
};

export function ConversationList({
  compact = false,
  conversations,
  from,
  selectedConversationId,
}: ConversationListProps) {
  const openConversationPage = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (from) {
      return;
    }

    event.preventDefault();
    window.location.assign(href);
  };

  return (
    <div className={[styles.list, compact ? styles.compact : ""].join(" ")}>
      {conversations.map((conversation) => {
        const href = `/messages/${conversation.id}`;

        return (
          <Link
            className={[
              styles.conversation,
              conversation.id === selectedConversationId ? styles.active : "",
            ].join(" ")}
            href={from ? { pathname: href, query: { from } } : href}
            key={conversation.id}
            onClick={(event) => openConversationPage(event, href)}
          >
            <span className={styles.avatar} aria-hidden="true" />
            <span className={styles.content}>
              <span className={styles.name}>{conversation.name}</span>
              <span className={styles.preview}>{conversation.preview}</span>
            </span>
            <span className={styles.meta}>
              <span>{conversation.time}</span>
              {conversation.unread ? (
                <span className={styles.unread} aria-label="Non lu" />
              ) : null}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
