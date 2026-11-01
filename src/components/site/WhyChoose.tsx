import { Syringe, HeartHandshake, Home, BadgeCheck, Headset, Stethoscope, Sparkles } from "lucide-react";
import { SectionTab } from "./SectionTab";

const items = [
  {
    Icon: Stethoscope,
    title: "30-Point Pediatric Screening",
    text: "Every puppy completes a rigorous veterinary evaluation covering cardiopulmonary, orthopedic, ocular, and dental health prior to travel.",
    badge: "Clinical Assurance",
  },
  {
    Icon: HeartHandshake,
    title: "Ethical & Cage-Free Nurseries",
    text: "Hand-raised in loving home environments with early sensory socialization, human touch, and zero commercial confinement.",
    badge: "Animal Welfare",
  },
  {
    Icon: Home,
    title: "Chaperoned Doorstep Travel",
    text: "Stress-free, climate-controlled flight or private road escort across 150+ Indian cities with a dedicated trained handler.",
    badge: "Pan-India Travel",
  },
  {
    Icon: BadgeCheck,
    title: "Verified KCI Lineage & Chip",
    text: "Official Kennel Club of India registration, certified pedigree documentation, and pre-implanted ISO microchip.",
    badge: "Purebred Authenticity",
  },
  {
    Icon: Headset,
    title: "Lifetime Parenting Support",
    text: "Direct on-demand WhatsApp access to canine nutritionists and certified behaviorists for teething, potty habits, and growth stages.",
    badge: "Lifelong Guidance",
  },
  {
    Icon: Syringe,
    title: "Complete Medical Vaccination",
    text: "Age-appropriate deworming, core vaccination records, and a formal written health guarantee with complimentary vet telehealth.",
    badge: "Preventive Care",
  },
];

export function WhyChoose() {
  return (
    <section id="why-choose" className="bg-cream/60 py-16 scroll-mt-20 border-y border-border">
      <SectionTab subtitle="Thoughtful ethical breeding, luxury puppy pampering, certified genetics, and lifelong parenting support.">
        The Boutique Standard
      </SectionTab>

      <div className="mx-auto mt-12 grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ Icon, title, text, badge }) => (
          <div
            key={title}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-7" strokeWidth={1.75} />
                </span>
                <span className="rounded-full bg-secondary/10 px-3 py-1 text-[11px] font-bold text-secondary uppercase tracking-wider">
                  {badge}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 pt-4 border-t border-border/60 text-xs font-bold text-primary">
              <Sparkles className="size-3.5" />
              <span>Certified Standard</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
