import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function CircleArrowLink({
  href,
  label,
  variant = "text",
  direction = "right",
  tone = "default",
  external = false,
  className = "",
}: {
  href: string;
  label: string;
  variant?: "text" | "button";
  direction?: "right" | "up-right";
  tone?: "default" | "on-contrast";
  external?: boolean;
  className?: string;
}) {
  const Icon = direction === "up-right" ? ArrowUpRight : ArrowRight;
  // "button" variant always sits on its own bg-card pill (regardless of section tone), so its
  // label must stay text-title; only the borderless "text" variant should follow the tone prop.
  const textColor = variant === "button" ? "text-title" : tone === "on-contrast" ? "text-on-contrast" : "text-title";
  const content = (
    <>
      <span className="w-9 h-9 rounded-full bg-accent-solid flex items-center justify-center shrink-0 transition-transform group-hover:rotate-45">
        <Icon size={16} className="text-white" />
      </span>
      <span className={`text-[14px] font-semibold ${textColor}`}>{label}</span>
    </>
  );
  const classes = `group inline-flex items-center gap-3 ${
    variant === "button" ? "rounded-full bg-card py-1.5 pl-1.5 pr-5 shadow-card" : ""
  } ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
