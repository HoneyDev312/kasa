import { apiClient } from "@/lib/apiClient";
import type { PropertyDetails, PropertySummary } from "./properties.types";

type FavoriteMutationResponse = {
  ok: boolean;
};

export function getProperties() {
  return apiClient.get<PropertySummary[]>("/api/properties", {
    auth: false,
    cache: "no-store",
  });
}

export function getPropertyById(id: string) {
  return apiClient.get<PropertyDetails>(
    `/api/properties/${encodeURIComponent(id)}`,
    {
      auth: false,
      cache: "no-store",
    }
  );
}

export function getFavoriteProperties(userId: number) {
  return apiClient.get<PropertySummary[]>(
    `/api/users/${encodeURIComponent(userId)}/favorites`,
    {
      cache: "no-store",
    }
  );
}

export function addFavoriteProperty(propertyId: string) {
  return apiClient.post<FavoriteMutationResponse>(
    `/api/properties/${encodeURIComponent(propertyId)}/favorite`
  );
}

export function removeFavoriteProperty(propertyId: string) {
  return apiClient.delete<FavoriteMutationResponse>(
    `/api/properties/${encodeURIComponent(propertyId)}/favorite`
  );
}
