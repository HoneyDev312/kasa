import { apiClient } from "@/lib/apiClient";
import { API_BASE_URL, isMockMode } from "@/lib/config";
import type {
  ApiMessage,
  ConversationMessage,
  ConversationSummary,
} from "./messages.types";

export async function getMessages() {
  if (shouldUseMocks()) {
    const { getMockMessages } = await import("@/mocks/messages");

    return getMockMessages();
  }

  return apiClient.get<ApiMessage[]>("/api/messages", {
    cache: "no-store",
  });
}

export async function getPropertyMessages(propertyId: string) {
  if (shouldUseMocks()) {
    const { getMockPropertyMessages } = await import("@/mocks/messages");

    return getMockPropertyMessages(propertyId);
  }

  return apiClient.get<ApiMessage[]>(
    `/api/properties/${encodeURIComponent(propertyId)}/messages`,
    {
      cache: "no-store",
    }
  );
}

export async function sendPropertyMessage(propertyId: string, content: string) {
  if (shouldUseMocks()) {
    const { sendMockPropertyMessage } = await import("@/mocks/messages");

    return sendMockPropertyMessage(propertyId, content);
  }

  return apiClient.post<ApiMessage>(
    `/api/properties/${encodeURIComponent(propertyId)}/messages`,
    { content }
  );
}

function shouldUseMocks() {
  return isMockMode() || !API_BASE_URL;
}

export function toConversationSummaries(
  messages: ApiMessage[],
  currentUserId: number
): ConversationSummary[] {
  const conversations = new Map<string, ConversationSummary>();

  for (const message of messages) {
    if (conversations.has(message.property_id)) {
      continue;
    }

    const otherUser =
      message.sender.id === currentUserId ? message.receiver : message.sender;

    conversations.set(message.property_id, {
      id: message.property_id,
      name: otherUser.name,
      preview: message.content,
      propertyTitle: message.property.title,
      time: formatMessageTime(message.created_at),
      unread: message.receiver.id === currentUserId,
    });
  }

  return Array.from(conversations.values());
}

export function toConversationMessages(
  messages: ApiMessage[],
  currentUserId: number
): ConversationMessage[] {
  const entries: ConversationMessage[] = [];
  let previousDate = "";

  for (const message of messages) {
    const dateLabel = formatMessageDate(message.created_at);

    if (dateLabel !== previousDate) {
      entries.push({
        id: `date-${message.created_at}-${message.id}`,
        date: dateLabel,
      });
      previousDate = dateLabel;
    }

    entries.push({
      id: String(message.id),
      author: message.sender.name,
      mine: message.sender.id === currentUserId,
      text: message.content,
      time: formatMessageTime(message.created_at),
    });
  }

  return entries;
}

function formatMessageTime(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function formatMessageDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}
