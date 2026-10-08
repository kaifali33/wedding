"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WEDDING_DATA } from "@/data/wedding";
import { useMusicPlayer } from "./MusicPlayer";
import { Music, Pause, Phone, Code, Menu, X, Heart, RotateCcw } from "lucide-react";

interface AppTopBarProps {
  onReplayInvitation?: () => void;
}

export const AppTopBar: React.FC<AppTopBarProps> = ({ onReplayInvitation }) => {
  const pathname = usePathname();
  const { isPlaying, togglePlay } = useMusicPlayer();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleReplayEnvelope = () => {
    setMenuOpen(false);
    if (onReplayInvitation) {
      onReplayInvitation();
    } else {
      sessionStorage.removeItem("wedding_invitation_opened");
      window.location.href = "/";
    }
  };

  return (
    <>
      <header className="h-14 shrink-0 bg-gradient-to-b from-[#FFFDF9]/95 via-[#FFFDF9]/80 to-transparent backdrop-blur-xs px-3.5 flex items-center justify-between z-40 select-none border-b border-wedding-gold/20">
        {/* Left: Hamburger Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
          className="w-9 h-9 rounded-full border border-wedding-gold/50 flex items-center justify-center bg-white/80 text-wedding-maroon hover:bg-wedding-maroon hover:text-wedding-gold transition-all active:scale-95 shadow-xs"
        >
          {menuOpen ? <X className="w-5 h-5 text-wedding-maroon" /> : <Menu className="w-5 h-5 text-wedding-maroon" />}
        </button>

        {/* Center: Elegant Monogram "K & N" and "Kausar & Najiya" */}
        <Link href="/" className="flex flex-col items-center group active:scale-95 transition-transform text-center">
          <span className="font-serif font-bold text-base tracking-[0.2em] text-wedding-maroon group-hover:text-wedding-gold-deep transition-colors leading-tight">
            K &amp; N
          </span>
          <span className="font-script text-sm text-wedding-gold-deep leading-none -mt-0.5">
            {WEDDING_DATA.groom.name} &amp; {WEDDING_DATA.bride.name}
          </span>
        </Link>

        {/* Right: Music Control Button */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
          className={`relative w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 active:scale-95 shadow-xs ${
            isPlaying
              ? "bg-wedding-maroon border-wedding-gold text-wedding-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"
              : "bg-white/80 border-wedding-gold/50 text-wedding-maroon hover:bg-wedding-maroon hover:text-wedding-gold"
          }`}
        >
          {isPlaying && (
            <span className="absolute inset-0 rounded-full animate-ping bg-wedding-gold/30 pointer-events-none" />
          )}

          {isPlaying ? (
            <Pause className="w-4 h-4 text-wedding-gold animate-pulse" />
          ) : (
            <Music className="w-4 h-4 text-wedding-maroon" />
          )}
        </button>
      </header>

      {/* Slide-Over Drawer Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-0 left-0 h-full w-72 max-w-[80vw] bg-gradient-to-b from-[#2E070F] to-[#1C0407] border-r border-wedding-gold/50 p-5 text-wedding-cream shadow-2xl flex flex-col justify-between animate-in slide-in-from-left duration-250 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-wedding-gold/20 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-wedding-gold bg-wedding-maroon text-wedding-gold flex items-center justify-center font-display font-bold text-xs shadow-gold">
                    K&amp;N
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold text-wedding-gold-light">
                      {WEDDING_DATA.groom.name} &amp; {WEDDING_DATA.bride.name}
                    </h3>
                    <p className="text-[9px] font-serif uppercase tracking-widest text-wedding-cream/60">
                      {WEDDING_DATA.datesSummary}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-7 h-7 rounded-full border border-wedding-gold/40 flex items-center justify-center text-wedding-gold/80 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Menu Links */}
              <div className="space-y-2">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-all text-xs font-serif ${
                    pathname === "/contact"
                      ? "bg-wedding-maroon border-wedding-gold text-wedding-gold-light font-bold shadow-gold"
                      : "bg-white/5 border-wedding-gold/20 text-wedding-cream/80 hover:bg-wedding-gold/15 hover:text-wedding-gold"
                  }`}
                >
                  <Phone className="w-4 h-4 text-wedding-gold" />
                  <span>Contact &amp; Assistance</span>
                </Link>

                <Link
                  href="/owner"
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-all text-xs font-serif ${
                    pathname === "/owner"
                      ? "bg-wedding-maroon border-wedding-gold text-wedding-gold-light font-bold shadow-gold"
                      : "bg-white/5 border-wedding-gold/20 text-wedding-cream/80 hover:bg-wedding-gold/15 hover:text-wedding-gold"
                  }`}
                >
                  <Code className="w-4 h-4 text-wedding-gold" />
                  <span>Owner of Application</span>
                </Link>

                <button
                  onClick={handleReplayEnvelope}
                  className="w-full flex items-center gap-3 p-3 rounded-xl border border-wedding-gold/20 bg-white/5 hover:bg-wedding-gold/15 hover:text-wedding-gold transition-all text-xs font-serif text-wedding-cream/80 text-left"
                >
                  <RotateCcw className="w-4 h-4 text-wedding-gold" />
                  <span>Replay Sealed Invitation</span>
                </button>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="pt-4 border-t border-wedding-gold/20 text-center">
              <p className="font-serif italic text-[11px] text-wedding-cream/70 mb-1">
                Shekhpura, Near Shekhpura Jama Masjid
              </p>
              <div className="text-[10px] font-serif text-wedding-gold/60 flex items-center justify-center gap-1">
                <span>Designed &amp; Developed with</span>
                <Heart className="w-3 h-3 text-red-500 fill-red-500" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppTopBar;
