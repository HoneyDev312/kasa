import type { ApiMessage } from "@/features/messages/messages.types";
import { mockProperties } from "./properties";

const currentUser = {
  id: 1,
  name: "Utilisateur demo",
  picture: null,
};

const hosts = [
  {
    id: 2,
    name: "Nathalie Jean",
    picture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg",
  },
  {
    id: 3,
    name: "Della Case",
    picture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg",
  },
];

let mockMessages: ApiMessage[] = [
  createMessage({
    id: 1,
    propertyId: "c67ab8a7",
    content: "Bonjour, votre logement est-il disponible ce week-end ?",
    createdAt: "2026-06-03T09:12:00.000Z",
    sender: currentUser,
    receiver: hosts[0],
  }),
  createMessage({
    id: 2,
    propertyId: "c67ab8a7",
    content: "Bonjour, oui il est disponible. Vous pouvez réserver.",
    createdAt: "2026-06-03T09:28:00.000Z",
    sender: hosts[0],
    receiver: currentUser,
  }),
  createMessage({
    id: 3,
    propertyId: "b9123946",
    content: "Est-ce que l'appartement est proche du métro ?",
    createdAt: "2026-06-02T16:44:00.000Z",
    sender: currentUser,
    receiver: hosts[1],
  }),
  createMessage({
    id: 4,
    propertyId: "b9123946",
    content: "Oui, la station la plus proche est à moins de cinq minutes.",
    createdAt: "2026-06-02T17:02:00.000Z",
    sender: hosts[1],
    receiver: currentUser,
  }),
];

export function getMockMessages(): Promise<ApiMessage[]> {
  return Promise.resolve([...mockMessages].sort(sortByNewestMessage));
}

export function getMockPropertyMessages(propertyId: string): Promise<ApiMessage[]> {
  return Promise.resolve(
    mockMessages
      .filter((message) => message.property_id === propertyId)
      .sort(sortByOldestMessage)
  );
}

export function sendMockPropertyMessage(
  propertyId: string,
  content: string
): Promise<ApiMessage> {
  const host = hosts[0];
  const message = createMessage({
    id: mockMessages.length + 1,
    propertyId,
    content,
    createdAt: new Date().toISOString(),
    sender: currentUser,
    receiver: host,
  });

  mockMessages = [...mockMessages, message];

  return Promise.resolve(message);
}

function createMessage({
  id,
  propertyId,
  content,
  createdAt,
  sender,
  receiver,
}: {
  id: number;
  propertyId: string;
  content: string;
  createdAt: string;
  sender: ApiMessage["sender"];
  receiver: ApiMessage["receiver"];
}): ApiMessage {
  const property = mockProperties.find((item) => item.id === propertyId);

  return {
    id,
    property_id: propertyId,
    content,
    created_at: createdAt,
    property: {
      id: propertyId,
      title: property?.title,
      cover: property?.cover,
    },
    sender,
    receiver,
  };
}

function sortByNewestMessage(a: ApiMessage, b: ApiMessage) {
  return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
}

function sortByOldestMessage(a: ApiMessage, b: ApiMessage) {
  return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
}
