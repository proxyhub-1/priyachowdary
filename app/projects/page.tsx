import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ProjectGrid } from "@/components/project-grid";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="page-width interior-page">
      <SectionHeading eyebrow="01 / Selected work" title="AI projects" description="Generative AI, machine learning, and data products across healthcare, financial services, insurance, and enterprise knowledge workflows." />
      <ProjectGrid />
    </div>
  );
}
