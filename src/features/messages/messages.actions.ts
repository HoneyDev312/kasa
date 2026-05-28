"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getAuthUser } from "@/features/auth/auth.session";
import { sendPropertyMessage } from "./messages.services";
import { isUnauthorizedMessageError } from "./messages.errors";

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
