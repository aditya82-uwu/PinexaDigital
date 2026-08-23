"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import AnimatedNumber from "./AnimatedNumber";

export default function StatCard({
  Icon,
  to,
  suffix = "",
  label,
  tone = "on-contrast",
  delay = 0,
}: {
  Icon: LucideIcon;
  to: number;
  suffix?: string;
  label: string;
  tone?: "default" | "on-contrast";
  delay?: number;
}) {
  const iconWrap = tone === "on-contrast" ? "bg-white/10 text-accent-solid" : "bg-accent-solid/10 text-accent-solid";
  const numberColor = tone === "on-contrast" ? "text-on-contrast" : "text-title";
  const labelColor = tone === "on-contrast" ? "text-on-contrast-faint" : "text-faint";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
      <div className={`inline-flex w-12 h-12 rounded-xl items-center justify-center mb-3 ${iconWrap}`}>
        <Icon size={20} strokeWidth={1.8} />
      </div>
      <div className={`text-3xl md:text-4xl font-bold mb-1 ${numberColor}`}>
        <AnimatedNumber to={to} suffix={suffix} />
      </div>
      <div className={`text-[13px] ${labelColor}`}>{label}</div>
    </motion.div>
  );
}
