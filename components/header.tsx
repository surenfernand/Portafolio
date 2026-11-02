"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { whatsapp } from "@/lib/content";
import { Logo } from "./logo";

const links = [
  { href: "/services", label: "What we do" },
  { href: "/work", label: "Our work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About us" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header>
      <div className="wrap nav">
        <Logo />
        <button
          className="menu"
          type="button"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen((current) => !current)}
        >
          Menu ☰
        </button>
        <nav
          className={open ? "nav-links open" : "nav-links"}
          id="navigation"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <a
            className="button"
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
