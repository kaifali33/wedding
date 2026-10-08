"use client";

import React from "react";
import { FloralDivider } from "./Ornaments";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  className?: string;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  tagline,
  className = "",
  light = false,
}) => {
  return (
    <div className={`flex flex-col items-center text-center max-w-xl mx-auto px-4 ${className}`}>
      {tagline && (
        <span
          className={`text-[11px] sm:text-xs font-serif uppercase tracking-[0.25em] font-semibold mb-1.5 ${
            light ? "text-wedding-gold-light" : "text-wedding-gold-deep"
          }`}
        >
          {tagline}
        </span>
      )}

      <h2
        className={`font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide ${
          light ? "text-wedding-cream" : "text-wedding-maroon"
        }`}
      >
        {title}
      </h2>

      <FloralDivider light={light} className="my-2.5" />

      {subtitle && (
        <p
          className={`font-serif italic text-xs sm:text-sm max-w-md leading-relaxed ${
            light ? "text-wedding-cream/80" : "text-wedding-maroon/75"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
