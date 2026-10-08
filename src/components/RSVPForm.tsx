"use client";

import React, { useState } from "react";
import { WEDDING_DATA } from "@/data/wedding";
import { FloralDivider, FloralCorner } from "./Ornaments";
import { CheckCircle2, Send, MessageSquare, User, Users } from "lucide-react";
import confetti from "canvas-confetti";

interface RSVPFormData {
  guestName: string;
  phone: string;
  numberOfGuests: number;
  attendance: "Will Attend" | "Unable to Attend";
  message: string;
}

export const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({
    guestName: "",
    phone: "",
    numberOfGuests: 1,
    attendance: "Will Attend",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RSVPFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof RSVPFormData, string>> = {};

    if (!formData.guestName.trim()) {
      newErrors.guestName = "Please enter your name.";
    } else if (formData.guestName.trim().length < 2) {
      newErrors.guestName = "Name must be at least 2 characters.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please provide your phone number.";
    } else if (!/^[0-9+\s-]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (formData.attendance === "Will Attend" && (!formData.numberOfGuests || formData.numberOfGuests < 1)) {
      newErrors.numberOfGuests = "At least 1 guest must be attending.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean frontend submission (ready to connect to backend/API endpoint)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Joyous celebration confetti
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#8B1E2E", "#F5E298", "#24050A"],
      });
    }, 700);
  };

  const resetForm = () => {
    setFormData({
      guestName: "",
      phone: "",
      numberOfGuests: 1,
      attendance: "Will Attend",
      message: "",
    });
    setErrors({});
    setIsSuccess(false);
  };

  // Optional WhatsApp confirmation link
  const getWhatsAppShareUrl = () => {
    const text = encodeURIComponent(
      `Salaam / Greetings! Here is my RSVP for Kausar & Najiya's Wedding:\n` +
      `Name: ${formData.guestName}\n` +
      `Attendance: ${formData.attendance}\n` +
      `Guests: ${formData.attendance === "Will Attend" ? formData.numberOfGuests : "0"}\n` +
      (formData.message ? `Message: ${formData.message}\n` : "")
    );
    return `https://wa.me/${WEDDING_DATA.rsvpConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {isSuccess ? (
        <div className="rounded-3xl bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EE] border-2 border-wedding-gold/80 p-6 sm:p-10 shadow-gold-lg text-center relative overflow-hidden">
          {/* Floral Corners */}
          <FloralCorner position="top-left" className="text-wedding-gold absolute top-2 left-2 opacity-70" size={32} />
          <FloralCorner position="top-right" className="text-wedding-gold absolute top-2 right-2 opacity-70" size={32} />

          <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-wedding-maroon mb-2">
            Jazakallah Khair / Thank You!
          </h3>

          <p className="font-serif text-sm text-wedding-maroon/80 mb-6 max-w-md mx-auto leading-relaxed">
            Your RSVP has been warmly received,{" "}
            <span className="font-bold text-wedding-maroon">{formData.guestName}</span>.
            {formData.attendance === "Will Attend"
              ? " We eagerly await your gracious presence to celebrate our special day with us."
              : " We will miss you, and thank you sincerely for your warm wishes and prayers."}
          </p>

          {/* Submission Recap */}
          <div className="bg-wedding-cream rounded-2xl p-4 border border-wedding-gold/40 text-left text-xs font-serif space-y-2 mb-6 max-w-sm mx-auto">
            <div className="flex justify-between">
              <span className="text-wedding-maroon/60">Attendance:</span>
              <span className="font-bold text-wedding-maroon">{formData.attendance}</span>
            </div>
            {formData.attendance === "Will Attend" && (
              <div className="flex justify-between">
                <span className="text-wedding-maroon/60">Guests Attending:</span>
                <span className="font-bold text-wedding-maroon">{formData.numberOfGuests}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-wedding-maroon/60">Phone:</span>
              <span className="font-medium text-wedding-maroon">{formData.phone}</span>
            </div>
            {formData.message && (
              <div className="pt-2 border-t border-wedding-gold/20">
                <span className="text-wedding-maroon/60 block">Message:</span>
                <span className="italic text-wedding-maroon">{formData.message}</span>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            {/* Optional WhatsApp confirmation */}
            <a
              href={getWhatsAppShareUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-serif text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Confirm via WhatsApp</span>
            </a>

            <button
              onClick={resetForm}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-wedding-gold/60 text-wedding-maroon hover:bg-wedding-gold/10 font-serif text-xs font-semibold tracking-wider"
            >
              Submit Another Response
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#F5ECE1] border-2 border-wedding-gold/60 p-4 sm:p-6 shadow-card relative"
        >
          {/* Decorative Corner Filigree */}
          <FloralCorner position="top-left" className="text-wedding-gold absolute top-1.5 left-1.5 opacity-40 pointer-events-none" size={28} />
          <FloralCorner position="top-right" className="text-wedding-gold absolute top-1.5 right-1.5 opacity-40 pointer-events-none" size={28} />

          <div className="text-center mb-3">
            <span className="text-[10px] font-serif uppercase tracking-[0.2em] text-wedding-gold-deep font-semibold">
              Kindly Respond
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-wedding-maroon">
              Confirm Your Attendance
            </h3>
            <FloralDivider className="my-1.5 scale-75" />
          </div>

          <div className="space-y-3">
            {/* Your Name */}
            <div>
              <label className="block font-serif text-[11px] uppercase tracking-wider text-wedding-maroon font-semibold mb-1">
                Your Name <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.guestName}
                  onChange={(e) => {
                    setFormData({ ...formData, guestName: e.target.value });
                    if (errors.guestName) setErrors({ ...errors, guestName: undefined });
                  }}
                  className={`w-full px-3 py-2 pl-9 rounded-xl bg-white border font-serif text-xs text-wedding-maroon placeholder:text-wedding-maroon/40 focus:outline-none transition-all ${
                    errors.guestName
                      ? "border-red-400 ring-1 ring-red-400"
                      : "border-wedding-gold/50 focus:border-wedding-gold focus:ring-2 focus:ring-wedding-gold/30"
                  }`}
                />
                <User className="w-3.5 h-3.5 text-wedding-gold absolute left-3 top-2.5 pointer-events-none" />
              </div>
              {errors.guestName && (
                <p className="text-[10px] text-red-600 font-serif mt-0.5">{errors.guestName}</p>
              )}
            </div>

            {/* Attendance Choice Radio Options */}
            <div>
              <label className="block font-serif text-[11px] uppercase tracking-wider text-wedding-maroon font-semibold mb-1">
                Will you attend? <span className="text-red-600">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <label
                  onClick={() => setFormData({ ...formData, attendance: "Will Attend" })}
                  className={`py-2 px-2.5 rounded-xl border font-serif text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                    formData.attendance === "Will Attend"
                      ? "bg-wedding-maroon text-wedding-gold-light border-wedding-gold shadow-gold"
                      : "bg-white text-wedding-maroon/80 border-wedding-gold/40 hover:bg-wedding-gold/10"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    checked={formData.attendance === "Will Attend"}
                    onChange={() => {}}
                    className="accent-wedding-gold w-3.5 h-3.5"
                  />
                  <span>Will Attend</span>
                </label>

                <label
                  onClick={() => setFormData({ ...formData, attendance: "Unable to Attend" })}
                  className={`py-2 px-2.5 rounded-xl border font-serif text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                    formData.attendance === "Unable to Attend"
                      ? "bg-wedding-maroon text-wedding-gold-light border-wedding-gold shadow-gold"
                      : "bg-white text-wedding-maroon/80 border-wedding-gold/40 hover:bg-wedding-gold/10"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    checked={formData.attendance === "Unable to Attend"}
                    onChange={() => {}}
                    className="accent-wedding-gold w-3.5 h-3.5"
                  />
                  <span>Unable to Attend</span>
                </label>
              </div>
            </div>

            {/* Number of Guests (only if attending) */}
            {formData.attendance === "Will Attend" && (
              <div>
                <label className="block font-serif text-[11px] uppercase tracking-wider text-wedding-maroon font-semibold mb-1">
                  Number of Guests Attending
                </label>
                <div className="relative">
                  <select
                    value={formData.numberOfGuests}
                    onChange={(e) =>
                      setFormData({ ...formData, numberOfGuests: parseInt(e.target.value, 10) })
                    }
                    className="w-full px-3 py-2 pl-9 rounded-xl bg-white border border-wedding-gold/50 font-serif text-xs text-wedding-maroon focus:outline-none focus:border-wedding-gold focus:ring-2 focus:ring-wedding-gold/30 appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Person" : "Persons"}
                      </option>
                    ))}
                  </select>
                  <Users className="w-3.5 h-3.5 text-wedding-gold absolute left-3 top-2.5 pointer-events-none" />
                </div>
                {errors.numberOfGuests && (
                  <p className="text-[10px] text-red-600 font-serif mt-0.5">{errors.numberOfGuests}</p>
                )}
              </div>
            )}

            {/* Blessing / Message */}
            <div>
              <label className="block font-serif text-[11px] uppercase tracking-wider text-wedding-maroon font-semibold mb-1">
                Warm Wishes / Message (Optional)
              </label>
              <div className="relative">
                <textarea
                  rows={2}
                  placeholder="Send your prayers and blessings for Kausar & Najiya..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 pl-9 rounded-xl bg-white border border-wedding-gold/50 font-serif text-xs text-wedding-maroon placeholder:text-wedding-maroon/40 focus:outline-none focus:border-wedding-gold focus:ring-2 focus:ring-wedding-gold/30 resize-none"
                />
                <MessageSquare className="w-3.5 h-3.5 text-wedding-gold absolute left-3 top-2.5 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Submit RSVP Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 py-2.5 rounded-full bg-gradient-to-r from-wedding-gold via-wedding-gold-light to-wedding-gold text-wedding-maroon-deep font-serif text-xs font-bold uppercase tracking-widest shadow-gold hover:shadow-gold-lg transition-all duration-300 active:scale-95 disabled:opacity-70 flex items-center justify-center gap-1.5"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 border-2 border-wedding-maroon border-t-transparent rounded-full animate-spin" />
                <span>Recording RSVP...</span>
              </span>
            ) : (
              <span>Submit RSVP</span>
            )}
          </button>

          <p className="text-[10px] text-center text-wedding-maroon/60 font-serif italic mt-3">
            Frontend validation active. Form is ready to connect with backend or API.
          </p>
        </form>
      )}
    </div>
  );
};

export default RSVPForm;
