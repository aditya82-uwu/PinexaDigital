"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

const STORAGE_KEY = "pinexa-quote-bar-dismissed";
/** Show once the visitor has scrolled past this fraction of the page — deep enough
 *  that they've seen the content, not an immediate "you just got here" interruption. */
const SCROLL_THRESHOLD = 0.55;

export default function StickyQuoteBar() {
  const pathname = usePathname();
  const [dismissed, setDismissed] = useState(true); // default hidden until sessionStorage is checked, avoids a flash
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setDismissed(sessionStorage.getItem(STORAGE_KEY) === "1");
  }, []);

  useEffect(() => {
    setVisible(false);
    // Skip on /contact: the page already is the CTA, a bar promoting it would be redundant.
    if (dismissed || pathname === "/contact") return;

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        if (progress > SCROLL_THRESHOLD) setVisible(true);
        ticking = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, dismissed]);

  function handleDismiss() {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem(STORAGE_KEY, "1");
  }

  if (dismissed || pathname === "/contact") return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/*
        pr-20/28 keeps this bar's content clear of FloatingContact's fixed bottom-right
        icons (same corner-collision issue fixed on the mobile blog post — solved here
        the same way, by never letting the two overlap in the first place).
      */}
      <div className="bg-card border-t border-line shadow-card-lg">
        <div className="max-w-350 mx-auto pl-6 pr-20 sm:pr-28 py-3.5 flex items-center gap-3 sm:gap-4">
          {/*
            Inline `whiteSpace: nowrap` (not just the `truncate` utility) because the
            site's global `p { text-wrap: pretty }` base rule lives outside any
            `@layer`, so it beats Tailwind's layered `truncate` utility in the cascade —
            an inline style is the one thing guaranteed to win regardless.
          */}
          <p
            className="text-[13px] sm:text-[14px] text-prose flex-1 min-w-0 truncate"
            style={{ whiteSpace: "nowrap" }}
          >
            <span className="hidden sm:inline">Ready to talk about your project? </span>
            Get a free, no-obligation quote.
          </p>
          <Link
            href="/contact"
            className="shrink-0 h-9 sm:h-10 px-4 sm:px-5 inline-flex items-center gap-1.5 text-[13px] font-semibold bg-accent-solid text-white rounded-full hover:opacity-90 transition-opacity"
          >
            Get a quote
            <ArrowRight size={13} />
          </Link>
          <button
            onClick={handleDismiss}
            aria-label="Dismiss"
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full text-faint hover:text-title hover:bg-surface transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
