"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface TabItem {
  label: string;
  content: ReactNode;
}

export default function Tabs({
  tabs,
  tone = "on-contrast",
}: {
  tabs: TabItem[];
  tone?: "default" | "on-contrast";
}) {
  const [active, setActive] = useState(0);
  const inactiveColor = tone === "on-contrast" ? "text-on-contrast-faint" : "text-faint";
  const activeColor = tone === "on-contrast" ? "text-on-contrast" : "text-title";
  const borderColor = tone === "on-contrast" ? "border-border-contrast" : "border-line";

  return (
    <div>
      <div className={`flex flex-wrap gap-6 border-b ${borderColor} mb-8`}>
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            type="button"
            onClick={() => setActive(i)}
            className={`relative pb-3 text-[14px] font-semibold transition-colors cursor-pointer ${
              active === i ? activeColor : inactiveColor
            }`}
          >
            {tab.label}
            {active === i && (
              <motion.span
                layoutId="tabs-underline"
                className="absolute left-0 right-0 -bottom-px h-0.5 bg-accent-solid"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {tabs[active].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
