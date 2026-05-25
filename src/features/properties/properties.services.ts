import { apiClient } from "@/lib/apiClient";
import type { PropertySummary } from "./properties.types";

export function getProperties() {
  return apiClient.get<PropertySummary[]>("/api/properties", {
    auth: false,
    cache: "no-store",
  });
}
