"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import styles from "./MessagesModal.module.css";

type MessagesModalProps = {
  children: ReactNode;
  closeHref: string;
  title?: string;
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
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        {title ? <h2 className={styles.srOnly}>{title}</h2> : null}
        {children}
      </div>
    </div>
  );
}
