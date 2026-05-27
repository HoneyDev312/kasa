"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";

const MOBILE_BREAKPOINT_QUERY = "(max-width: 47.5rem)";

type MessagesLinkProps = {
  children: ReactNode;
  className?: string;
  from?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

export function MessagesLink({
  children,
  className,
  from,
  onClick,
  "aria-label": ariaLabel,
}: MessagesLinkProps) {
  const href = from
    ? { pathname: "/messages", query: { from } }
    : { pathname: "/messages" };

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.();

    if (!window.matchMedia(MOBILE_BREAKPOINT_QUERY).matches) {
      return;
    }

    event.preventDefault();
    window.location.assign(getMessagesHref(from));
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

function getMessagesHref(from?: string) {
  if (!from) return "/messages";

  const params = new URLSearchParams({ from });
  return `/messages?${params.toString()}`;
}
