"use client";

import { useState, useTransition } from "react";
import { toggleFavoriteAction } from "../properties.actions";
import { FavoriteButton } from "./FavoriteButton";

type FavoriteToggleProps = {
  isFavorite: boolean;
  propertyId: string;
};

export function FavoriteToggle({
  isFavorite,
  propertyId,
}: FavoriteToggleProps) {
  const [optimisticFavorite, setOptimisticFavorite] = useState(isFavorite);
  const [isPending, startTransition] = useTransition();

  function toggleFavorite() {
    const nextFavorite = !optimisticFavorite;

    setOptimisticFavorite(nextFavorite);

    startTransition(async () => {
      try {
        const result = await toggleFavoriteAction(propertyId, optimisticFavorite);

        setOptimisticFavorite(result.isFavorite);
      } catch (error) {
        setOptimisticFavorite(!nextFavorite);
        throw error;
      }
    });
  }

  return (
    <FavoriteButton
      aria-pressed={optimisticFavorite}
      disabled={isPending}
      isFavorite={optimisticFavorite}
      onClick={toggleFavorite}
    />
  );
}
