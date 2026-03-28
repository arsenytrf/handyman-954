import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/PageHero";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { BreadcrumbJsonLd } from "@/components/shared/JsonLd";
import { Button } from "@/components/shared/Button";
import { services } from "@/data/services";
import { company } from "@/data/company";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Full list of handyman services: painting, plumbing, electrical, mounting, flooring, furniture assembly, drywall, holiday lighting & more. Serving Miami to Boca Raton.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Home", url: "/" }, { name: "Services" }]}
      />
      <PageHero
        title="Our Services"
        description="From quick fixes to full-day projects. One call handles painting, plumbing, electrical, mounting, flooring, assembly, and everything in between."
        label="What We Do"
        image="https://images.craigslist.org/00d0d_gM8slJ3sS1Z_0hT0CI_600x450.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* Services grid with images */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.06}>
                <div
                  id={service.id}
                  className="group flex flex-col sm:flex-row bg-white border border-charcoal-100 overflow-hidden hover:border-lime-300 hover:shadow-md transition-all duration-300"
                >
                  {/* Image */}
                  {service.image && (
                    <div className="relative w-full sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-bold tracking-widest uppercase bg-lime-500 text-white px-2.5 py-1">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <h3 className="font-heading font-bold text-lg text-charcoal-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-charcoal-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section className="py-16 lg:py-20 bg-charcoal-50 border-y border-charcoal-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2.5 text-xs tracking-widest uppercase text-lime-600 font-bold mb-3">
              <span className="w-8 h-0.5 bg-lime-500" />
              Simple Pricing
              <span className="w-8 h-0.5 bg-lime-500" />
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal-900 tracking-tight">
              Transparent. Honest. Fair.
            </h2>
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              <div className="bg-white border border-charcoal-100 p-6">
                <div className="font-heading font-extrabold text-3xl text-lime-500 mb-1">
                  {company.pricing.hourly}
                </div>
                <div className="text-sm text-charcoal-500">Hourly Rate</div>
              </div>
              <div className="bg-white border border-charcoal-100 p-6">
                <div className="font-heading font-extrabold text-3xl text-lime-500 mb-1">
                  2 hrs
                </div>
                <div className="text-sm text-charcoal-500">Minimum</div>
              </div>
              <div className="bg-white border border-charcoal-100 p-6">
                <div className="font-heading font-extrabold text-3xl text-lime-500 mb-1">
                  Flat Rate
                </div>
                <div className="text-sm text-charcoal-500">
                  Available for Projects
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button href="/contact" variant="lime" className="px-8 py-3.5">
                Get Your Free Quote
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
