"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import type { UrlObject } from "url";

interface NavLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  activeClassName?: string;
  pendingClassName?: string;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    { href, className, activeClassName, pendingClassName, children, ...props },
    ref
  ) => {
    const pathname = usePathname();

    const isActive = pathname === href;
    const isPending = false; // Next.js has no built-in pending state

    return (
      <Link
        href={href as unknown as UrlObject}
        ref={ref}
        className={cn(
          className,
          isActive && activeClassName,
          isPending && pendingClassName
        )}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";
