import { apiClient } from "@/lib/apiClient";
import type { PropertyDetails, PropertySummary } from "./properties.types";

type FavoriteMutationResponse = {
  ok: boolean;
};

/**
 * Récupère la liste publique des logements affichés sur la page d'accueil.
 * L'appel est fait sans authentification pour rester accessible au rendu serveur.
 */
export function getProperties() {
  return apiClient.get<PropertySummary[]>("/api/properties", {
    auth: false,
    cache: "no-store",
  });
}

/**
 * Récupère le détail public d'un logement à partir de son identifiant.
 * L'identifiant est encodé avant d'être injecté dans l'URL de l'API.
 */
export function getPropertyById(id: string) {
  return apiClient.get<PropertyDetails>(
    `/api/properties/${encodeURIComponent(id)}`,
    {
      auth: false,
      cache: "no-store",
    }
  );
}

/**
 * Récupère les logements favoris d'un utilisateur authentifié.
 */
export function getFavoriteProperties(userId: number) {
  return apiClient.get<PropertySummary[]>(
    `/api/users/${encodeURIComponent(userId)}/favorites`,
    {
      cache: "no-store",
    }
  );
}

/**
 * Ajoute un logement aux favoris de l'utilisateur courant.
 */
export function addFavoriteProperty(propertyId: string) {
  return apiClient.post<FavoriteMutationResponse>(
    `/api/properties/${encodeURIComponent(propertyId)}/favorite`
  );
}

/**
 * Retire un logement des favoris de l'utilisateur courant.
 */
export function removeFavoriteProperty(propertyId: string) {
  return apiClient.delete<FavoriteMutationResponse>(
    `/api/properties/${encodeURIComponent(propertyId)}/favorite`
  );
}
