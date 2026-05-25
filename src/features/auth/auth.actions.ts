"use server";

import { redirect } from "next/navigation";
import { ApiError } from "@/lib/apiClient";
import { login } from "./auth.services";
import { setAuthToken } from "./auth.session";
import type { LoginActionState } from "./auth.types";

export async function loginAction(
  _state: LoginActionState,
  formData: FormData
): Promise<LoginActionState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return {
      message: "Veuillez renseigner votre email et votre mot de passe.",
    };
  }

  try {
    const { token } = await login({ email, password });
    await setAuthToken(token);
  } catch (error) {
    if (error instanceof ApiError) {
      return {
        message:
          error.status === 401
            ? "Email ou mot de passe incorrect."
            : error.message,
      };
    }

    return {
      message: "Impossible de vous connecter pour le moment.",
    };
  }

  redirect("/");
}
