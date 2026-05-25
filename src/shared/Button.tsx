import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.css";
import { Typography } from "./Typography";

type ButtonVariant = "primary" | "ghost";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonLinkProps = ButtonBaseProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonElementProps = ButtonBaseProps & {
  href?: undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
};

type ButtonProps = ButtonLinkProps | ButtonElementProps;

export function Button({
  children,
  className = "",
  href,
  onClick,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  const classNames = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link className={classNames} href={href}>
        <Typography variant="button">{children}</Typography>
      </Link>
    );
  }

  return (
    <button className={classNames} onClick={onClick} type={type}>
      <Typography variant="button">{children}</Typography>
    </button>
  );
}
