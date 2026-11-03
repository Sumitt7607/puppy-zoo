import { Phone, Sparkles, MessageCircle } from "lucide-react";
import { useState } from "react";
import { CONTACT_CONFIG } from "@/data/contact";

const WA_LOGO =
  "https://static.vecteezy.com/system/resources/previews/024/398/617/original/whatsapp-logo-icon-isolated-on-transparent-background-free-png.png";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Hi Puppy Sale Shop, I would like to inquire about puppy availability, live video playdates, and pricing!"
  )}`;

  return (
    <>
      {/* Call Button — fixed bottom-LEFT */}
      <a
        href={CONTACT_CONFIG.telLink}
        aria-label="Call Puppy Sale Shop Advisor"
        className="fixed bottom-6 left-6 z-50 flex size-15 items-center justify-center rounded-full text-white shadow-xl transition-transform hover:scale-110 active:scale-95 bg-primary"
        style={{
          boxShadow: "0 8px 25px oklch(0.58 0.16 42 / 0.45)",
        }}
      >
        <Phone className="size-6.5" />
      </a>

      {/* WhatsApp Button — fixed bottom-RIGHT */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Popover Bubble */}
        {isOpen && (
          <div className="mb-4 w-76 overflow-hidden rounded-3xl border border-border bg-card shadow-2xl animate-in fade-in slide-in-from-bottom-4">
            <div className="bg-navy p-4 text-navy-foreground">
              <div className="flex items-center gap-2 font-display text-sm font-bold">
                <Sparkles className="size-4 text-sunny" /> Puppy Sale Shop Advisor
              </div>
              <p className="mt-1 text-xs text-navy-foreground/80">
                Online Now • Live Video Playdates & Photos
              </p>
            </div>
            <div className="p-4 bg-background space-y-2.5">
              <p className="text-xs font-medium text-muted-foreground leading-relaxed">
                Looking for your ideal puppy? Speak directly with our pet advisors on WhatsApp.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 font-display text-xs font-bold text-white shadow-sm transition-transform hover:scale-102"
              >
                <MessageCircle className="size-4" /> Start WhatsApp Chat
              </a>
              <a
                href={CONTACT_CONFIG.telLink}
                className="flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 py-2.5 font-display text-xs font-bold text-primary shadow-xs transition-transform hover:scale-102"
              >
                <Phone className="size-3.5" /> Call {CONTACT_CONFIG.formattedNumber}
              </a>
            </div>
          </div>
        )}

        {/* WhatsApp floating button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Chat on WhatsApp with Puppy Sale Shop"
          className="flex size-15 items-center justify-center rounded-full bg-transparent p-0 shadow-xl transition-transform hover:scale-110 active:scale-95"
          style={{ boxShadow: "0 8px 25px rgba(37,211,102,0.45)" }}
        >
          <img
            src={WA_LOGO}
            alt="WhatsApp"
            className="size-15"
          />
        </button>
      </div>
    </>
  );
}
