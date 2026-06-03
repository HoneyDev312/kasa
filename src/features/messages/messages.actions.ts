"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getAuthUser } from "@/features/auth/auth.session";
import { sendPropertyMessage } from "./messages.services";
import { isUnauthorizedMessageError } from "./messages.errors";

/**
 * Envoie un message au propriétaire d'un logement.
 * La server action vérifie la session, ignore les messages vides et revalide
 * les pages concernées pour afficher le nouveau message.
 */
export async function sendMessageAction(propertyId: string, formData: FormData) {
  const user = await getAuthUser();

  if (!user) {
    redirect("/login");
  }

  const content = String(formData.get("message") || "").trim();

  if (!content) {
    return;
  }

  try {
    await sendPropertyMessage(propertyId, content);
  } catch (error) {
    if (isUnauthorizedMessageError(error)) {
      redirect("/login");
    }

    return;
  }

  revalidatePath("/messages");
  revalidatePath(`/messages/${propertyId}`);
  revalidatePath(`/announce/${propertyId}`);
}
