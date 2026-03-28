"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, MessageCircle } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navLinks } from "@/data/navigation";
import { company } from "@/data/company";
import { cn } from "@/lib/cn";
import { MobileDrawer } from "./MobileDrawer";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > 200 && latest > previous);
    setScrolled(latest > 50);
  });

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-charcoal-100"
            : "bg-white/80 backdrop-blur-sm"
        )}
      >
        {/* Top accent bar */}
        <div className="h-1 bg-lime-500 w-full" />

        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-lime-500 flex items-center justify-center transition-all duration-300 group-hover:bg-lime-600">
              <span className="text-white font-heading font-bold text-lg leading-none">
                9
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base text-charcoal-900 leading-tight tracking-tight">
                954 Handyman
              </span>
              <span className="text-[10px] text-charcoal-400 tracking-widest uppercase leading-none">
                Services
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors relative py-1",
                  pathname === link.href
                    ? "text-lime-600"
                    : "text-charcoal-600 hover:text-charcoal-900"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-lime-500"
                  />
                )}
              </Link>
            ))}

            {/* Phone */}
            <a
              href={company.phoneLink}
              className="flex items-center gap-2 text-sm font-medium text-charcoal-700 hover:text-lime-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {company.phone}
            </a>

            {/* CTA */}
            <Link
              href="/contact"
              className="bg-lime-500 hover:bg-lime-600 text-white text-sm font-semibold px-5 py-2.5 tracking-wide transition-all duration-300 hover:shadow-[0_4px_16px_-4px_rgba(132,204,22,0.5)]"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={company.phoneLink}
              className="w-10 h-10 flex items-center justify-center bg-lime-500 text-white"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setDrawerOpen(true)}
              className="w-10 h-10 flex items-center justify-center text-charcoal-700"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
