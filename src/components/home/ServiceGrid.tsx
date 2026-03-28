"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { services } from "@/data/services";

export function ServiceGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-12 lg:mb-16">
            <span className="inline-flex items-center gap-2.5 text-xs tracking-widest uppercase text-lime-600 font-bold mb-3">
              <span className="w-8 h-0.5 bg-lime-500" />
              What We Do
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 tracking-tight">
              One Call. Every Fix.
            </h2>
            <p className="text-charcoal-500 mt-3 max-w-lg text-base leading-relaxed">
              From quick repairs to full-day projects — we handle it all across
              South Florida.
            </p>
          </div>
        </ScrollReveal>

        {/* Service grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.slice(0, 9).map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.06}>
              <div className="group relative h-64 overflow-hidden bg-charcoal-900 hover-lift cursor-pointer">
                {/* Background image */}
                {service.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105 transition-transform"
                  />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-0.5 bg-lime-500 group-hover:w-10 transition-all duration-300" />
                    <span className="text-[10px] tracking-widest uppercase text-lime-400 font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-400 text-sm mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-lime-600 font-semibold text-sm hover:text-lime-700 transition-colors group"
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
