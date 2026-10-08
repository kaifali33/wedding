"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WEDDING_COUNTDOWN_TARGET, WEDDING_DATA } from "@/data/wedding";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

/**
 * Calculates remaining days, hours, minutes, seconds dynamically
 * using target wedding date (November 2, 2026, at 00:00:00).
 */
const calculateTimeRemaining = (targetStr: string): TimeRemaining => {
  const targetTime = new Date(targetStr).getTime();
  const currentTime = Date.now();
  const difference = targetTime - currentTime;

  if (isNaN(targetTime) || difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isComplete: true,
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
    isComplete: false,
  };
};

export const Countdown: React.FC<{ className?: string }> = ({ className = "" }) => {
  // Initialize with immediate calculation so boxes & numbers are visible from the first frame
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(() =>
    calculateTimeRemaining(WEDDING_COUNTDOWN_TARGET)
  );

  useEffect(() => {
    // Immediate sync on client mount
    setTimeRemaining(calculateTimeRemaining(WEDDING_COUNTDOWN_TARGET));

    // Dynamic update every single second using setInterval with clearInterval on unmount
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(WEDDING_COUNTDOWN_TARGET));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <AnimatePresence mode="wait">
        {timeRemaining.isComplete ? (
          /* Animated Wedding Day Message shown automatically when Countdown Reaches Zero */
          <motion.div
            key="celebration"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full rounded-2xl p-4 bg-gradient-to-b from-[#FFF5F7] via-[#FFFBF8] to-[#FFF5F7] text-wedding-maroon border-2 border-wedding-gold/60 shadow-sm text-center relative"
          >
            <div className="relative z-10 flex flex-col items-center space-y-1">
              <span className="text-2xl animate-bounce">🎉</span>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-wedding-maroon tracking-wide">
                Alhamdulillah ❤️
              </h3>

              <p className="font-display uppercase tracking-[0.2em] text-xs text-wedding-gold-deep font-bold">
                Today is Our Wedding Day!
              </p>

              <div className="my-1 py-1 px-4 rounded-full bg-wedding-maroon/10 border border-wedding-gold/50 shadow-xs">
                <span className="font-serif text-sm sm:text-base font-bold tracking-wider text-wedding-maroon">
                  {WEDDING_DATA.groom.name} ❤️ {WEDDING_DATA.bride.name}
                </span>
              </div>

              <p className="font-serif italic text-xs text-wedding-maroon/80 max-w-xs">
                &ldquo;Bismillah, a beautiful new beginning begins.&rdquo;
              </p>
            </div>
          </motion.div>
        ) : (
          /* Live Countdown in elegant reference style: light blush/cream with thin separators & burgundy digits */
          <motion.div
            key="countdown-boxes"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <div className="w-full rounded-2xl bg-gradient-to-b from-[#FFFDFB] via-[#FFF8F9] to-[#FFF4F6] border border-[#F3D5DB] shadow-[0_2px_12px_rgba(230,190,195,0.35)] p-2 sm:p-2.5">
              <div className="grid grid-cols-4 divide-x divide-[#F3D5DB] w-full">
                <CountdownUnit value={timeRemaining.days} label="DAYS" />
                <CountdownUnit value={timeRemaining.hours} label="HOURS" />
                <CountdownUnit value={timeRemaining.minutes} label="MINUTES" />
                <CountdownUnit value={timeRemaining.seconds} label="SECONDS" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface CountdownUnitProps {
  value: number;
  label: string;
}

const CountdownUnit: React.FC<CountdownUnitProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center justify-center px-1 py-1.5 sm:py-2">
      {/* Large Elegant Burgundy Number */}
      <span
        suppressHydrationWarning
        className="font-serif text-2xl sm:text-3xl font-extrabold text-[#5C131D] tracking-normal leading-none drop-shadow-xs"
      >
        {String(value).padStart(2, "0")}
      </span>

      {/* Label: DAYS / HOURS / MINUTES / SECONDS */}
      <span className="text-[8.5px] sm:text-[9.5px] font-sans font-bold uppercase tracking-wider text-[#8B1E2E]/80 mt-1 sm:mt-1.5 leading-none">
        {label}
      </span>
    </div>
  );
};

export default Countdown;

