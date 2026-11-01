"use client";

import type { ReactNode } from "react";
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
    <a
      className={className}
      href="#contact"
      onClick={() => selectOffer(packageName, service)}
    >
      {children}
    </a>
  );
}
