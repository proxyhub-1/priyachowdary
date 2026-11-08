import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: {
    default: "Priya Jonnalagadda — Portfolio",
    template: "%s — Priya Jonnalagadda",
  },
  description: "Priya Jonnalagadda — Senior AI Engineer specializing in Generative AI, LLMs, RAG, and Agentic AI.",
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  openGraph: {
    title: "Priya Jonnalagadda — Portfolio",
    description: "A considered collection of work, experience, and ideas.",
    type: "website",
    ...(siteUrl
      ? {
          images: [
            {
              url: new URL("priya-jonnalagadda.jpg", siteUrl).toString(),
              width: 768,
              height: 768,
              alt: "Priya Jonnalagadda",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Priya Jonnalagadda — Portfolio",
    description: "A considered collection of work, experience, and ideas.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
