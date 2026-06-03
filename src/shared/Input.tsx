import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";
import { Typography } from "./Typography";

type InputProps = {
  className?: string;
  id: string;
  label: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "id">;

/**
 * Champ texte partagé avec label associé.
 * L'identifiant est obligatoire pour garantir le lien accessible entre le label
 * et l'input.
 */
export function Input({ className = "", id, label, ...props }: InputProps) {
  const classNames = [styles.input, className].filter(Boolean).join(" ");

  return (
    <div className={styles.field}>
      <Typography as="label" htmlFor={id} variant="label">
        {label}
      </Typography>
      <input className={classNames} id={id} {...props} />
    </div>
  );
}
