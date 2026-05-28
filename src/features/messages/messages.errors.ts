import { ApiError } from "@/lib/apiClient";

export function isUnauthorizedMessageError(error: unknown) {
  return error instanceof ApiError && error.status === 401;
}

export function getMessagesErrorMessage(error: unknown) {
  if (error instanceof ApiError) {
    return error.message;
  }

  return "Impossible de charger la messagerie pour le moment.";
}
