import type { Metadata } from "next";
import { SITE, siteUrl } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE.brandName}. Understand your rights and obligations when working with us.`,
  alternates: { canonical: siteUrl("/terms") },
  robots: { index: false, follow: false },
};

const lastUpdated = "June 29, 2026";

const sections = [
  {
    title: "1. Services",
    body: [
      "PinexaDigital provides web design, web development, SEO, e-commerce development, and website maintenance services to clients. The specific scope of services, deliverables, timeline, and pricing for each project are agreed upon in a written proposal or statement of work (SOW) before work begins.",
      "We reserve the right to decline any project at our discretion. Acceptance of payment does not constitute a guarantee to complete work if circumstances arise that make the project infeasible or incompatible with our working standards.",
    ],
  },
  {
    title: "2. Payment terms",
    body: [
      "Fixed-price projects (web design, e-commerce development) require a 50% deposit before work begins, with the remaining 50% due upon project completion before final delivery. For larger Enterprise projects, milestone-based payment schedules may be agreed upon in the SOW.",
      "Monthly retainer services (SEO, maintenance) are billed at the start of each billing cycle. Services will be suspended if payment is not received within 14 days of the billing date.",
      "All prices are in US dollars. Invoices are due upon receipt unless otherwise specified in the proposal.",
    ],
  },
  {
    title: "3. Revisions",
    body: [
      "The number of revision rounds included in each package is specified in the proposal. The Starter package includes 1 round of design revisions; the Growth package includes 3 rounds. A revision round is defined as a single consolidated set of feedback, not multiple sequential requests.",
      "Revisions requested after the included rounds, or changes to the original agreed scope, will be billed at our standard hourly rate or quoted separately.",
    ],
  },
  {
    title: "4. Client responsibilities",
    body: [
      "You agree to provide all required materials (brand assets, copy, images, credentials) within the timeframes agreed in the project schedule. Delays caused by late delivery of required materials may extend the project timeline; we are not responsible for deadline slippage caused by client delays.",
      "You confirm that all materials you provide — including text, images, logos, and other content — are either owned by you or licensed for use. You indemnify PinexaDigital against any claims arising from intellectual property infringement in materials you provide.",
    ],
  },
  {
    title: "5. Intellectual property",
    body: [
      "Upon receipt of final payment, you receive full ownership of all custom work created for your project — design files, code, and content. You are free to modify, transfer, or use the deliverables in any way you choose.",
      "We retain the right to display completed work in our portfolio and use it for promotional purposes (website, case studies, social media) unless you request in writing that we do not.",
      "Third-party components used in your project (open-source libraries, licensed fonts, stock imagery) are subject to their respective licenses. We will notify you of any third-party components with significant licensing restrictions.",
    ],
  },
  {
    title: "6. Post-launch support",
    body: [
      "All fixed-price projects include 30 days of complimentary bug fixing after launch. A 'bug' is defined as a functional error in work we delivered — not new feature requests, design changes, or content updates.",
      "After the 30-day support period, ongoing support and changes are provided through our monthly maintenance plans or quoted separately.",
    ],
  },
  {
    title: "7. Limitation of liability",
    body: [
      "Our total liability for any claim arising from services provided is limited to the total fees paid by you for the specific project or service giving rise to the claim.",
      "We are not liable for indirect, incidental, or consequential damages, including lost profits or business interruption, even if we have been advised of the possibility of such damages.",
      "We are not responsible for third-party service outages (hosting providers, domain registrars, payment processors, or analytics platforms) that affect your website.",
    ],
  },
  {
    title: "8. Warranties",
    body: [
      "We warrant that we will perform services with reasonable skill and care, and that deliverables will conform to the specifications agreed in the project proposal.",
      "We do not warrant that your website will achieve specific search engine rankings, conversion rates, or revenue outcomes. SEO and conversion performance depend on many factors outside our control.",
    ],
  },
  {
    title: "9. Termination",
    body: [
      "Either party may terminate a project with written notice. If you terminate a project after work has begun, you are responsible for payment of all work completed up to the termination date, plus a kill fee of 25% of the remaining project value.",
      "Monthly retainer services may be cancelled with 30 days written notice. No refunds are provided for the current billing period.",
    ],
  },
  {
    title: "10. Governing law",
    body: [
      "These terms are governed by applicable law. Any disputes arising from services provided will first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes will be submitted to binding arbitration before resorting to litigation.",
    ],
  },
  {
    title: "11. Changes to these terms",
    body: [
      "We may update these terms from time to time. Updates will be posted on this page with a revised 'Last updated' date. Continued use of our services after a change constitutes acceptance of the updated terms.",
    ],
  },
  {
    title: "12. Contact",
    body: [
      "For questions about these terms, contact us at " + SITE.emailContact + ".",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="bg-surface min-h-[80vh] py-20 px-6">
      <div className="max-w-[780px] mx-auto">
        <Breadcrumb crumbs={[{ label: "Terms of Service" }]} />
        <p className="eyebrow mb-3">Legal</p>
        <h1 className="display-xl text-title mb-3">Terms of Service</h1>
        <p className="text-[14px] text-faint mb-12">Last updated: {lastUpdated}</p>

        <p className="text-[16px] leading-7 text-prose mb-10">
          These Terms of Service govern your use of services provided by {SITE.brandName}. By engaging our services or making a payment, you agree to these terms. Please read them before starting a project with us.
        </p>

        <div className="space-y-10">
          {sections.map(({ title, body }) => (
            <div key={title}>
              <h2 className="text-[18px] font-bold text-title mb-4">{title}</h2>
              <div className="space-y-3">
                {body.map((para, i) => (
                  <p key={i} className="text-[15px] leading-7 text-prose">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
