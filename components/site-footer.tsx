import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="eyebrow">Generative AI · Machine Learning · Applied Innovation</p>
          <p className="footer-name">{profile.name}</p>
        </div>
        <div className="footer-links">
          <Link href="/contact">Contact</Link>
          <a href={`mailto:${profile.email}`}><Mail size={14} /> Email</a>
          <a href={`tel:${profile.phoneHref}`}><Phone size={14} /> Phone</a>
          <a href={profile.linkedIn} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={14} />
          </a>
        </div>
        <span className="footer-note">© {new Date().getFullYear()} · Made with intention</span>
      </div>
    </footer>
  );
}
