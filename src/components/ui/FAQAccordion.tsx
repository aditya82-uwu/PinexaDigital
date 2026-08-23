"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export type { FAQItem } from "@/lib/faq-schema";
import type { FAQItem } from "@/lib/faq-schema";

export default function FAQAccordion({
  items,
  defaultOpen = 0,
}: {
  items: FAQItem[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="flex flex-col divide-y divide-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="py-6">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-6 text-left cursor-pointer group"
            >
              <span className="text-[16px] font-semibold text-title group-hover:text-link transition-colors">
                {item.q}
              </span>
              <span className="shrink-0 text-faint group-hover:text-link transition-colors">
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-[14px] leading-6 text-prose pt-4">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
