"use client";

import { ArrowRight, Phone } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { Button } from "./Button";
import { company } from "@/data/company";

export function CtaBanner() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-charcoal-950">
      {/* Lime accent strip at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-lime-500" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(132, 204, 22, 0.3) 40px,
              rgba(132, 204, 22, 0.3) 41px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-lime-400 font-semibold mb-4">
            <span className="w-8 h-0.5 bg-lime-500" />
            Ready to Get Started?
            <span className="w-8 h-0.5 bg-lime-500" />
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Your To-Do List
            <br />
            <span className="text-lime-400">Handled.</span>
          </h2>
          <p className="text-charcoal-400 mt-4 text-lg leading-relaxed max-w-xl mx-auto">
            Starting at {company.pricing.hourly} with a{" "}
            {company.pricing.minimum}. Call, text, or WhatsApp — we respond
            fast.
          </p>
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <Button
              href={company.phoneLink}
              variant="lime"
              className="text-base px-8 py-3.5"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call {company.phone}
            </Button>
            <Button
              href="/contact"
              className="text-base px-8 py-3.5 border border-white/20 text-white bg-transparent hover:bg-white/10"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
