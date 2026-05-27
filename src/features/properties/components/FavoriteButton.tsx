import type { ButtonHTMLAttributes } from "react";
import { Icon } from "@/shared";
import styles from "./FavoriteButton.module.css";

type FavoriteButtonProps = {
  isFavorite?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export function FavoriteButton({
  className = "",
  isFavorite = false,
  ...props
}: FavoriteButtonProps) {
  const classNames = [styles.button, className].filter(Boolean).join(" ");

  return (
    <button
      aria-label={
        isFavorite
          ? "Retirer cette annonce des favoris"
          : "Ajouter cette annonce aux favoris"
      }
      className={classNames}
      type="button"
      {...props}
    >
      <Icon name={isFavorite ? "favorisFilled" : "favoris"} />
    </button>
  );
}
