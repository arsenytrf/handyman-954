"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";

const inputClass =
  "w-full bg-charcoal-50 text-charcoal-900 px-4 py-3.5 text-sm placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-lime-500 border border-charcoal-200 transition-all duration-300 focus:border-lime-400 focus:bg-white";

const labelClass =
  "block text-xs font-semibold text-charcoal-500 mb-1.5 tracking-wide uppercase";

export function QuoteForm() {
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
          email: fd.get("email"),
          address: fd.get("address"),
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
      <div
        id="quote"
        className="bg-white border-2 border-lime-500 p-12 text-center"
      >
        <CheckCircle className="w-14 h-14 text-lime-500 mx-auto mb-4" />
        <h3 className="font-heading font-bold text-2xl text-charcoal-900 mb-2">
          Request Sent!
        </h3>
        <p className="text-charcoal-500">
          We&apos;ll be in touch within 1 hour. For immediate help, call{" "}
          <a href={company.phoneLink} className="text-lime-600 font-semibold">
            {company.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <div id="quote" className="bg-white border border-charcoal-200 p-8 lg:p-10 shadow-sm">
      {/* Lime top accent */}
      <div className="w-12 h-1 bg-lime-500 mb-6" />

      <h2 className="font-heading font-bold text-2xl text-charcoal-900 mb-1">
        Request a Free Quote
      </h2>
      <p className="text-sm text-charcoal-400 mb-6">
        Fill out the form and we&apos;ll get back to you within 1 hour.
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

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="_honey"
          className="hidden"
          tabIndex={-1}
          aria-hidden="true"
        />

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="qf-name" className={labelClass}>
              Full Name
            </label>
            <input
              type="text"
              id="qf-name"
              name="name"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="qf-phone" className={labelClass}>
              Phone Number
            </label>
            <input
              type="tel"
              id="qf-phone"
              name="phone"
              required
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="qf-email" className={labelClass}>
              Email (Optional)
            </label>
            <input
              type="email"
              id="qf-email"
              name="email"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="qf-address" className={labelClass}>
              Project Address
            </label>
            <input
              type="text"
              id="qf-address"
              name="address"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="qf-service" className={labelClass}>
              Service Needed
            </label>
            <select
              id="qf-service"
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
            <label htmlFor="qf-date" className={labelClass}>
              Preferred Date
            </label>
            <input
              type="date"
              id="qf-date"
              name="preferred-date"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="qf-details" className={labelClass}>
            Project Details
          </label>
          <textarea
            id="qf-details"
            name="details"
            placeholder="Describe what you need..."
            rows={4}
            className={inputClass + " resize-none"}
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-lime-500 hover:bg-lime-600 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:shadow-[0_4px_20px_-4px_rgba(132,204,22,0.5)] flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Quote Request"
          )}
        </button>
      </form>
    </div>
  );
}
