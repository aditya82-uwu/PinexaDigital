import { Mail } from "lucide-react";
import { SITE } from "@/lib/site-config";

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.58 1.4 5.06L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.02h-.01a8.1 8.1 0 0 1-4.14-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.1 8.1 0 0 1-1.25-4.33c0-4.48 3.65-8.13 8.14-8.13 2.17 0 4.21.85 5.75 2.39a8.07 8.07 0 0 1 2.38 5.75c0 4.49-3.65 8.13-8.13 8.13Zm4.46-6.1c-.24-.12-1.44-.71-1.67-.8-.22-.08-.38-.12-.55.12-.16.24-.63.8-.77.96-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

const whatsappNumber = SITE.phone.replace(/[^\d]/g, "");

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      <a
        href={`mailto:${SITE.emailSales}`}
        aria-label={`Email us at ${SITE.emailSales}`}
        title={`Email us at ${SITE.emailSales}`}
        className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-card border border-line text-title shadow-card-lg transition-transform hover:scale-105 active:scale-95"
      >
        <Mail size={22} />
      </a>
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
        className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card-lg transition-transform hover:scale-105 hover:bg-[#20bd5a] active:scale-95"
      >
        <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </div>
  );
}
