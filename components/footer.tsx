import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-row">
          <Logo />
          <p>Thoughtfully designed. Carefully built.</p>
          <div className="footer-links">
            <Link href="/services">Services</Link>
            <Link href="/work">Work</Link>
            <Link href="/about#contact">Contact ↗</Link>
          </div>
        </div>
        <div className="template-note">
          © 2026 Web Loom Zone.
        </div>
      </div>
    </footer>
  );
}
