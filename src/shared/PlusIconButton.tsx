import type { ButtonHTMLAttributes } from "react";
import styles from "./PlusIconButton.module.css";
import { Icon } from "./icons";

type PlusIconButtonProps = {
  className?: string;
  label: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-label" | "children" | "className">;

export function PlusIconButton({
  className = "",
  label,
  type = "button",
  ...props
}: PlusIconButtonProps) {
  const classNames = [styles.button, className].filter(Boolean).join(" ");

  return (
    <button aria-label={label} className={classNames} type={type} {...props}>
      <Icon color="white" name="plus" size="var(--plus-icon-size, 1rem)" />
    </button>
  );
}
