import { Phone, MessageCircle, Mail } from "lucide-react";

export function ContactCta() {
  return (
    <section id="contact" className="bg-navy py-14 text-navy-foreground scroll-mt-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold">Ready to meet your perfect puppy?</h2>
        <p className="mx-auto mt-3 max-w-xl opacity-90">
          Talk to a Puppy ZOO pet advisor today — we will match you with a healthy, ethically bred
          puppy companion and handle everything up to your doorstep.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+919310025055"
            className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-lg font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            <Phone className="size-5" /> Call (+91 93100 25055)
          </a>
          <a
            href="https://wa.me/919310025055"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-card px-6 py-3 font-display text-lg font-bold text-primary transition-transform hover:scale-105"
          >
            <MessageCircle className="size-5 text-emerald-600" /> WhatsApp Us
          </a>
          <a
            href="mailto:hello@puppyzoo.com"
            className="flex items-center gap-2 rounded-lg border border-navy-foreground/40 px-6 py-3 font-display text-lg font-bold transition-colors hover:bg-white/10"
          >
            <Mail className="size-5" /> Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

