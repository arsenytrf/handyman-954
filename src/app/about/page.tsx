import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/PageHero";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { BreadcrumbJsonLd } from "@/components/shared/JsonLd";
import {
  Wrench,
  Clock,
  Heart,
  DollarSign,
  MapPin,
  Phone,
} from "lucide-react";
import { company } from "@/data/company";

export const metadata = createMetadata({
  title: "About",
  description:
    "Professional handyman services in Broward County, FL. We handle painting, plumbing, electrical, mounting, flooring, and more — Miami to Boca Raton.",
  path: "/about",
});

const values = [
  {
    icon: Wrench,
    title: "SKILLED WORK",
    description:
      "We're not just showing up with a toolbox. Every handyman on our team knows how to do the job right — painting, plumbing, electrical, flooring, you name it.",
  },
  {
    icon: Clock,
    title: "ON TIME, EVERY TIME",
    description:
      "We show up when we say we will. No 4-hour windows, no vague ETAs. You get a time, and we're there. Respect for your schedule is non-negotiable.",
  },
  {
    icon: Heart,
    title: "CLEAN & CAREFUL",
    description:
      "We treat your home like it's ours. Drop cloths go down, shoes come off, and we clean up before we leave. You won't know we were there — except the fix.",
  },
];

const stats = [
  { value: "$45", label: "Starting Hourly Rate" },
  { value: "1hr", label: "Average Response Time" },
  { value: "14+", label: "Cities Served" },
  { value: "100%", label: "Satisfaction Goal" },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Home", url: "/" }, { name: "About" }]}
      />
      <PageHero
        title="About Us"
        description="We're a South Florida handyman service that believes in doing things right. No excuses, no shortcuts, no callbacks."
        label="Who We Are"
        image="https://images.craigslist.org/00K0K_hB5uVq3sIAH_0CI0hT_600x450.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* Story section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image side */}
            <ScrollReveal>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.craigslist.org/00w0w_cSqXYsbpO6y_0hT0CI_600x450.jpg"
                    alt="954 Handyman Services team at work"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 border-2 border-lime-500/20" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 right-4 sm:-right-4 bg-lime-500 px-6 py-4 z-20 shadow-lg">
                  <div className="font-heading font-extrabold text-3xl text-white">
                    Broward
                  </div>
                  <div className="text-lime-100 text-xs tracking-widest uppercase">
                    County, FL
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Text side */}
            <ScrollReveal delay={0.15}>
              <span className="inline-flex items-center gap-2.5 text-xs tracking-widest uppercase text-lime-600 font-bold mb-3">
                <span className="w-8 h-0.5 bg-lime-500" />
                Our Story
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 tracking-tight leading-tight">
                Real Work.
                <br />
                <span className="text-lime-500">Real Results.</span>
              </h2>
              <div className="space-y-4 mt-6 text-charcoal-500 leading-relaxed">
                <p>
                  We started 954 Handyman Services because we saw what most
                  people deal with: unreliable handymen who don&apos;t show up,
                  don&apos;t call back, and leave the job half-done. We decided
                  to be the opposite of that.
                </p>
                <p>
                  Our team covers everything from interior and exterior painting
                  to plumbing, electrical work, TV mounting, furniture assembly,
                  flooring, drywall, and even holiday lighting. One call handles
                  your entire to-do list.
                </p>
                <p>
                  We serve all of Broward County and beyond — Fort Lauderdale,
                  Hollywood, Pompano Beach, Coral Springs, Plantation, Davie,
                  and everywhere from Miami to Boca Raton. If you&apos;re in
                  South Florida, we&apos;re your handyman.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-charcoal-50 border-y border-charcoal-100">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-14">
              <span className="inline-flex items-center gap-2.5 text-xs tracking-widest uppercase text-lime-600 font-bold mb-3">
                <span className="w-8 h-0.5 bg-lime-500" />
                What Drives Us
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 tracking-tight">
                Our Standards
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div>
                  <div className="w-12 h-12 bg-lime-50 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-lime-600" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-charcoal-900 mb-2">
                    {value.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-lime-500 mb-3" />
                  <p className="text-charcoal-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <ScrollReveal key={stat.label}>
                <div className="text-center">
                  <div className="font-heading font-extrabold text-4xl sm:text-5xl text-lime-400 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-sm text-charcoal-400 mt-2 font-medium">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 lg:py-20 bg-white border-b border-charcoal-100">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2.5 text-xs tracking-widest uppercase text-lime-600 font-bold mb-3">
                <MapPin className="w-4 h-4" />
                Service Area
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal-900 tracking-tight">
                Miami to Boca Raton
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {company.cities.map((city) => (
                <span
                  key={city}
                  className="text-sm px-4 py-2 bg-charcoal-50 border border-charcoal-100 text-charcoal-600 hover:border-lime-300 hover:text-lime-600 transition-all duration-300"
                >
                  {city}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
