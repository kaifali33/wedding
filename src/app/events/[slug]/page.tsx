import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { WEDDING_DATA } from "@/data/wedding";
import { FloralCorner } from "@/components/Ornaments";
import { Calendar, MapPin, Clock, ArrowLeft, ExternalLink, Sparkles, MailCheck } from "lucide-react";

export function generateStaticParams() {
  return WEDDING_DATA.events.map((event) => ({
    slug: event.slug,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default function EventDetailPage({ params }: PageProps) {
  const event = WEDDING_DATA.events.find((e) => e.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="h-full w-full bg-wedding-cream flex flex-col justify-between p-3 sm:p-3.5 overflow-hidden select-none">
      {/* Top Bar with Back Link */}
      <div className="w-full flex items-center justify-between shrink-0 mb-1.5">
        <Link
          href="/events"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-wedding-maroon/10 border border-wedding-gold/40 text-wedding-maroon text-xs font-serif hover:bg-wedding-maroon hover:text-wedding-gold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Functions</span>
        </Link>

        <span className="px-2.5 py-0.5 rounded-full bg-wedding-gold/20 border border-wedding-gold/40 text-wedding-gold-deep text-[10px] font-serif uppercase tracking-widest font-semibold">
          {event.tag}
        </span>
      </div>

      {/* Controlled Internal Scrollable Content Area */}
      <div className="w-full flex-1 min-h-0 overflow-y-auto no-scrollbar space-y-3 rounded-2xl bg-[#FFFDF9] border border-wedding-gold/50 shadow-card p-3 sm:p-3.5">
        {/* Large Hero Banner with Floral Accent */}
        <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-wedding-maroon-deep shrink-0 border border-wedding-gold/40">
          <Image
            src={event.image}
            alt={event.name}
            fill
            priority
            sizes="(max-width: 430px) 100vw, 430px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#200408] via-[#200408]/30 to-transparent" />

          {/* Floral Corner Accent */}
          <FloralCorner position="top-right" className="text-wedding-gold absolute top-1 right-1 opacity-60 pointer-events-none" size={32} />

          {/* Banner Title */}
          <div className="absolute bottom-2.5 inset-x-3 text-wedding-cream">
            <h1 className="font-serif text-2xl font-bold tracking-wide text-wedding-gold-light drop-shadow">
              {event.name}
            </h1>
            {event.subtitle && (
              <p className="font-serif italic text-xs text-wedding-cream/90">
                {event.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Date, Time & Venue Information Box */}
        <div className="p-3 rounded-xl bg-wedding-cream border border-wedding-gold/30 space-y-2 text-xs font-serif">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-wedding-gold shrink-0" />
            <div>
              <span className="text-[9px] uppercase tracking-wider text-wedding-gold-deep font-bold block">Ceremony Date</span>
              <span className="font-bold text-wedding-maroon">{event.fullDateText}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1.5 border-t border-wedding-gold/20">
            <Clock className="w-4 h-4 text-wedding-gold shrink-0" />
            <div>
              <span className="text-[9px] uppercase tracking-wider text-wedding-gold-deep font-bold block">Ceremony Time</span>
              <span className="font-medium text-wedding-maroon italic">{event.timePlaceholder}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1.5 border-t border-wedding-gold/20">
            <MapPin className="w-4 h-4 text-wedding-gold shrink-0" />
            <div className="truncate">
              <span className="text-[9px] uppercase tracking-wider text-wedding-gold-deep font-bold block">Venue Location</span>
              <span className="font-bold text-wedding-maroon truncate block">{event.venue}</span>
            </div>
          </div>
        </div>

        {/* "View Location on Google Maps" Action Button */}
        <a
          href={WEDDING_DATA.venue.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-wedding-gold via-wedding-gold-light to-wedding-gold text-wedding-maroon-deep font-serif text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold transition-all active:scale-95"
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>View Location on Google Maps</span>
          <ExternalLink className="w-3 h-3 opacity-70" />
        </a>

        {/* About the Event Description */}
        <div>
          <h3 className="font-serif text-xs uppercase tracking-wider text-wedding-gold-deep font-bold mb-1">
            About the Ceremony
          </h3>
          <p className="font-serif text-xs sm:text-sm text-wedding-maroon/80 leading-relaxed">
            {event.description}
          </p>
        </div>

        {/* Highlights */}
        {event.details && event.details.length > 0 && (
          <div className="pt-2 border-t border-wedding-gold/20">
            <h4 className="font-serif text-[11px] uppercase tracking-wider text-wedding-gold-deep font-bold mb-2">
              Ceremony Highlights &amp; Attire
            </h4>
            <ul className="space-y-1.5">
              {event.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-xs font-serif text-wedding-maroon/80">
                  <Sparkles className="w-3.5 h-3.5 text-wedding-gold shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Photos / Atmosphere Gallery */}
        {event.galleryImages && event.galleryImages.length > 0 && (
          <div className="pt-2 border-t border-wedding-gold/20">
            <h4 className="font-serif text-[11px] uppercase tracking-wider text-wedding-gold-deep font-bold mb-2">
              Ceremony Atmosphere
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {event.galleryImages.map((img, idx) => (
                <div key={idx} className="relative aspect-[4/3] rounded-lg overflow-hidden border border-wedding-gold/30">
                  <Image
                    src={img}
                    alt={`${event.name} visual ${idx + 1}`}
                    fill
                    sizes="(max-width: 430px) 50vw, 200px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom RSVP Quick Action */}
      <div className="w-full shrink-0 pt-2 flex items-center gap-2">
        <Link
          href="/rsvp"
          className="w-full py-2.5 px-4 rounded-full bg-wedding-maroon text-wedding-gold-light hover:bg-wedding-maroon-dark font-serif text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow transition-all active:scale-95"
        >
          <MailCheck className="w-3.5 h-3.5 text-wedding-gold" />
          <span>Confirm Attendance for this Event</span>
        </Link>
      </div>
    </div>
  );
}
