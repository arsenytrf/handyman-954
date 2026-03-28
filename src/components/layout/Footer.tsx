import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { company } from "@/data/company";
import { footerServices, footerCompany } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-charcoal-950 text-charcoal-400 relative overflow-hidden">
      {/* Lime top line */}
      <div className="h-1 bg-lime-500 w-full" />

      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 bg-lime-500 flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg leading-none">
                  9
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-base text-white leading-tight">
                  954 Handyman
                </span>
                <span className="text-[10px] text-charcoal-500 tracking-widest uppercase leading-none">
                  Services
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-charcoal-500">
              Professional handyman services covering Broward County and South
              Florida. From Miami to Boca Raton — we show up, we get it done.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white tracking-wide uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {footerServices.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-charcoal-500 hover:text-lime-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white tracking-wide uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {footerCompany.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-charcoal-500 hover:text-lime-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Areas */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white tracking-wide uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href={company.phoneLink}
                  className="flex items-center gap-2.5 text-sm text-charcoal-500 hover:text-lime-400 transition-colors duration-300"
                >
                  <Phone className="w-3.5 h-3.5 text-lime-500 shrink-0" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-charcoal-500 hover:text-lime-400 transition-colors duration-300"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-lime-500 shrink-0" />
                  WhatsApp / Telegram
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2.5 text-sm text-charcoal-500">
                  <MapPin className="w-3.5 h-3.5 text-lime-500 shrink-0" />
                  {company.serviceArea}, FL
                </span>
              </li>
            </ul>

            <h4 className="font-heading font-bold text-xs text-white tracking-wide uppercase mb-3">
              Service Areas
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {company.cities.slice(0, 8).map((city) => (
                <span
                  key={city}
                  className="text-xs px-2 py-0.5 bg-charcoal-900 text-charcoal-500 hover:text-lime-400 transition-colors duration-300"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-charcoal-600">
            &copy; {new Date().getFullYear()} {company.name}. All rights
            reserved.
          </p>
          <a
            href="https://epageusa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-charcoal-700 hover:text-charcoal-400 transition-colors"
          >
            Website by ePageUSA.com
          </a>
        </div>
      </div>
    </footer>
  );
}
