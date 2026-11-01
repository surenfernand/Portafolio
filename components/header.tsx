"use client";

import { useState } from "react";
import { Logo } from "./logo";

const links = [
  { href: "#services", label: "What we do" },
  { href: "#work", label: "Our work" },
  { href: "#process", label: "Our process" },
  { href: "#packages", label: "Pricing" },
  { href: "#about", label: "About us" },
];

export function Header() {
  const [open, setOpen] = useState(false);

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
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="button" href="#contact" onClick={closeMenu}>
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
