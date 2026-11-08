import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="page-width interior-page">
      <SectionHeading eyebrow="A little context" title="My journey" description="A professional story shaped by experience, technical curiosity, and continuous learning." />
      <div className="about-layout">
        <div className="about-aside">
          <div className="about-portrait">
            <Image alt="Priya Jonnalagadda" fill sizes="(max-width: 760px) 90vw, 290px" src="/priya-jonnalagadda.jpg" unoptimized />
          </div>
          <p className="eyebrow">THE PERSON BEHIND THE WORK</p>
        </div>
        <div className="about-body">
          <h2>Every journey keeps evolving.</h2>
          <p className="lead">{profile.introduction}</p>
          <p>
            {profile.experienceSummary} I focus on building production-ready LLM applications,
            RAG systems, AI agents, assistants, and enterprise AI solutions using OpenAI,
            Azure OpenAI, Amazon Bedrock, LangChain, LangGraph, Pinecone, FAISS, Python, AWS,
            and Azure.
          </p>
          <h3 className="about-subheading">Areas of expertise</h3>
          <div className="expertise-list">
            {profile.expertise.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
          <h3 className="about-subheading">Industry experience</h3>
          <div className="industry-list">
            {profile.industries.map((industry) => <span key={industry}>{industry}</span>)}
          </div>
          <div className="about-contact-links">
            <a className="text-link" href={`mailto:${profile.email}`}><Mail size={15} /> Email me <ArrowUpRight size={15} /></a>
            <a className="text-link" href={`tel:${profile.phoneHref}`}><Phone size={15} /> Call me <ArrowUpRight size={15} /></a>
            <Link className="text-link" href={profile.linkedIn} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></Link>
          </div>
          <div className="about-note"><span>01</span><p>Curiosity · Adaptability · Collaboration · Problem-solving</p></div>
        </div>
      </div>
    </div>
  );
}
