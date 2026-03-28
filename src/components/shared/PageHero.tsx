import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  description: string;
  label?: string;
  image: string;
  breadcrumbs: { label: string; href?: string }[];
}

export function PageHero({
  title,
  description,
  label,
  image,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[55vh] lg:min-h-[60vh] flex items-end overflow-hidden">
      {/* Background image at 12% */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-white/[0.88]" />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-linear-to-t from-white via-white/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 lg:pb-18 pt-36 lg:pt-40 w-full">
        {/* Breadcrumbs */}
        <nav
          className="flex items-center gap-1.5 text-sm text-charcoal-400 mb-6"
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-lime-600 transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-charcoal-600">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        {label && (
          <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-lime-600 font-semibold mb-3">
            <span className="w-8 h-0.5 bg-lime-500" />
            {label}
          </span>
        )}
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-charcoal-900 tracking-tight leading-[0.95]">
          {title}
        </h1>
        <p className="mt-4 text-charcoal-500 max-w-xl text-base lg:text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom lime accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-lime-500" />
    </section>
  );
}
