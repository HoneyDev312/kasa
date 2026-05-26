import { apiClient } from "@/lib/apiClient";
import type { PropertyDetails, PropertySummary } from "./properties.types";

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
