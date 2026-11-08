import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { certifications } from "@/data/profile";

export const metadata: Metadata = { title: "Certifications" };

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function CertificationsPage() {
  return (
    <div className="page-width interior-page">
      <SectionHeading eyebrow="03 / Learning & credentials" title="Certifications" description="Professional credentials and certificate documents." />
      {certifications.length ? (
        <div className="credential-list">
          {certifications.map((item) => (
            <article className="credential-card" key={`${item.name}-${item.issuer}-${item.fileUrl ?? item.documentUrl}`}>
              {item.fileUrl && <a className="certificate-preview" href={`${basePath}${item.fileUrl}`} target="_blank" rel="noreferrer" aria-label={`Open ${item.name} certificate`}>
                <Image alt={`${item.name} certificate`} fill sizes="160px" src={`${basePath}${item.fileUrl}`} unoptimized />
              </a>}
              <BadgeCheck size={23} />
              <div><h2>{item.name}</h2><p>{item.issuer}{item.date ? ` · ${item.date}` : ""}</p></div>
              {item.fileUrl && <a aria-label={`View ${item.name} certificate`} href={`${basePath}${item.fileUrl}`} target="_blank" rel="noreferrer">View certificate</a>}
              {item.fileUrl && <a aria-label={`Download ${item.name} certificate`} download href={`${basePath}${item.fileUrl}`}>Download</a>}
              {item.verificationUrl && <a aria-label={`Verify ${item.name}`} href={item.verificationUrl} target="_blank" rel="noreferrer"><ArrowUpRight size={18} /></a>}
              {item.documentUrl && <a href={item.documentUrl} target="_blank" rel="noreferrer">Open document <ArrowUpRight size={16} /></a>}
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-panel">
          <span className="empty-index">CREDENTIALS / VERIFYING</span>
          <h2>Details matter here.</h2>
          <p>Once verified, certificates will be viewable and downloadable directly here, with issuer verification links where available.</p>
        </div>
      )}
    </div>
  );
}
