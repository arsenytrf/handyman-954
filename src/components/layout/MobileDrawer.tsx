"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/navigation";
import { company } from "@/data/company";
import { cn } from "@/lib/cn";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden"
            aria-hidden="true"
          />
          <motion.div
            ref={drawerRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 lg:hidden flex flex-col overflow-hidden shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            onKeyDown={handleKeyDown}
          >
            {/* Lime accent stripe */}
            <div className="absolute top-0 left-0 w-1 h-full bg-lime-500" />

            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-charcoal-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-lime-500 flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-sm leading-none">
                    9
                  </span>
                </div>
                <span className="font-heading font-bold text-sm text-charcoal-900">
                  954 Handyman
                </span>
              </div>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center text-charcoal-400 hover:text-charcoal-900 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 py-6 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "group flex items-center justify-between py-4 text-lg font-heading font-semibold border-b border-charcoal-100 transition-colors",
                      pathname === link.href
                        ? "text-lime-600"
                        : "text-charcoal-800 hover:text-lime-600"
                    )}
                  >
                    {link.label}
                    <ArrowRight
                      className={cn(
                        "w-4 h-4 transition-all duration-300",
                        pathname === link.href
                          ? "text-lime-500 opacity-100"
                          : "text-charcoal-300 opacity-0 group-hover:opacity-100 group-hover:text-lime-500 group-hover:translate-x-1"
                      )}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom contact */}
            <div className="p-6 border-t border-charcoal-100 space-y-3">
              <a
                href={company.phoneLink}
                className="flex items-center gap-3 text-charcoal-600 hover:text-lime-600 transition-colors"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-charcoal-50">
                  <Phone className="w-4 h-4 text-lime-500" />
                </div>
                <span className="text-sm font-medium">{company.phone}</span>
              </a>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-charcoal-600 hover:text-lime-600 transition-colors"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-charcoal-50">
                  <MessageCircle className="w-4 h-4 text-lime-500" />
                </div>
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full text-center bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3.5 mt-4 tracking-wide text-sm transition-all duration-300"
              >
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
