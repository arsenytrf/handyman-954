"use client";

import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function BackToTop() {
  const progress = useScrollProgress();
  const visible = progress > 0.1;
  const circumference = 2 * Math.PI * 18;

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 w-11 h-11 flex items-center justify-center bg-white hover:bg-charcoal-50 text-charcoal-900 shadow-lg border border-charcoal-100 transition-colors group"
          aria-label="Back to top"
        >
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 40 40"
          >
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-charcoal-100"
            />
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-lime-500"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - progress)}
              strokeLinecap="square"
            />
          </svg>
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
