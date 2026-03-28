"use client";

import { Phone, ArrowRight, Clock, DollarSign, MapPin } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { company } from "@/data/company";
import { HeroForm } from "./HeroForm";

export function HomeHero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      {/* Background image at 12% opacity */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.craigslist.org/00n0n_CyO5ZPUlLq_0CI0hT_600x450.jpg"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-white/[0.88]" />
      </div>

      {/* Diagonal lime accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-lime-500/5 skew-x-[-12deg] translate-x-1/4" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-6 pt-32 lg:pt-36 pb-12 lg:pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left: Content */}
          <div>
            <span className="inline-flex items-center gap-2.5 text-xs tracking-widest uppercase text-lime-600 font-bold mb-5">
              <span className="w-10 h-0.5 bg-lime-500" />
              Broward County&apos;s Handyman
            </span>

            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl text-charcoal-900 tracking-tight leading-[0.95]">
              We Show Up.
              <br />
              <span className="text-lime-500">We Get It Done.</span>
            </h1>

            <p className="text-charcoal-500 text-lg max-w-lg mt-6 leading-relaxed">
              Painting, plumbing, electrical, mounting, flooring, assembly — one
              call handles it all. Professional handyman services from Miami to
              Boca Raton.
            </p>

            {/* Pricing callout */}
            <div className="flex flex-wrap gap-6 mt-6 text-sm text-charcoal-600">
              <span className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-lime-500" />
                Starting at {company.pricing.hourly}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-lime-500" />
                {company.pricing.minimum}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-lime-500" />
                {company.serviceArea}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button
                href={company.phoneLink}
                variant="lime"
                className="text-base px-7 py-3.5 animate-pulse-glow"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call {company.phone}
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="text-base px-7 py-3.5"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right: HeroForm */}
          <div className="hidden lg:block">
            <HeroForm />
          </div>
        </div>
      </div>

      {/* Mobile CTA strip */}
      <div className="lg:hidden relative z-20 bg-charcoal-950 px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="font-heading font-bold text-white text-base">
              Free Quotes
            </span>
            <span className="text-charcoal-400 block text-xs">
              We respond within 1 hour
            </span>
          </div>
          <Button
            href="/contact"
            variant="lime"
            className="shrink-0 text-xs px-4 py-2.5"
          >
            Get Quote
          </Button>
        </div>
      </div>

      {/* Bottom lime line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-lime-500 z-30" />
    </section>
  );
}
