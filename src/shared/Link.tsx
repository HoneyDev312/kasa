import NextLink from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.css";
import { Typography } from "./Typography";

type LinkVariant = "primary" | "ghost";

type LinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  variant?: LinkVariant;
};

export function Link({
  children,
  className = "",
  href,
  onClick,
  variant = "primary",
}: LinkProps) {
  const classNames = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <NextLink className={classNames} href={href} onClick={onClick}>
      <Typography variant="button">{children}</Typography>
    </NextLink>
  );
}
