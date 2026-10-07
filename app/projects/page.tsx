import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProjectsGrid from "./ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Residential, commercial, and kitchen interiors by Percept Interior Solutions in Banjara Hills, Hyderabad.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Portfolio"
        title="Projects"
        description="Selected interiors across residential, commercial, and kitchen work. Inquire about a similar design on WhatsApp."
      />
      <div className="mt-10">
        <ProjectsGrid />
      </div>
    </section>
  );
}
