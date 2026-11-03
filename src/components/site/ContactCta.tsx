import { Phone, MessageCircle, Mail, Sparkles, Video } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/data/contact";

export function ContactCta() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Puppy Sale Shop! I'm interested in finding my ideal puppy companion. Could you help me with available breeds and pricing?"
  )}`;

  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-16 text-navy-foreground scroll-mt-20">
      {/* Subtle organic background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/4 size-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 size-80 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-sunny shadow-xs mb-4">
          <Sparkles className="size-3.5" />
          <span>Personalized Matchmaking Service</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight leading-tight">
          Ready to Welcome Your <span className="text-sunny italic">Soul Companion?</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-navy-foreground/80 leading-relaxed font-normal">
          Connect directly with a Puppy Sale Shop advisor today. We will match you with a healthy,
          ethically hand-raised puppy companion, schedule your live video playdate, and coordinate white-glove doorstep delivery.
        </p>

        <div className="mt-8 flex flex-wrap justify-center items-center gap-3.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 font-display text-sm sm:text-base font-bold text-primary-foreground shadow-lg transition-transform hover:scale-103 active:scale-97"
          >
            <Video className="size-5" /> Book Live Playdate
          </a>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-6 py-3.5 font-display text-sm sm:text-base font-bold text-navy-foreground shadow-sm backdrop-blur-md transition-all hover:bg-white/20 hover:scale-102 active:scale-98"
          >
            <Phone className="size-4.5 text-sunny" /> Call {PHONE_NUMBER}
          </a>

          <a
            href="mailto:support@puppiesforsale.shop"
            className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-display text-sm sm:text-base font-semibold text-navy-foreground/90 transition-colors hover:bg-white/10"
          >
            <Mail className="size-4.5" /> Email Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
