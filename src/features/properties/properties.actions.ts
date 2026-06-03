"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getAuthUser } from "@/features/auth/auth.session";
import { addFavoriteProperty, removeFavoriteProperty } from "./properties.services";

/**
 * Alterne l'état favori d'un logement depuis un composant client.
 * Redirige vers la connexion si l'utilisateur n'est pas authentifié, puis
 * revalide les pages qui affichent cette information.
 */
export async function toggleFavoriteAction(
  propertyId: string,
  isFavorite: boolean
) {
  const user = await getAuthUser();

  if (!user) {
    redirect("/login");
  }

  if (isFavorite) {
    await removeFavoriteProperty(propertyId);
  } else {
    await addFavoriteProperty(propertyId);
  }

  revalidatePath("/");
  revalidatePath("/favorites");
  revalidatePath(`/announce/${propertyId}`);

  return {
    isFavorite: !isFavorite,
  };
}
