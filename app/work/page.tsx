import type { Metadata } from "next";
import { WorkSection } from "@/components/work-section";

export const metadata: Metadata = {
  title: "Our work",
  description:
    "Independent projects and websites contributed to in professional work, with links to the public sites.",
};

export default function WorkPage() {
  return (
    <main>
      <WorkSection />
    </main>
  );
}
