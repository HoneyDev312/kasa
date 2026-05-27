import type { ConversationMessage, ConversationSummary } from "./messages.types";

const defaultMessage =
  "Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?";

export function getMockConversations(): ConversationSummary[] {
  return Array.from({ length: 8 }, (_, index) => ({
    id: String(index + 1),
    name: "Utilisateur",
    preview: "Bonjour, votre appartement est-il disp...",
    time: "11:04 am",
    unread: index < 3,
  }));
}

export function getMockConversationMessages(
  conversationId: string
): ConversationMessage[] {
  return [
    {
      id: `${conversationId}-1`,
      author: "Utilisateur",
      time: "11:04pm",
      text: defaultMessage,
    },
    {
      id: `${conversationId}-2`,
      author: "Utilisateur",
      time: "11:04pm",
      text: defaultMessage,
    },
    {
      id: `${conversationId}-3`,
      author: "Utilisateur",
      time: "11:04pm",
      text: defaultMessage,
      mine: true,
    },
    { id: `${conversationId}-date-1`, date: "03 Septembre 2025" },
    {
      id: `${conversationId}-4`,
      author: "Utilisateur",
      time: "11:04pm",
      text: defaultMessage,
    },
    {
      id: `${conversationId}-5`,
      author: "Utilisateur",
      time: "11:04pm",
      text: defaultMessage,
      mine: true,
    },
    {
      id: `${conversationId}-6`,
      author: "Utilisateur",
      time: "11:04pm",
      text: defaultMessage,
    },
  ];
}
