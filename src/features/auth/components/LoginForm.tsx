"use client";

import NextLink from "next/link";
import { useActionState } from "react";
import { Button, Input, Typography } from "@/shared";
import { loginAction } from "../auth.actions";
import type { LoginActionState } from "../auth.types";
import styles from "./LoginForm.module.css";

const initialState: LoginActionState = {
  message: "",
};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(
    loginAction,
    initialState
  );

  return (
    <>
      <form className={styles.form} action={formAction}>
        <Input
          id="email"
          label="Adresse email"
          name="email"
          type="email"
          autoComplete="email"
        />

        <Input
          id="password"
          label="Mot de passe"
          name="password"
          type="password"
          autoComplete="current-password"
        />

        {state.message ? (
          <Typography
            className={styles.errorMessage}
            variant="regular"
            role="alert"
          >
            {state.message}
          </Typography>
        ) : null}

        <Button
          className={styles.submitButton}
          disabled={pending}
          type="submit"
        >
          {pending ? "Connexion..." : "Se connecter"}
        </Button>
      </form>

      <div className={styles.footerLinks}>
        <NextLink href="/login">
          <Typography variant="regular" color="primary">
            Mot de passe oublie
          </Typography>
        </NextLink>
      </div>

      <Typography
        className={styles.registerText}
        variant="regular"
        color="primary"
      >
        Pas encore de compte ?{" "}
        <NextLink className={styles.inlineLink} href="/register">
          Inscrivez-vous
        </NextLink>
      </Typography>
    </>
  );
}
