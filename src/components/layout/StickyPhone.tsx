"use client";

import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { company } from "@/data/company";

export function StickyPhone() {
  const progress = useScrollProgress();
  const visible = progress > 0.05;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={company.phoneLink}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-20 left-4 z-40 lg:hidden flex items-center gap-2 bg-lime-500 text-white px-4 py-3 shadow-lg hover:bg-lime-600 transition-colors duration-300"
          aria-label={`Call ${company.phone}`}
        >
          <Phone className="w-4 h-4" />
          <span className="text-sm font-semibold">Call Now</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
