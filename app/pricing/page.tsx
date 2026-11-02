import type { Metadata } from "next";
import { Faq } from "@/components/faq";
import { Pricing } from "@/components/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "One-time development prices for websites, online stores, and custom software, plus hosting and maintenance.",
};

export default function PricingPage() {
  return (
    <main>
      <Pricing />
      <Faq />
    </main>
  );
}
