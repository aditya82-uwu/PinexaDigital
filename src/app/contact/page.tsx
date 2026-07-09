import type { Metadata } from "next";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { SITE, siteUrl } from "@/lib/site-config";
import ContactForm from "./ContactForm";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote",
  description: `Get in touch with ${SITE.brandName}. Tell us about your project and we'll respond within 24 hours with a free, no-obligation quote.`,
  alternates: { canonical: siteUrl("/contact") },
};

const info = [
  { icon: Mail,          label: "Email",         value: SITE.emailSales,  href: `mailto:${SITE.emailSales}` },
  { icon: MessageCircle, label: "WhatsApp",      value: SITE.phone,        href: `https://wa.me/${SITE.phone.replace(/[^\d]/g, "")}` },
  { icon: Clock,         label: "Response time", value: "Within 24 hours, Mon–Sat", href: null },
];

export default function ContactPage() {
  return (
    <section className="bg-surface min-h-[80vh] py-20 px-6">
      <div className="max-w-350 mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div className="pt-4">
          <Breadcrumb crumbs={[{ label: "Contact" }]} />
          <p className="eyebrow mb-3">Contact</p>
          <h1 className="display-xl text-title mb-5">Let&apos;s build something great.</h1>
          <p className="text-[18px] leading-7 text-prose mb-10">
            Tell us about your project. We respond to every inquiry within 24 hours.
          </p>

          <div className="flex flex-col gap-6">
            {info.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-card border border-line flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={16} className="text-prose" />
                </div>
                <div>
                  <p className="eyebrow mb-1">{label}</p>
                  {href
                    ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-[15px] text-link hover:underline"
                      >
                        {value}
                      </a>
                    )
                    : <p className="text-[15px] text-prose">{value}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <ContactForm />
      </div>
    </section>
  );
}
