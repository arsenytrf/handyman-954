"use client";

import {
  Clock,
  DollarSign,
  Shield,
  Wrench,
  Phone,
  MapPin,
} from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const reasons = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "Starting at $45/hr with a 2-hour minimum. No hidden fees, no surprises. Flat-rate quotes available for larger projects.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description:
      "We respond to every call and message within 1 hour. Same-day and next-day service available across Broward County.",
  },
  {
    icon: Wrench,
    title: "Multi-Skill Crew",
    description:
      "One handyman handles painting, plumbing, electrical, mounting, flooring, and more. No need to hire 5 different people.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description:
      "We stand behind every job. If something's not right, we come back and fix it — no questions, no extra charge.",
  },
  {
    icon: Phone,
    title: "Easy Booking",
    description:
      "Call, text, WhatsApp, or Telegram. Book on your terms. We work around your schedule, not the other way around.",
  },
  {
    icon: MapPin,
    title: "Miami to Boca",
    description:
      "We cover all of Broward County and beyond — Fort Lauderdale, Hollywood, Pompano, Coral Springs, Plantation, and more.",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal-50">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2.5 text-xs tracking-widest uppercase text-lime-600 font-bold mb-3">
              <span className="w-8 h-0.5 bg-lime-500" />
              Why Choose Us
              <span className="w-8 h-0.5 bg-lime-500" />
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 tracking-tight">
              Handyman Done Right
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 0.08}>
              <div className="bg-white border border-charcoal-100 p-7 hover:border-lime-300 hover:shadow-md transition-all duration-300 h-full group">
                <div className="w-11 h-11 bg-lime-50 flex items-center justify-center mb-4 group-hover:bg-lime-100 transition-colors duration-300">
                  <reason.icon className="w-5 h-5 text-lime-600" />
                </div>
                <h3 className="font-heading font-bold text-lg text-charcoal-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
