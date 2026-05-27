import styles from "./ConversationDetail.module.css";
import { Icon } from "@/shared";
import type { ConversationMessage } from "../messages.types";

type ConversationDetailProps = {
  id: string;
  messages: ConversationMessage[];
};

export function ConversationDetail({ id, messages }: ConversationDetailProps) {
  return (
    <article className={styles.detail} aria-labelledby={`conversation-${id}`}>
      <h1 className={styles.srOnly} id={`conversation-${id}`}>
        Conversation {id}
      </h1>

      <div className={styles.thread}>
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
                <p className={styles.messageMeta}>
                  {message.author}
                  <span aria-hidden="true">•</span>
                  {message.time}
                </p>
                <p className={styles.bubble}>{message.text}</p>
              </div>
              {message.mine ? (
                <span className={styles.avatar} aria-hidden="true" />
              ) : null}
            </div>
          );
        })}
      </div>

      <form className={styles.composer}>
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
        <button className={styles.sendButton} type="submit" aria-label="Envoyer">
          <Icon name="send" color="white" size="1.1rem" />
        </button>
      </form>
    </article>
  );
}
