import { redirect } from "next/navigation";
import { getAuthUser } from "@/features/auth/auth.session";
import {
  ConversationDetail,
  getModalCloseHref,
  MessagesDesktopView,
  MessagesModal,
} from "@/features/messages";
import {
  getMessages,
  getPropertyMessages,
  toConversationMessages,
  toConversationSummaries,
} from "@/features/messages/messages.services";
import type {
  ConversationMessage,
  ConversationSummary,
} from "@/features/messages";
import { isUnauthorizedMessageError } from "@/features/messages/messages.errors";

type MessageModalPageProps = {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    from?: string | string[];
  }>;
};

export default async function MessageModalPage({
  params,
  searchParams,
}: MessageModalPageProps) {
  const user = await getAuthUser();

  if (!user) {
    redirect("/login");
  }

  const { id } = await params;
  const closeHref = getModalCloseHref(await searchParams);
  let conversations: ConversationSummary[] = [];
  let messages: ConversationMessage[] = [];

  try {
    const allMessages = await getMessages();
    conversations = toConversationSummaries(allMessages, user.id);
  } catch (error) {
    if (isUnauthorizedMessageError(error)) {
      redirect("/login");
    }
  }

  try {
    const propertyMessages = await getPropertyMessages(id);
    messages = toConversationMessages(propertyMessages, user.id);
  } catch (error) {
    if (isUnauthorizedMessageError(error)) {
      redirect("/login");
    }

  }

  return (
    <MessagesModal closeHref={closeHref} title="Messages">
      <MessagesDesktopView
        conversations={conversations}
        from={closeHref}
        selectedConversationId={id}
      >
        <ConversationDetail id={id} messages={messages} />
      </MessagesDesktopView>
    </MessagesModal>
  );
}
