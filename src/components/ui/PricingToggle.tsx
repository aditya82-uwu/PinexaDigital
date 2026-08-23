"use client";

import { motion } from "framer-motion";

/**
 * Monthly/annually pill switch. Not wired into any page yet — PinexaDigital's
 * current plans (one-time project fees on /pricing, flat monthly plans on
 * /services/maintenance) have no annual variant to toggle to. Available for
 * reuse if real recurring/annual pricing is added later.
 */
export default function PricingToggle({
  value,
  onChange,
  leftLabel = "Pay Monthly",
  rightLabel = "Annually",
}: {
  value: "left" | "right";
  onChange: (value: "left" | "right") => void;
  leftLabel?: string;
  rightLabel?: string;
}) {
  return (
    <div className="inline-flex items-center gap-3 text-[14px] font-medium">
      <span className={value === "left" ? "text-title" : "text-faint"}>{leftLabel}</span>
      <button
        type="button"
        role="switch"
        aria-checked={value === "right"}
        onClick={() => onChange(value === "left" ? "right" : "left")}
        className="relative w-12 h-7 rounded-full bg-accent-solid/30 shrink-0 cursor-pointer"
      >
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 500, damping: 32 }}
          className="absolute top-1 w-5 h-5 rounded-full bg-accent-solid"
          style={{ left: value === "left" ? 4 : 24 }}
        />
      </button>
      <span className={value === "right" ? "text-title" : "text-faint"}>{rightLabel}</span>
    </div>
  );
}
