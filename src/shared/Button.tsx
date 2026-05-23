import Link from "next/link";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
};

export function Button({
  children,
  className = "",
  href,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  const classNames = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link className={classNames} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classNames} type={type}>
      {children}
    </button>
  );
}
