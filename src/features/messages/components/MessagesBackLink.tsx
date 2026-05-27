"use client";

import type { ReactNode, MouseEvent } from "react";
import Link from "next/link";

type MessagesBackLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

export function MessagesBackLink({
  children,
  className,
  href,
}: MessagesBackLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.assign(href);
  };

  return (
    <Link className={className} href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}
