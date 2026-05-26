import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import styles from "./Typography.module.css";

type TypographyColor = "primary" | "dark" | "gray" | "light";
type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "regular"
  | "medium"
  | "navLink"
  | "mobileLink"
  | "button"
  | "label";
type TypographyWeight = "bold" | "medium" | "regular" | "semibold";

type TypographyProps<TElement extends ElementType = "p"> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
  color?: TypographyColor;
  variant?: TypographyVariant;
  weight?: TypographyWeight;
} & Omit<
  ComponentPropsWithoutRef<TElement>,
  "as" | "children" | "className" | "color"
>;

export function Typography<TElement extends ElementType = "p">(
  typographyProps: TypographyProps<TElement>,
) {
  const {
    as,
    children,
    className,
    color,
    variant = "regular",
    weight,
    ...props
  } = typographyProps;
  const Component = as ?? "p";

  const typographyClassName = [
    styles.typography,
    styles[variant],
    color ? styles[color] : undefined,
    weight ? styles[weight] : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={typographyClassName} {...props}>
      {children}
    </Component>
  );
}
