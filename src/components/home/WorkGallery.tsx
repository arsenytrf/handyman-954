"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { galleryImages } from "@/data/gallery";

export function WorkGallery() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-12">
            <span className="inline-flex items-center gap-2.5 text-xs tracking-widest uppercase text-lime-600 font-bold mb-3">
              <span className="w-8 h-0.5 bg-lime-500" />
              Our Work
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 tracking-tight">
              Recent Projects
            </h2>
          </div>
        </ScrollReveal>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div
                className={`group relative overflow-hidden bg-charcoal-100 ${
                  i === 0 || i === 5
                    ? "row-span-2 aspect-[3/4]"
                    : "aspect-square"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/50 transition-all duration-300 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs text-lime-400 font-bold uppercase tracking-wider">
                      {img.category}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
