"use client";

import { useState } from "react";
import {
  Clock,
  CheckCircle,
  Loader2,
  Calendar,
} from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";

const inputClass =
  "w-full bg-charcoal-50 text-charcoal-900 px-4 py-3 text-sm placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-lime-500 border border-charcoal-200 transition-all duration-300 focus:border-lime-400 focus:bg-white";

const labelClass =
  "block text-xs font-semibold text-charcoal-500 mb-1.5 tracking-wide uppercase";

export function HeroForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const fd = new FormData(e.currentTarget);

    try {
      const res = await fetch(company.formAction, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          phone: fd.get("phone"),
          service: fd.get("service"),
          date: fd.get("preferred-date"),
          details: fd.get("details"),
        }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSent(true);
    } catch {
      setError(true);
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="bg-white border-2 border-lime-500 p-10 text-center shadow-xl">
        <CheckCircle className="w-12 h-12 text-lime-500 mx-auto mb-4" />
        <h3 className="font-heading font-bold text-2xl text-charcoal-900 mb-2">
          Request Sent!
        </h3>
        <p className="text-charcoal-500 text-sm">
          We&apos;ll get back to you within 1 hour. For immediate help, call{" "}
          <a href={company.phoneLink} className="text-lime-600 font-semibold">
            {company.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="relative bg-white border border-charcoal-200 p-7 lg:p-8 shadow-xl overflow-hidden">
      {/* Lime top accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-lime-500" />

      <div className="relative z-10">
        <div className="flex items-center gap-2.5 mb-1">
          <Calendar className="w-4 h-4 text-lime-500" />
          <span className="text-xs tracking-widest uppercase text-lime-600 font-bold">
            Book a Handyman
          </span>
        </div>
        <h2 className="font-heading font-bold text-xl text-charcoal-900 mb-1">
          Get Your Free Quote
        </h2>
        <p className="text-sm text-charcoal-400 mb-5">
          Tell us what you need — we respond fast.
        </p>

        {error && (
          <div
            className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm"
            role="alert"
          >
            Something went wrong. Please try again or{" "}
            <a href={company.phoneLink} className="underline font-semibold">
              call us
            </a>
            .
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Honeypot */}
          <input
            type="text"
            name="_honey"
            className="hidden"
            tabIndex={-1}
            aria-hidden="true"
          />

          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="hf-name" className={labelClass}>
                Your Name
              </label>
              <input
                type="text"
                id="hf-name"
                name="name"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="hf-phone" className={labelClass}>
                Phone Number
              </label>
              <input
                type="tel"
                id="hf-phone"
                name="phone"
                required
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="hf-service" className={labelClass}>
              What Do You Need?
            </label>
            <select
              id="hf-service"
              name="service"
              required
              className={inputClass}
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Other">Something Else</option>
            </select>
          </div>

          <div>
            <label htmlFor="hf-date" className={labelClass}>
              Preferred Date
            </label>
            <input
              type="date"
              id="hf-date"
              name="preferred-date"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="hf-details" className={labelClass}>
              Details (Optional)
            </label>
            <textarea
              id="hf-details"
              name="details"
              placeholder="Describe the job..."
              rows={2}
              className={inputClass + " resize-none"}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-lime-500 hover:bg-lime-600 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:shadow-[0_4px_20px_-4px_rgba(132,204,22,0.5)] flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Request Free Quote"
            )}
          </button>
        </form>

        <div className="flex items-center justify-center gap-5 mt-4 text-xs text-charcoal-400">
          {[
            { icon: CheckCircle, text: "No cost" },
            { icon: Clock, text: "1hr response" },
          ].map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-1.5">
              <Icon className="w-3 h-3 text-lime-500" /> {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
