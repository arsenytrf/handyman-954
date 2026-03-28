"use client";

import { Phone, ClipboardList, Hammer, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "You Call or Text",
    description:
      "Tell us what you need — painting, plumbing, mounting, whatever. We respond within 1 hour with availability.",
    icon: Phone,
  },
  {
    number: "02",
    title: "We Quote It",
    description:
      "Clear, upfront pricing. Hourly or flat-rate depending on the job. No hidden fees, no surprises when we're done.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "We Show Up",
    description:
      "On time, every time. We bring our own tools, materials, and clean up after ourselves. You don't lift a finger.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Job Done Right",
    description:
      "We don't leave until you're happy. Walk the job with us, check every detail. If it's not right, we fix it.",
    icon: CheckCircle,
  },
];

export function ProcessSteps() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal-950 relative overflow-hidden">
      {/* Lime accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-lime-500" />

      {/* Diagonal pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 60px,
              rgba(132, 204, 22, 0.5) 60px,
              rgba(132, 204, 22, 0.5) 61px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2.5 text-xs tracking-widest uppercase text-lime-400 font-bold mb-3">
              <span className="w-8 h-0.5 bg-lime-500" />
              How It Works
              <span className="w-8 h-0.5 bg-lime-500" />
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Four Steps to Done
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <div className="relative bg-white/5 border border-white/10 p-7 h-full group hover:border-lime-500/30 transition-all duration-300">
                {/* Lime hover glow */}
                <div className="absolute inset-0 bg-lime-500/0 group-hover:bg-lime-500/5 transition-colors duration-300" />

                <div className="relative z-10">
                  <span className="font-heading font-extrabold text-4xl text-charcoal-800 group-hover:text-lime-500/40 transition-colors duration-300 leading-none block mb-4">
                    {step.number}
                  </span>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-lime-500/10 group-hover:bg-lime-500/20 transition-colors duration-300">
                      <step.icon className="w-5 h-5 text-lime-400" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-charcoal-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
