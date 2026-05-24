import type { ElementType, ReactNode } from "react";
import styles from "./Typography.module.css";

type TypographyColor = "primary" | "dark" | "gray";
type TypographyVariant = "h1" | "regular" | "medium" | "navLink";
type TypographyWeight = "bold" | "medium" | "regular" | "semibold";

type TypographyProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  color?: TypographyColor;
  variant?: TypographyVariant;
  weight?: TypographyWeight;
};

export function Typography({
  as: Component = "p",
  children,
  className,
  color,
  variant = "regular",
  weight,
}: TypographyProps) {
  const typographyClassName = [
    styles.typography,
    styles[variant],
    color ? styles[color] : undefined,
    weight ? styles[weight] : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Component className={typographyClassName}>{children}</Component>;
}
