import Link from "next/link";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { HeroArt } from "@/components/hero-art";
import { profile, projects } from "@/data/profile";

export default function HomePage() {
  return (
    <>
      <section className="hero page-width">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Portfolio · 2026</p>
          <h1>
            Hello, I’m Priya.
            <br />
            <span>{profile.role}.</span>
          </h1>
          <p className="hero-intro">
            {profile.experienceSummary} Driven by curiosity and continuous learning, I turn
            knowledge and ideas into meaningful outcomes.
          </p>
          <div className="hero-specialties" aria-label="Specialties">
            {profile.specialties.map((specialty) => <span key={specialty}>{specialty}</span>)}
          </div>
          <div className="hero-actions">
            <Link className="button button-dark" href="/projects">
              Explore my work <ArrowUpRight size={16} />
            </Link>
            <Link className="text-link" href="/about">
              My story <MoveRight size={16} />
            </Link>
          </div>
        </div>
        <HeroArt />
        <div className="hero-index"><span>SCROLL TO DISCOVER</span><span>↓</span></div>
      </section>

      <section className="intro-band">
        <div className="page-width intro-band-inner">
          <p className="eyebrow">The point of view</p>
          <p className="intro-statement">
            I believe meaningful work grows from curiosity, a willingness to keep learning,
            and the care to turn ideas into something useful.
          </p>
          <Link className="circle-link" aria-label="Read about Priya" href="/about">
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>

      <section className="home-work page-width">
        <div className="section-top">
          <div>
            <p className="eyebrow">01 / The work</p>
            <h2>Selected AI projects.</h2>
          </div>
          <Link className="text-link" href="/projects">All projects <ArrowUpRight size={16} /></Link>
        </div>
        {projects.length === 0 ? (
          <div className="work-preview">
            <div className="work-preview-number">01</div>
            <div>
              <h3>Learning in the open.</h3>
              <p>Selected AI and machine-learning work across healthcare, financial services, and insurance.</p>
            </div>
            <Link className="round-arrow" aria-label="View projects" href="/projects"><ArrowUpRight size={18} /></Link>
          </div>
        ) : (
          <div className="home-project-row">
            {projects.slice(0, 3).map((project) => (
              <Link className="home-project-card" href={`/projects/${project.slug}`} key={project.slug}>
                <span>{project.category}</span><h3>{project.title}</h3><p>{project.summary}</p>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="home-connect">
        <div className="page-width connect-inner">
          <p className="eyebrow">Have something in mind?</p>
          <h2>Good conversations<br /><span>start somewhere.</span></h2>
          <Link className="button button-light" href="/contact">Let’s connect <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
