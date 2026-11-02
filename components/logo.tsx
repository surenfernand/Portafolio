import Link from "next/link";

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="Web Loom Zone home">
      <span className="logo-mark" aria-hidden="true">
        w<span>z</span>
      </span>
      web loom<span className="brand-zone">zone.</span>
    </Link>
  );
}
