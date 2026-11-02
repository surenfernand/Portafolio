import type { Metadata } from "next";
import { WorkSection } from "@/components/work-section";

export const metadata: Metadata = {
  title: "Our work",
  description:
    "Sample website, online store, and web application concepts from Web Loom Zone.",
};

export default function WorkPage() {
  return (
    <main>
      <WorkSection />
    </main>
  );
}
