import type { Metadata } from "next";
import { SITE, siteUrl } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.brandName}. Learn how we collect, use, and protect your information.`,
  alternates: { canonical: siteUrl("/privacy") },
  robots: { index: false, follow: false },
};

const lastUpdated = "June 29, 2026";

const sections = [
  {
    title: "1. Information we collect",
    body: [
      "When you submit the contact form on our website, we collect the information you provide: your name, email address, and the message you send. Additional fields such as company name, website URL, service interest, and budget range are optional and collected only if you choose to fill them in.",
      "We do not collect payment information through our website. Payments are processed through secure third-party payment processors.",
      "We may collect standard web analytics data through Google Analytics 4, including pages visited, time spent on site, browser type, device type, and approximate geographic location (country/city level). This data is aggregated and does not personally identify you.",
    ],
  },
  {
    title: "2. How we use your information",
    body: [
      "Contact form submissions are used solely to respond to your inquiry. We will reply to your message, discuss your project, and send project-related communications. We do not add contact form submitters to marketing lists without explicit consent.",
      "Analytics data is used to understand how visitors use our site — which pages are most helpful, where visitors come from, and how to improve the experience — and is not used to identify individual visitors.",
    ],
  },
  {
    title: "3. How we share your information",
    body: [
      "We do not sell, rent, or trade your personal information to third parties.",
      "We may share information with service providers who help us operate our business — for example, an email service to deliver your message to our team, or an analytics provider to process anonymised site usage data. These providers are contractually required to handle your information only as directed by us and in accordance with applicable privacy laws.",
      "We will disclose information if required to do so by law or in response to valid legal process.",
    ],
  },
  {
    title: "4. Cookies",
    body: [
      "Our website uses cookies to support analytics (Google Analytics 4) and to remember your preferences (such as dark/light mode). We do not use cookies for advertising, retargeting, or cross-site tracking.",
      "You can disable cookies in your browser settings. Disabling cookies will not affect your ability to use this website, though analytics data will not be collected.",
    ],
  },
  {
    title: "5. Data retention",
    body: [
      "Contact form submissions are retained in our email system for as long as reasonably necessary to manage client relationships and project records, typically 3 years from last contact.",
      "Analytics data is retained in accordance with Google Analytics' default retention settings (26 months) and is anonymised.",
    ],
  },
  {
    title: "6. Your rights",
    body: [
      "You have the right to request access to the personal information we hold about you, request correction of inaccurate information, or request deletion of your information. To exercise any of these rights, contact us at " + SITE.emailContact + ".",
      "California residents: Under CCPA, you have the right to know what personal information we collect and how it is used, the right to request deletion, and the right to opt out of the sale of personal information. We do not sell personal information.",
      "We will respond to verified requests within 30 days.",
    ],
  },
  {
    title: "7. CAN-SPAM compliance",
    body: [
      "Any commercial email communications we send will clearly identify the sender, include a physical address, and provide a clear opt-out mechanism. We honour all opt-out requests promptly.",
    ],
  },
  {
    title: "8. External links",
    body: [
      "Our website may contain links to third-party websites. This privacy policy applies only to our website. We are not responsible for the privacy practices of external sites and encourage you to review their privacy policies.",
    ],
  },
  {
    title: "9. Changes to this policy",
    body: [
      "We may update this privacy policy from time to time. When we make significant changes, we will update the 'Last updated' date at the top of this page. Your continued use of our website after any changes constitutes your acceptance of the updated policy.",
    ],
  },
  {
    title: "10. Contact",
    body: [
      "If you have questions about this privacy policy or our data practices, contact us at " + SITE.emailContact + ".",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="bg-surface min-h-[80vh] py-20 px-6">
      <div className="max-w-[780px] mx-auto">
        <Breadcrumb crumbs={[{ label: "Privacy Policy" }]} />
        <p className="eyebrow mb-3">Legal</p>
        <h1 className="display-xl text-title mb-3">Privacy Policy</h1>
        <p className="text-[14px] text-faint mb-12">Last updated: {lastUpdated}</p>

        <p className="text-[16px] leading-7 text-prose mb-10">
          {SITE.brandName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website at pinexadigital.com. This privacy policy explains what information we collect, how we use it, and your rights regarding your information. We keep this simple and honest — no legal jargon beyond what the law requires.
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
