import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/profile";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <article className="page-width interior-page case-study">
      <Link className="text-link" href="/projects"><ArrowLeft size={16} /> Back to projects</Link>
      <div className="case-study-hero">
        <p className="eyebrow">{project.category}{project.year ? ` · ${project.year}` : ""}</p>
        <h1>{project.title}</h1>
        <p className="lead">{project.summary}</p>
      </div>
      <div className="case-study-content">
        <p className="study-disclaimer">{project.context ?? "Selected professional work"}</p>
        <h2>Project overview</h2>
        <p>{project.description ?? project.summary}</p>
        {project.technologies && (
          <div className="expertise-list">
            {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        )}
        {project.links?.map((link) => (
          <a className="text-link" href={link.href} key={link.href} target="_blank" rel="noreferrer">
            {link.label} <ArrowUpRight size={16} />
          </a>
        ))}
      </div>
    </article>
  );
}
