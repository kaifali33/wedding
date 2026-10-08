"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { WeddingEvent } from "@/data/wedding";
import { Calendar, MapPin, ArrowRight, Clock } from "lucide-react";

interface EventCardProps {
  event: WeddingEvent;
  priority?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({ event, priority = false }) => {
  return (
    <div className="group rounded-3xl bg-[#FFFDF9] border border-wedding-gold/40 shadow-card hover:shadow-gold-lg transition-all duration-300 overflow-hidden flex flex-col justify-between transform hover:-translate-y-1">
      {/* Event Image Banner */}
      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-wedding-maroon-deep">
        <Image
          src={event.image}
          alt={event.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Gradient shadow for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#200408] via-[#200408]/30 to-transparent" />

        {/* Day / Phase Tag Badge */}
        <div className="absolute top-3 left-3 bg-[#24050A]/80 backdrop-blur-md text-wedding-gold-light border border-wedding-gold/50 text-[10px] sm:text-xs font-serif uppercase tracking-widest px-3 py-1 rounded-full shadow">
          {event.tag}
        </div>

        {/* Date Overlay Badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[#FAF6F0]/95 text-wedding-maroon px-3 py-1.5 rounded-full border border-wedding-gold/60 shadow">
          <Calendar className="w-3.5 h-3.5 text-wedding-gold-deep" />
          <span className="font-serif font-bold text-xs tracking-wide">
            {event.date}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Subtitle / Alternate Name */}
          {event.subtitle && (
            <p className="text-[11px] font-serif uppercase tracking-wider text-wedding-gold-deep font-semibold mb-1">
              {event.subtitle}
            </p>
          )}

          {/* Event Title */}
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-wedding-maroon tracking-wide mb-2 group-hover:text-wedding-gold-deep transition-colors">
            {event.name}
          </h3>

          {/* Short Description */}
          <p className="font-serif text-xs sm:text-sm text-wedding-maroon/75 leading-relaxed line-clamp-3 mb-4">
            {event.description}
          </p>

          {/* Meta Details: Venue & Time placeholder */}
          <div className="space-y-1.5 pt-3 border-t border-wedding-gold/20 mb-5 text-xs text-wedding-maroon/80 font-serif">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-wedding-gold shrink-0" />
              <span className="truncate">{event.venue}</span>
            </div>
            <div className="flex items-center gap-2 text-wedding-maroon/60">
              <Clock className="w-3.5 h-3.5 text-wedding-gold shrink-0" />
              <span className="italic">{event.timePlaceholder}</span>
            </div>
          </div>
        </div>

        {/* View Details CTA Button */}
        <Link
          href={`/events/${event.slug}`}
          className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-wedding-maroon to-wedding-maroon-dark text-wedding-gold-light font-serif text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 border border-wedding-gold/40 group-hover:border-wedding-gold group-hover:shadow-gold transition-all duration-200"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
