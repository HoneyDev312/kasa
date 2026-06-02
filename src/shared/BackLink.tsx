"use client";

import NextLink from "next/link";
import type { MouseEvent, ReactNode } from "react";
import styles from "./BackLink.module.css";
import { Icon } from "./icons";
import { Typography } from "./Typography";

type BackLinkSize = "small" | "medium" | "large";

type BackLinkProps = {
  children?: ReactNode;
  className?: string;
  href: string;
  reloadDocument?: boolean;
  size?: BackLinkSize;
};

export function BackLink({
  children = "Retour",
  className = "",
  href,
  reloadDocument = false,
  size = "medium",
}: BackLinkProps) {
  const classNames = [styles.link, styles[size], className]
    .filter(Boolean)
    .join(" ");

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!reloadDocument) {
      return;
    }

    event.preventDefault();
    window.location.assign(href);
  };

  return (
    <NextLink className={classNames} href={href} onClick={handleClick}>
      <Icon color="grayDark" name="back" size="1rem" />
      <Typography as="span" className={styles.label} variant="button">
        {children}
      </Typography>
    </NextLink>
  );
}
