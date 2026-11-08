"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { projects } from "@/data/profile";

export function ProjectGrid() {
  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  const [active, setActive] = useState("All");
  const visible = useMemo(
    () => projects.filter((project) => active === "All" || project.category === active),
    [active],
  );

  if (projects.length === 0) {
    return (
      <div className="empty-panel project-empty">
        <span className="empty-index">01 / SOON</span>
        <h2>Good work deserves an honest story.</h2>
        <p>
          Project details are being gathered. Only work Priya has actually completed will be
          presented as hers; open-source studies can be clearly credited as studies.
        </p>
        <Link className="text-link" href="/contact">
          Get in touch <ArrowUpRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="filter-row" aria-label="Filter projects">
        {categories.map((category) => (
          <button
            aria-pressed={active === category}
            className={`filter-chip${active === category ? " active" : ""}`}
            key={category}
            onClick={() => setActive(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visible.map((project, index) => (
          <Link className="project-card" href={`/projects/${project.slug}`} key={project.slug}>
            <div className={`project-art art-${(index % 3) + 1}`}>
              <span className="project-art-label">{project.category}</span>
              <span className="project-art-symbol">{String(index + 1).padStart(2, "0")}</span>
              <MoveUpRight size={20} className="project-art-arrow" />
            </div>
            <div className="project-card-meta">
              <div>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
              </div>
              <ArrowUpRight size={18} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
