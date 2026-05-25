"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { Icon } from "@/shared";
import styles from "./MessagesModal.module.css";

type MessagesModalProps = {
  children: ReactNode;
  closeHref: string;
  title: string;
};

export function MessagesModal({
  children,
  closeHref,
  title,
}: MessagesModalProps) {
  const router = useRouter();
  const closeModal = () => router.replace(closeHref);

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      onClick={closeModal}
    >
      <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <button
            className={styles.closeButton}
            type="button"
            aria-label="Fermer la messagerie"
            onClick={closeModal}
          >
            <Icon name="close" color="black" size="1.5rem" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
