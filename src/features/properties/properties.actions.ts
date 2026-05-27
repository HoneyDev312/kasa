"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getAuthUser } from "@/features/auth/auth.session";
import { addFavoriteProperty, removeFavoriteProperty } from "./properties.services";

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
