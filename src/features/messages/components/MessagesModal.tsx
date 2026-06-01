"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { Typography } from "@/shared";
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
        {title ? (
          <Typography as="h2" className={styles.srOnly} variant="h2">
            {title}
          </Typography>
        ) : null}
        {children}
      </div>
    </div>
  );
}
