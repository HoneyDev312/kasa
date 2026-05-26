import { notFound } from "next/navigation";
import { ApiError } from "@/lib/apiClient";
import { getPropertyById } from "@/features/properties";

export async function getPropertyOrNotFound(id: string) {
  try {
    return await getPropertyById(id);
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      notFound();
    }

    throw error;
  }
}
