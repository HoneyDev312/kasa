import styles from "./ConversationDetail.module.css";
import { Icon, Typography } from "@/shared";
import { sendMessageAction } from "../messages.actions";
import type { ConversationMessage } from "../messages.types";

type ConversationDetailProps = {
  id: string;
  messages: ConversationMessage[];
};

export function ConversationDetail({ id, messages }: ConversationDetailProps) {
  const sendAction = sendMessageAction.bind(null, id);

  return (
    <article className={styles.detail} aria-labelledby={`conversation-${id}`}>
      <Typography
        as="h1"
        className={styles.srOnly}
        id={`conversation-${id}`}
        variant="h1"
      >
        Conversation {id}
      </Typography>

      <div className={styles.thread}>
        {messages.length === 0 ? (
          <Typography color="dark" variant="regular">
            Commencez la conversation.
          </Typography>
        ) : null}

        {messages.map((message) => {
          if ("date" in message) {
            return (
              <div className={styles.dateSeparator} key={message.id}>
                <span>{message.date}</span>
              </div>
            );
          }

          return (
            <div
              className={[
                styles.messageRow,
                message.mine ? styles.mine : "",
              ].join(" ")}
              key={message.id}
            >
              {!message.mine ? (
                <span className={styles.avatar} aria-hidden="true" />
              ) : null}
              <div className={styles.messageContent}>
                <Typography
                  className={styles.messageMeta}
                  color="dark"
                  variant="medium"
                >
                  {message.author}
                  <span aria-hidden="true">•</span>
                  {message.time}
                </Typography>
                <Typography className={styles.bubble} variant="regular">
                  {message.text}
                </Typography>
              </div>
              {message.mine ? (
                <span className={styles.avatar} aria-hidden="true" />
              ) : null}
            </div>
          );
        })}
      </div>

      <form action={sendAction} className={styles.composer}>
        <label className={styles.srOnly} htmlFor={`message-${id}`}>
          Envoyer un message
        </label>
        <textarea
          className={styles.textarea}
          id={`message-${id}`}
          name="message"
          placeholder="Envoyer un message"
          rows={3}
        />
        <button
          className={styles.sendButton}
          type="submit"
          aria-label="Envoyer"
        >
          <Icon name="send" color="white" size="1.1rem" />
        </button>
      </form>
    </article>
  );
}
