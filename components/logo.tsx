import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="Web Loom Zone home">
      <Image
        className="logo-mark"
        src="/brand/logo.png"
        alt=""
        width={779}
        height={376}
        sizes="74px"
      />
      web loom<span className="brand-zone">zone.</span>
    </Link>
  );
}
