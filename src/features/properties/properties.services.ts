import { ApiError, apiClient } from "@/lib/apiClient";
import { API_BASE_URL, isMockMode } from "@/lib/config";
import type { PropertyDetails, PropertySummary } from "./properties.types";

type FavoriteMutationResponse = {
  ok: boolean;
};

/**
 * Récupère la liste publique des logements affichés sur la page d'accueil.
 * L'appel est fait sans authentification pour rester accessible au rendu serveur.
 */
export async function getProperties() {
  if (shouldUseMocks()) {
    const { getMockProperties } = await import("@/mocks/properties");

    return getMockProperties();
  }

  return apiClient.get<PropertySummary[]>("/api/properties", {
    auth: false,
    cache: "no-store",
  });
}

/**
 * Récupère le détail public d'un logement à partir de son identifiant.
 * L'identifiant est encodé avant d'être injecté dans l'URL de l'API.
 */
export async function getPropertyById(id: string) {
  if (shouldUseMocks()) {
    const { getMockPropertyById } = await import("@/mocks/properties");

    return getMockPropertyById(id).then((property) => {
      if (!property) {
        throw new ApiError("Logement introuvable", 404);
      }

      return property;
    });
  }

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
export async function getFavoriteProperties(userId: number) {
  if (shouldUseMocks()) {
    const { getMockFavoriteProperties } = await import("@/mocks/properties");

    return getMockFavoriteProperties();
  }

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
export async function addFavoriteProperty(propertyId: string) {
  if (shouldUseMocks()) {
    const { addMockFavoriteProperty } = await import("@/mocks/properties");

    return addMockFavoriteProperty(propertyId);
  }

  return apiClient.post<FavoriteMutationResponse>(
    `/api/properties/${encodeURIComponent(propertyId)}/favorite`
  );
}

/**
 * Retire un logement des favoris de l'utilisateur courant.
 */
export async function removeFavoriteProperty(propertyId: string) {
  if (shouldUseMocks()) {
    const { removeMockFavoriteProperty } = await import("@/mocks/properties");

    return removeMockFavoriteProperty(propertyId);
  }

  return apiClient.delete<FavoriteMutationResponse>(
    `/api/properties/${encodeURIComponent(propertyId)}/favorite`
  );
}

function shouldUseMocks() {
  return isMockMode() || !API_BASE_URL;
}
