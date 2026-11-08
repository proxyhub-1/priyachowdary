"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function HeroArt() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-label="Portrait of Priya Jonnalagadda"
      className="hero-visual"
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="portrait-frame">
        <Image
          alt="Priya Jonnalagadda"
          className="portrait-image"
          fill
          priority
          sizes="(max-width: 760px) 90vw, 40vw"
          src={`${basePath}/priya-jonnalagadda.jpg`}
          unoptimized
        />
      </div>
      <div className="portrait-card">
        <span className="portrait-card-icon"><Sparkles size={15} /></span>
        <div><strong>Curiosity. Growth. Purpose.</strong><span>Priya Jonnalagadda · Portfolio</span></div>
      </div>
    </motion.div>
  );
}
