"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryItem } from "@/data/wedding";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryLightboxProps {
  isOpen: boolean;
  currentIndex: number;
  items: GalleryItem[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNext,
  onPrev,
}) => {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-[#0F0204]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 select-none"
      >
        {/* Top bar with count & Close button */}
        <div className="w-full flex items-center justify-between z-20 max-w-6xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-wedding-maroon/80 border border-wedding-gold/40 text-xs font-serif text-wedding-gold-light">
              {currentIndex + 1} / {items.length}
            </span>
            <span className="hidden sm:inline-block text-xs font-serif uppercase tracking-widest text-wedding-cream/60">
              {currentItem.category}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="w-10 h-10 rounded-full bg-wedding-maroon/80 border border-wedding-gold/50 flex items-center justify-center text-wedding-gold-light hover:bg-wedding-maroon hover:text-white transition-all active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Image Container with Previous & Next controls */}
        <div className="relative flex-1 flex items-center justify-center my-4 max-w-5xl mx-auto w-full">
          {/* Previous Button */}
          <button
            onClick={onPrev}
            aria-label="Previous image"
            className="absolute left-2 sm:left-4 z-20 w-11 h-11 rounded-full bg-wedding-maroon/80 border border-wedding-gold/50 flex items-center justify-center text-wedding-gold-light hover:bg-wedding-maroon hover:scale-105 transition-all shadow-lg active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Large Image with smooth fade transition */}
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-[60vh] sm:h-[70vh] max-w-4xl rounded-2xl overflow-hidden border border-wedding-gold/30 shadow-2xl bg-black/40"
          >
            <Image
              src={currentItem.imageUrl}
              alt={currentItem.title}
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              priority
              className="object-contain"
            />
          </motion.div>

          {/* Next Button */}
          <button
            onClick={onNext}
            aria-label="Next image"
            className="absolute right-2 sm:right-4 z-20 w-11 h-11 rounded-full bg-wedding-maroon/80 border border-wedding-gold/50 flex items-center justify-center text-wedding-gold-light hover:bg-wedding-maroon hover:scale-105 transition-all shadow-lg active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Caption */}
        <div className="w-full text-center max-w-xl mx-auto z-20 pb-2">
          <h4 className="font-serif text-base sm:text-lg font-bold text-wedding-gold-light tracking-wide">
            {currentItem.title}
          </h4>
          <p className="font-serif italic text-xs text-wedding-cream/80 mt-1">
            {currentItem.caption}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryLightbox;
