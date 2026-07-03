"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { SITE } from "@/lib/site-config";

const links = [
  { label: "Services",  href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing",   href: "/pricing" },
  { label: "About",     href: "/about" },
  { label: "Blog",      href: "/blog" },
  { label: "Contact",   href: "/contact" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-8 h-8" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="w-8 h-8 flex items-center justify-center rounded-full border border-line text-faint hover:text-title hover:border-title transition-colors"
    >
      {theme === "dark"
        ? <Sun size={15} strokeWidth={1.8} className="text-amber-400" />
        : <Moon size={15} strokeWidth={1.8} />}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-card transition-shadow duration-200 ${
        scrolled ? "shadow-card border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src={!mounted || resolvedTheme === "dark" ? "/logo-light.png" : "/logo-dark.png"}
            alt={SITE.brandName}
            width={140}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[14px] text-prose px-3 py-2 rounded-full hover:text-title hover:bg-surface transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/contact"
            className="h-8 px-4 flex items-center text-[13px] font-medium bg-[#171717] text-white dark:bg-white dark:text-[#171717] rounded-md hover:opacity-85 transition-opacity"
          >
            Get a quote
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="w-8 h-8 flex items-center justify-center text-title"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} strokeWidth={1.8} /> : <Menu size={18} strokeWidth={1.8} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden absolute inset-x-0 top-16 bg-card border-b border-line px-6 py-4 flex flex-col gap-1 shadow-card-lg">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[14px] text-prose px-3 py-2.5 rounded-lg hover:text-title hover:bg-surface transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3 mt-2 border-t border-line">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="h-11 w-full flex items-center justify-center text-[14px] font-medium bg-[#171717] text-white dark:bg-white dark:text-[#171717] rounded-lg"
            >
              Get a quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
