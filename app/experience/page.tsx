import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/profile";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <div className="page-width interior-page">
      <SectionHeading eyebrow="02 / The path so far" title="Experience" description="Senior AI Engineer · 10+ years across Generative AI, Machine Learning, NLP, Data Science, and AI Engineering." />
      {experience.length ? (
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.organization}`}>
              <div className="timeline-period">
                <span>{item.period}</span>
                <span className="timeline-company">{item.organization}</span>
                {item.location && <span className="timeline-location">{item.location}</span>}
              </div>
              <div>
                <h2>{item.role}</h2>
                <h3 className="timeline-project">{item.project}</h3>
                <p className="timeline-description">{item.description}</p>
                <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                <div className="timeline-skills">
                  {item.environment.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </div>
  );
}
