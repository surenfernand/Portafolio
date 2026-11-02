import type { Metadata } from "next";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Web Loom Zone designs and builds websites and software for growing businesses. Start with a conversation.",
};

export default function AboutPage() {
  return (
    <main>
      <About />
      <Contact />
    </main>
  );
}
