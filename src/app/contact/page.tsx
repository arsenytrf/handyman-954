import { Suspense } from "react";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/PageHero";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { BreadcrumbJsonLd } from "@/components/shared/JsonLd";
import { QuoteForm } from "@/components/contact/QuoteForm";
import { company } from "@/data/company";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  DollarSign,
} from "lucide-react";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Get a free quote from 954 Handyman Services. Call (954) 445-7471 or submit a request online. We respond within 1 hour. Miami to Boca Raton.",
  path: "/contact",
});

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    lines: [{ text: company.phone, href: company.phoneLink }],
  },
  {
    icon: MessageCircle,
    label: "WhatsApp / Telegram",
    lines: [
      { text: "WhatsApp", href: company.whatsapp },
      { text: "Telegram", href: company.telegram },
    ],
  },
  {
    icon: MapPin,
    label: "Service Area",
    lines: [{ text: "Miami to Boca Raton, FL" }],
  },
  {
    icon: Clock,
    label: "Hours",
    lines: [
      { text: company.hours.weekday },
      { text: company.hours.weekend },
    ],
  },
  {
    icon: DollarSign,
    label: "Pricing",
    lines: [
      { text: `Starting at ${company.pricing.hourly}` },
      { text: company.pricing.minimum },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Home", url: "/" }, { name: "Contact" }]}
      />
      <PageHero
        title="Get in Touch"
        description="Have a question or ready to book? Reach out for a free, no-obligation quote. We respond within 1 hour."
        label="Contact Us"
        image="https://images.craigslist.org/00q0q_6VJ3QMZqlMi_0CI0hT_600x450.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      {/* Contact info + form */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left sidebar */}
            <div className="lg:col-span-4">
              <ScrollReveal>
                <span className="inline-flex items-center gap-2.5 text-xs tracking-widest uppercase text-lime-600 font-bold mb-3">
                  <span className="w-8 h-0.5 bg-lime-500" />
                  Contact Info
                </span>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal-900 mb-6">
                  Let&apos;s Talk
                </h2>
              </ScrollReveal>

              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <ScrollReveal key={item.label}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-lime-50 flex items-center justify-center shrink-0">
                        <item.icon className="w-4.5 h-4.5 text-lime-600" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-sm text-charcoal-900 uppercase tracking-wide">
                          {item.label}
                        </h3>
                        {item.lines.map((line) => (
                          <p
                            key={line.text}
                            className="text-sm text-charcoal-500 mt-0.5"
                          >
                            {"href" in line && line.href ? (
                              <a
                                href={line.href}
                                target={
                                  line.href.startsWith("http")
                                    ? "_blank"
                                    : undefined
                                }
                                rel={
                                  line.href.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                className="hover:text-lime-600 transition-colors"
                              >
                                {line.text}
                              </a>
                            ) : (
                              line.text
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Map */}
              <ScrollReveal>
                <div className="mt-8 aspect-4/3 overflow-hidden border border-charcoal-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229667.33786788!2d-80.3358!3d26.1224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d900e5dfb6b6fb%3A0x8e9149964490e0b3!2sBroward%20County%2C%20FL!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    className="border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="954 Handyman Services — Broward County service area"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-8">
              <Suspense
                fallback={
                  <div className="h-96 bg-charcoal-50 animate-pulse" />
                }
              >
                <QuoteForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-14 lg:py-18 bg-charcoal-50 border-y border-charcoal-100">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2.5 text-xs tracking-widest uppercase text-lime-600 font-bold mb-3">
                <span className="w-8 h-0.5 bg-lime-500" />
                What Happens Next
                <span className="w-8 h-0.5 bg-lime-500" />
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal-900 tracking-tight">
                From Call to Done
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "YOU REACH OUT",
                desc: "Call, text, or submit the form. We respond within 1 hour to discuss your project.",
              },
              {
                num: "02",
                title: "WE QUOTE IT",
                desc: "Clear pricing upfront — hourly or flat-rate. No surprises, no hidden fees.",
              },
              {
                num: "03",
                title: "JOB DONE",
                desc: "We show up on time, do the work, clean up, and make sure you're happy before we leave.",
              },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div className="text-center">
                  <span className="font-heading font-extrabold text-3xl text-lime-500">
                    {step.num}
                  </span>
                  <h3 className="font-heading font-bold text-base text-charcoal-900 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-charcoal-500 mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
