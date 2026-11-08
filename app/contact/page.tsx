import type { Metadata } from "next";
import { Mail, MoveUpRight, Phone } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="page-width interior-page contact-page">
      <SectionHeading eyebrow="04 / Say hello" title="Let’s connect." description="Have an opportunity, collaboration, or interesting idea? I’d love to hear from you." />
      <div className="contact-layout">
        <aside className="contact-aside">
          <div className="contact-aside-icon"><Mail size={21} /></div>
          <h2>Reach out<br />directly.</h2>
          <p>Choose whichever way is easiest. I’d be glad to hear from you.</p>
          <a href={`mailto:${profile.email}`}><span>Email</span><strong>{profile.email}</strong><MoveUpRight size={15} /></a>
          <a href={`tel:${profile.phoneHref}`}><span>Phone</span><strong>{profile.phoneDisplay}</strong><Phone size={15} /></a>
          <a href={profile.linkedIn} target="_blank" rel="noreferrer"><span>Professional profile</span><strong>LinkedIn</strong><MoveUpRight size={15} /></a>
        </aside>
      </div>
    </div>
  );
}
