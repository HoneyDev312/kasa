"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";

const MOBILE_BREAKPOINT_QUERY = "(max-width: 47.5rem)";

type MessagesLinkProps = {
  children: ReactNode;
  className?: string;
  conversationId?: string;
  from?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

/**
 * Lien vers la messagerie avec un comportement adapté au viewport.
 * Sur desktop, la navigation Next peut ouvrir la route interceptée en modal ;
 * sur mobile, une navigation complète est forcée vers la page messages.
 */
export function MessagesLink({
  children,
  className,
  conversationId,
  from,
  onClick,
  "aria-label": ariaLabel,
}: MessagesLinkProps) {
  const pathname = conversationId ? `/messages/${conversationId}` : "/messages";
  const href = from
    ? { pathname, query: { from } }
    : { pathname };

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.();

    if (!window.matchMedia(MOBILE_BREAKPOINT_QUERY).matches) {
      return;
    }

    event.preventDefault();
    window.location.assign(getMessagesHref({ conversationId, from }));
  };

  return (
    <Link
      aria-label={ariaLabel}
      className={className}
      href={href}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}

function getMessagesHref({
  conversationId,
  from,
}: {
  conversationId?: string;
  from?: string;
}) {
  const pathname = conversationId ? `/messages/${conversationId}` : "/messages";
  if (!from) return pathname;

  const params = new URLSearchParams({ from });
  return `${pathname}?${params.toString()}`;
}
