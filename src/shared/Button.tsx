import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";
import { Typography } from "./Typography";

type ButtonVariant = "primary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  children,
  className = "",
  onClick,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classNames = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classNames} onClick={onClick} type={type} {...props}>
      <Typography variant="button">{children}</Typography>
    </button>
  );
}
