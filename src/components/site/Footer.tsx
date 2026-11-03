import { PawPrint, Heart, Sparkles, Phone, Mail } from "lucide-react";
import { PHONE_NUMBER } from "@/data/contact";

const columns = [
  {
    title: "Curated Breeds",
    links: [
      { label: "All Available Breeds", href: "#breeds" },
      { label: "Gentle Family Dogs", href: "#breeds" },
      { label: "Velvet Toy & Lap Dogs", href: "#breeds" },
      { label: "Devoted Guard Dogs", href: "#breeds" },
    ],
  },
  {
    title: "Popular Breeds",
    links: [
      { label: "Golden Retriever Puppies", href: "#breeds" },
      { label: "Shih Tzu Puppies", href: "#breeds" },
      { label: "Toy Poodle Puppies", href: "#breeds" },
      { label: "Labrador Retriever Puppies", href: "#breeds" },
      { label: "Siberian Husky Puppies", href: "#breeds" },
    ],
  },
  {
    title: "The Standard",
    links: [
      { label: "Why Choose Us", href: "#why-choose" },
      { label: "How To Buy Online", href: "#how-it-works" },
      { label: "Parent Stories", href: "#testimonials" },
      { label: "Live WhatsApp Reviews", href: "#happy-family" },
    ],
  },
  {
    title: "Support & Help",
    links: [
      { label: "Book Live Video Call", href: "#contact" },
      { label: "Frequently Asked Questions", href: "#faq" },
      { label: "Direct Phone Support", href: `tel:${PHONE_NUMBER}` },
      { label: "Ethical Breeding Charter", href: "#why-choose" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-cream/90 border-t border-border py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <a href="/" className="inline-flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
              <PawPrint className="size-5 text-primary" />
            </span>
            <span className="font-display text-2xl font-black tracking-tight text-foreground">
              Puppy <span className="text-primary">Sale Shop</span>
            </span>
          </a>
          <p className="mt-3 text-xs uppercase tracking-widest font-bold text-secondary">
            Trusted Puppy Sale Shop in India
          </p>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-sm">
            India's trusted puppy sale platform connecting loving families with healthy,
            vet-certified purebred puppies, vaccination records, and lifetime parenting guidance.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <Heart className="size-3.5 text-primary fill-primary/20" />
            <span>100% Ethical, Socialized & Cage-Free</span>
          </div>
        </div>

        {columns.map((c) => (
          <div key={c.title}>
            <h3 className="font-display font-bold text-sm tracking-wide text-foreground uppercase">
              {c.title}
            </h3>
            <ul className="mt-3.5 space-y-2.5 text-sm text-muted-foreground">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 mt-12 pt-6 border-t border-border/80 flex flex-col items-center justify-between gap-3 text-center text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Puppy Sale Shop. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <span>KCI Verified Pedigrees</span>
          <span>•</span>
          <span>30-Point Pediatric Clearance</span>
          <span>•</span>
          <span>Pan-India Chaperone</span>
        </div>
      </div>
    </footer>
  );
}
