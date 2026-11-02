import type { Metadata } from "next";
import { Process } from "@/components/process";
import { Services } from "@/components/services";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "Business websites, online stores, and custom web applications, delivered through a clear four-step process.",
};

export default function ServicesPage() {
  return (
    <main>
      <Services />
      <Process />
    </main>
  );
}
