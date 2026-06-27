import type { Metadata } from "next";
import Link from "next/link";
import { SITE, siteUrl } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "About PinexaDigital — Web Agency",
  description: `Learn about ${SITE.brandName} — a web design and development agency focused on helping US businesses grow online with professional, high-converting websites.`,
  alternates: { canonical: siteUrl("/about") },
};

const values = [
  { title: "US-market focus.", desc: "Everything we build is tailored to what US audiences expect — familiar patterns, fast load times, and clear CTAs." },
  { title: "Transparency first.", desc: "Fixed pricing, honest timelines, clear communication. You always know where your project stands." },
  { title: "Results over aesthetics.", desc: "Beautiful sites that don't convert are expensive art. We design for both — looks great, works hard." },
  { title: "Long-term partnership.", desc: "We're not a one-and-done agency. Our maintenance plans keep us invested in your success after launch." },
];

const stats = [
  { num: "50+",  label: "Projects delivered" },
  { num: "3 wk", label: "Avg. delivery time" },
  { num: "98%",  label: "Client satisfaction" },
  { num: "US",   label: "Primary market focus" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-card pt-20 pb-16 px-6 border-b border-line">
        <div className="max-w-350 mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Breadcrumb crumbs={[{ label: "About" }]} />
          <p className="eyebrow mb-3">About</p>
            <h1 className="display-xl text-title mb-6">We build the web for ambitious businesses.</h1>
            <p className="text-[18px] leading-7 text-prose mb-4">
              {SITE.brandName} is a web design and development agency. We help US businesses — from solo founders to established companies — build the web presence they deserve.
            </p>
            <p className="text-[16px] leading-7 text-prose">
              We started because we saw too many great businesses held back by bad websites. We fix that — with fast delivery, honest pricing, and work that actually drives growth.
            </p>
          </div>
          <div className="bg-surface rounded-xl p-8 shadow-card grid grid-cols-2 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="display-md text-title">{s.num}</p>
                <p className="text-[13px] text-faint mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 px-6">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-title mb-12 text-center">What we stand for.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="display-sm text-title mb-2">{v.title}</h3>
                <p className="text-[14px] leading-6 text-prose">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-invert py-20 px-6 text-center">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-on-invert mb-4">Let&apos;s work together.</h2>
          <p className="text-[18px] text-[#888] mb-8">Tell us about your project and we&apos;ll be in touch within 24 hours.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="h-12 px-8 inline-flex items-center rounded-full bg-white text-[#171717] text-[16px] font-medium hover:bg-[#f0f0f0] transition-colors">
              Get a quote
            </Link>
            <Link href="/portfolio" className="h-12 px-8 inline-flex items-center rounded-full border border-[#333] text-on-invert text-[16px] font-medium hover:border-[#666] transition-colors">
              See our work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
