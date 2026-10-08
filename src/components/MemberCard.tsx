"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FamilyMember } from "@/data/wedding";
import { FloralCorner } from "./Ornaments";
import { Sparkles, User } from "lucide-react";

interface MemberCardProps {
  member: FamilyMember;
  className?: string;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member, className = "" }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`group relative rounded-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#F5ECE1] p-3 sm:p-3.5 border-2 border-wedding-gold/60 shadow-card hover:shadow-gold transition-all duration-300 flex flex-col items-center text-center overflow-hidden ${className}`}
    >
      {/* Ornate Gold Filigree Corners */}
      <FloralCorner
        position="top-left"
        className="text-wedding-gold absolute top-1 left-1 opacity-50 group-hover:opacity-90 transition-opacity"
        size={20}
      />
      <FloralCorner
        position="top-right"
        className="text-wedding-gold absolute top-1 right-1 opacity-50 group-hover:opacity-90 transition-opacity"
        size={20}
      />

      {/* Member Photo Frame */}
      <div className="relative mb-2 mt-1">
        {/* Soft gold ambient glow */}
        <div className="absolute inset-0 rounded-full bg-wedding-gold/20 blur-sm scale-110 pointer-events-none" />

        {/* Circular Premium Photo Frame with Antique Gold Border */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-tr from-wedding-gold via-wedding-gold-light to-wedding-gold shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <div className="w-full h-full rounded-full bg-gradient-to-b from-wedding-cream to-[#ECE2D2] border border-[#FFF9F1] overflow-hidden relative shadow-inner">
            {member.image && !imgError ? (
              <Image
                src={member.image}
                alt={`${member.relation} - ${member.name}`}
                fill
                sizes="(max-width: 640px) 80px, 96px"
                className="object-cover object-center"
                priority
                unoptimized
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-wedding-maroon/60 bg-gradient-to-b from-wedding-cream to-[#ECE2D2]">
                <User className="w-7 h-7 text-wedding-maroon/40 drop-shadow-xs" />
              </div>
            )}
          </div>
        </div>

        {/* Small Floral / Gold Decorative Accent Badge */}
        <div className="absolute -bottom-1 -right-0.5 bg-gradient-to-tr from-wedding-maroon to-wedding-maroon-deep text-wedding-gold p-1 rounded-full border border-wedding-gold shadow-xs flex items-center justify-center">
          <Sparkles className="w-2.5 h-2.5 text-wedding-gold-light" />
        </div>
      </div>

      {/* Relation Badge */}
      <span className="px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-serif uppercase tracking-widest font-semibold bg-wedding-maroon/10 text-wedding-maroon border border-wedding-gold/30 mb-1">
        {member.relation}
      </span>

      {/* Name */}
      <h3 className="font-serif text-xs sm:text-sm font-bold text-wedding-maroon tracking-wide mb-1 truncate max-w-full">
        {member.name}
      </h3>

      {/* Short Description */}
      {member.note && (
        <p className="font-serif italic text-[10px] sm:text-[11px] text-wedding-maroon/75 leading-relaxed line-clamp-2">
          {member.note}
        </p>
      )}
    </div>
  );
};

export default MemberCard;
