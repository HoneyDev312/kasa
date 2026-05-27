export type ConversationSummary = {
  id: string;
  name: string;
  preview: string;
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
