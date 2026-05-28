export type ConversationSummary = {
  id: string;
  name: string;
  preview: string;
  propertyTitle?: string | null;
  time: string;
  unread?: boolean;
};

export type ConversationMessage =
  | {
      id: string;
      author: string;
      time: string;
      text: string;
      mine?: boolean;
    }
  | {
      id: string;
      date: string;
    };

export type ApiMessage = {
  id: number;
  property_id: string;
  content: string;
  created_at: string;
  property: {
    id: string;
    title?: string | null;
    cover?: string | null;
  };
  sender: {
    id: number;
    name: string;
    picture?: string | null;
  };
  receiver: {
    id: number;
    name: string;
    picture?: string | null;
  };
};
