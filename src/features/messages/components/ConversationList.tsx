"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import styles from "./ConversationList.module.css";

const conversations = [
  { id: "1", name: "Camille", preview: "Le logement est-il disponible ?" },
  { id: "2", name: "Nadia", preview: "Merci pour votre retour." },
  { id: "3", name: "Thomas", preview: "Je peux arriver vers 18h." },
];

type ConversationListProps = {
  compact?: boolean;
  from?: string;
};

export function ConversationList({
  compact = false,
  from,
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
            className={styles.conversation}
            href={from ? { pathname: href, query: { from } } : href}
            key={conversation.id}
            onClick={(event) => openConversationPage(event, href)}
          >
            <span className={styles.name}>{conversation.name}</span>
            <span className={styles.preview}>{conversation.preview}</span>
          </Link>
        );
      })}
    </div>
  );
}
