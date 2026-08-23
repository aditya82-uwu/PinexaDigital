import type { Metadata } from "next";
import { Mail, MessageCircle, Clock, Check } from "lucide-react";
import { SITE, pageMetadata } from "@/lib/site-config";
import ContactForm from "./ContactForm";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Eyebrow from "@/components/ui/Eyebrow";
import DottedWaveBackground from "@/components/ui/DottedWaveBackground";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us – Get a Free Quote",
  description: `Get in touch with ${SITE.brandName}. Tell us about your project and we'll respond within 24 hours with a free, no-obligation quote.`,
  path: "/contact",
});

const info = [
  { icon: Mail,          label: "Email",         value: SITE.emailSales,  href: `mailto:${SITE.emailSales}` },
  { icon: MessageCircle, label: "WhatsApp",      value: SITE.phone,        href: `https://wa.me/${SITE.phone.replace(/[^\d]/g, "")}` },
  { icon: Clock,         label: "Response time", value: "Within 24 hours, Mon–Sat", href: null },
];

const trust = [
  "Fixed pricing, so you know your total cost before we start",
  "2–3 week delivery for most projects",
  "30-day post-launch support at no extra charge",
];

export default function ContactPage() {
  return (
    <section className="relative bg-contrast min-h-[80vh] py-20 px-6 overflow-hidden">
      <DottedWaveBackground />
      <div className="relative max-w-350 mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div className="pt-4">
          <Breadcrumb crumbs={[{ label: "Contact" }]} />
          <Eyebrow tone="on-contrast" className="mb-3">Contact</Eyebrow>
          <h1 className="display-xl text-on-contrast mb-5">Let&apos;s build something great.</h1>
          <p className="text-[18px] leading-7 text-on-contrast-faint mb-8">
            Tell us about your project. We respond to every inquiry within 24 hours.
          </p>

          <ul className="flex flex-col gap-3 mb-10">
            {trust.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-[14px] leading-6 text-on-contrast-faint">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-6">
            {info.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-border-contrast flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={16} className="text-on-contrast-faint" />
                </div>
                <div>
                  <p className="eyebrow mb-1 text-on-contrast-faint">{label}</p>
                  {href
                    ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-[15px] text-emerald-400 hover:underline"
                      >
                        {value}
                      </a>
                    )
                    : <p className="text-[15px] text-on-contrast-faint">{value}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — shown first on mobile so the form doesn't require scrolling past the trust/contact info */}
        <div className="order-first md:order-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
