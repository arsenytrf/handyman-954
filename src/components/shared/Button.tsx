import Link from "next/link";
import { cn } from "@/lib/cn";

interface ButtonProps {
  href?: string;
  external?: boolean;
  variant?: "lime" | "outline" | "dark" | "white" | "ghost";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const base =
  "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-transparent";

const variants = {
  lime: "bg-lime-500 text-white hover:bg-lime-600 hover:shadow-[0_4px_20px_-4px_rgba(132,204,22,0.5)]",
  outline:
    "border-2 border-lime-500 text-lime-600 hover:bg-lime-500 hover:text-white hover:shadow-[0_4px_20px_-4px_rgba(132,204,22,0.3)]",
  dark: "bg-charcoal-900 text-white hover:bg-charcoal-800 hover:shadow-lg",
  white: "bg-white text-charcoal-900 hover:bg-charcoal-50 hover:shadow-lg",
  ghost:
    "border border-charcoal-200 text-charcoal-700 hover:bg-charcoal-50 hover:border-charcoal-300",
};

export function Button({
  href,
  external,
  variant = "lime",
  children,
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
