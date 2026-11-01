import { Logo } from "./logo";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-row">
          <Logo />
          <p>Thoughtfully designed. Carefully built.</p>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact ↗</a>
          </div>
        </div>
        <div className="template-note">
          © 2026 Web Loom Zone. &nbsp; Website concept. Portfolio examples are
          illustrative; update business details before launch.
        </div>
      </div>
    </footer>
  );
}
