import { Phone, Sparkles, MessageCircle } from "lucide-react";
import { useState } from "react";
import { CONTACT_CONFIG } from "@/data/contact";

const WA_LOGO =
  "https://static.vecteezy.com/system/resources/previews/024/398/617/original/whatsapp-logo-icon-isolated-on-transparent-background-free-png.png";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Hi Puppy ZOO, I want to inquire about puppy availability, pricing & live video calls!"
  )}`;

  return (
    <>
      {/* Call Button — fixed bottom-LEFT */}
      <a
        href={CONTACT_CONFIG.telLink}
        aria-label="Call Puppy ZOO"
        className="fixed bottom-6 left-6 z-50 flex size-16 items-center justify-center rounded-full text-white shadow-xl transition-transform hover:scale-110 active:scale-95"
        style={{
          background: "oklch(0.65 0.22 40)",
          boxShadow: "0 0 20px oklch(0.65 0.22 40 / 0.55)",
        }}
      >
        <Phone className="size-7" />
      </a>

      {/* WhatsApp Button — fixed bottom-RIGHT */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Popover Bubble */}
        {isOpen && (
          <div className="mb-4 w-72 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl animate-in fade-in slide-in-from-bottom-4">
            <div className="bg-navy p-4 text-navy-foreground">
              <div className="flex items-center gap-2 font-display text-base font-bold">
                <Sparkles className="size-4 text-sunny" /> Puppy ZOO Advisor
              </div>
              <p className="mt-1 text-xs opacity-80">
                Online Now • Ask us for live videos & prices!
              </p>
            </div>
            <div className="p-4 bg-background space-y-2">
              <p className="text-xs font-semibold text-muted-foreground">
                Looking for a puppy? Chat directly with our pet expert on WhatsApp.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 font-display text-sm font-bold text-white shadow-md transition-transform hover:scale-105"
              >
                <MessageCircle className="size-4" /> Start WhatsApp Chat
              </a>
              <a
                href={CONTACT_CONFIG.telLink}
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-primary/30 bg-primary/10 py-2.5 font-display text-sm font-bold text-primary shadow-sm transition-transform hover:scale-105"
              >
                <Phone className="size-4" /> Call {CONTACT_CONFIG.formattedNumber}
              </a>
            </div>
          </div>
        )}

        {/* WhatsApp floating button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Chat on WhatsApp"
          className="flex size-16 items-center justify-center rounded-full bg-transparent p-0 shadow-xl transition-transform hover:scale-110 active:scale-95"
          style={{ boxShadow: "0 0 24px rgba(37,211,102,0.5)" }}
        >
          <img
            src={WA_LOGO}
            alt="WhatsApp"
            className="size-16"
            draggable={false}
          />
        </button>
      </div>
    </>
  );
}

