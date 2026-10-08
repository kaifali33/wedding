"use client";

import React, { useState } from "react";
import DuaCardScene from "@/components/DuaCardScene";
import { FloralDivider } from "@/components/Ornaments";
import { Heart, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function DuaPage() {
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [dua, setDua] = useState("");
  const [errors, setErrors] = useState<{ name?: string; dua?: string }>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const quickDuas = [
    "May Allah shower His infinite barakah, love, and happiness upon your union. 🤍",
    "May Allah protect your marriage and fill your home with peace, affection, and mercy. 🤲",
    "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fee khair. Ameen! ✨",
    "Wishing Kausar & Najiya a lifetime of laughter, shared blessings, and eternal joy. ❤️",
  ];

  const handleApplyQuickDua = (text: string) => {
    setDua(text);
    if (errors.dua) {
      setErrors((prev) => ({ ...prev, dua: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { name?: string; dua?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!dua.trim()) {
      newErrors.dua = "Please write your dua or blessing";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSuccess(true);

    // Construct the formatted WhatsApp message as specified
    const relationText = relation.trim() ? relation.trim() : "Well-wisher";
    const messageLines = [
      "Assalamu Alaikum,",
      "",
      "A Dua for Kausar ❤️ Najiya",
      "",
      `Name: ${name.trim()}`,
      "",
      `Relation: ${relationText}`,
      "",
      "Dua:",
      dua.trim(),
      "",
      "May Allah bless Kausar & Najiya with love,",
      "peace, happiness and endless barakah. 🤍",
    ];

    const rawMessage = messageLines.join("\n");
    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/917857811740?text=${encodedMessage}`;

    // Small delay to allow the user to see the success message before WhatsApp opens
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 600);
  };

  return (
    <div className="h-full w-full bg-wedding-cream flex flex-col justify-between p-3 sm:p-4 overflow-hidden select-none">
      {/* =====================================================================
          TOP HEADER
          ===================================================================== */}
      <div className="w-full text-center shrink-0 mb-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-wedding-maroon/10 border border-wedding-gold/40 text-[9px] sm:text-[10px] font-serif uppercase tracking-[0.2em] text-wedding-gold-deep font-semibold mb-1">
          <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          <span>Blessings &amp; Prayers</span>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-wedding-maroon tracking-wide">
          Holy Dua &amp; Blessings
        </h1>

        <FloralDivider className="my-1 scale-75" />
      </div>

      {/* =====================================================================
          SCROLLABLE CONTENT AREA
          Contains:
          1. The photorealistic Invitation Card on Easel scene
          2. The "Send Your Dua" WhatsApp Section
          ===================================================================== */}
      <div className="w-full flex-1 min-h-0 overflow-y-auto no-scrollbar py-1 space-y-4">
        {/* 1. MAIN INVITATION CARD SCENE ON EASEL */}
        <DuaCardScene />

        {/* 2. SEND YOUR DUA SECTION */}
        <div className="w-full max-w-sm sm:max-w-md mx-auto rounded-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#F5ECE1] border-2 border-wedding-gold/60 p-4 sm:p-5 shadow-card">
          {/* Header */}
          <div className="text-center mb-3">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#6B1730] flex items-center justify-center gap-1.5 tracking-wide">
              <span>SEND YOUR DUA</span>
              <span>🤍</span>
            </h2>
            <p className="font-serif italic text-xs text-[#8A5A44] mt-0.5">
              &ldquo;Share a heartfelt dua or blessing for Kausar &amp; Najiya.&rdquo;
            </p>
          </div>

          {/* Quick Dua Starters */}
          <div className="mb-3">
            <p className="text-[10px] font-serif uppercase tracking-widest text-wedding-maroon/60 mb-1.5 font-medium">
              Quick Dua Suggestions:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {quickDuas.map((qd, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleApplyQuickDua(qd)}
                  className="text-left text-[10px] font-serif px-2.5 py-1 rounded-full bg-white/80 hover:bg-wedding-maroon/10 border border-wedding-gold/30 hover:border-wedding-gold text-wedding-maroon/80 transition-colors active:scale-95"
                >
                  {qd.slice(0, 36)}...
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Field 1: Name */}
            <div>
              <label className="block text-[11px] font-serif uppercase tracking-wider text-wedding-maroon font-semibold mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                }}
                placeholder="Enter your name"
                className={`w-full px-3 py-2 rounded-xl text-xs font-serif bg-white/95 border text-wedding-maroon-deep placeholder:text-wedding-maroon/40 focus:outline-hidden focus:ring-2 focus:ring-wedding-gold/50 transition-all ${
                  errors.name ? "border-red-400 bg-red-50/30" : "border-wedding-gold/40 hover:border-wedding-gold"
                }`}
              />
              {errors.name && (
                <p className="flex items-center gap-1 text-[10px] font-serif text-red-600 mt-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Field 2: Relation */}
            <div>
              <label className="block text-[11px] font-serif uppercase tracking-wider text-wedding-maroon font-semibold mb-1">
                Relation
              </label>
              <input
                type="text"
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                placeholder="Family / Friend / Relative"
                className="w-full px-3 py-2 rounded-xl text-xs font-serif bg-white/95 border border-wedding-gold/40 hover:border-wedding-gold text-wedding-maroon-deep placeholder:text-wedding-maroon/40 focus:outline-hidden focus:ring-2 focus:ring-wedding-gold/50 transition-all"
              />
            </div>

            {/* Field 3: Dua Message */}
            <div>
              <label className="block text-[11px] font-serif uppercase tracking-wider text-wedding-maroon font-semibold mb-1">
                Your Dua <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={3}
                value={dua}
                onChange={(e) => {
                  setDua(e.target.value);
                  if (errors.dua) setErrors((prev) => ({ ...prev, dua: undefined }));
                }}
                placeholder="Write your dua or blessing for Kausar & Najiya..."
                className={`w-full px-3 py-2 rounded-xl text-xs font-serif bg-white/95 border text-wedding-maroon-deep placeholder:text-wedding-maroon/40 focus:outline-hidden focus:ring-2 focus:ring-wedding-gold/50 transition-all resize-none ${
                  errors.dua ? "border-red-400 bg-red-50/30" : "border-wedding-gold/40 hover:border-wedding-gold"
                }`}
              />
              {errors.dua && (
                <p className="flex items-center gap-1 text-[10px] font-serif text-red-600 mt-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.dua}</span>
                </p>
              )}
            </div>

            {/* Success Banner */}
            {isSuccess && (
              <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-50 to-[#FDFBF7] border border-emerald-300 text-center animate-in fade-in duration-300">
                <div className="flex items-center justify-center gap-1.5 text-emerald-800 font-serif font-bold text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>JazakAllah Khair 🤍</span>
                </div>
                <p className="font-serif text-[11px] text-emerald-700 mt-0.5">
                  &ldquo;Your dua is ready to send.&rdquo; Opening WhatsApp...
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl font-serif text-xs sm:text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-[#6B1730] via-[#8B2332] to-[#6B1730] text-[#FFFDF9] border border-wedding-gold/60 shadow-md hover:shadow-gold flex items-center justify-center gap-2 active:scale-98 transition-all"
            >
              <Send className="w-3.5 h-3.5 text-wedding-gold-light" />
              <span>SEND DUA ❤️</span>
            </button>
          </form>

          {/* Privacy Note */}
          <p className="text-center text-[9px] font-serif text-wedding-maroon/50 mt-2.5">
            Your dua is sent directly to Kausar &amp; Najiya via WhatsApp.
          </p>
        </div>
      </div>

      {/* =====================================================================
          BOTTOM GUIDANCE TAG
          ===================================================================== */}
      <div className="w-full text-center shrink-0 pt-1.5">
        <p className="text-[9px] font-serif uppercase tracking-widest text-wedding-maroon/60">
          Shekhpura, Near Shekhpura Jama Masjid
        </p>
      </div>
    </div>
  );
}
