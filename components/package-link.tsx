"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useSite } from "./site-context";

export function PackageLink({
  packageName,
  service,
  className,
  children,
}: {
  packageName: string;
  service?: string;
  className: string;
  children: ReactNode;
}) {
  const { selectOffer } = useSite();

  return (
    <Link
      className={className}
      href="/about#contact"
      onClick={() => selectOffer(packageName, service)}
    >
      {children}
    </Link>
  );
}
