import { Scissors, Truck, Bone, GraduationCap, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";
import { SectionTab } from "./SectionTab";

const services = [
  {
    Icon: ShieldCheck,
    title: "KCI Lineage & Pedigree",
    text: "Every puppy comes with official Kennel Club of India pedigree registration and certified breed authenticity records.",
    badge: "Verified Pedigree",
  },
  {
    Icon: Truck,
    title: "Chaperoned Travel Escort",
    text: "IATA-compliant, temperature-monitored air and private road transport with trained pet attendants across India.",
    badge: "Safe Escort",
  },
  {
    Icon: Bone,
    title: "Bespoke Nutrition & Essentials",
    text: "Custom dietary formulations, age-tailored organic puppy kibble, and breed-matched teething essentials.",
    badge: "Nutrition",
  },
  {
    Icon: GraduationCap,
    title: "Gentle Socialization & Training",
    text: "Positive-reinforcement potty routines, sleep schedule coaching, and joyful early puppy socialization programs.",
    badge: "Behavior",
  },
  {
    Icon: ShieldCheck,
    title: "Comprehensive Wellness Coverage",
    text: "Partnership health assurance plans covering unforeseen accidents, diagnostics, and routine pediatric care.",
    badge: "Protection",
  },
  {
    Icon: HeartPulse,
    title: "24/7 Pediatric Vet Telehealth",
    text: "Complimentary initial telehealth consultation with seasoned veterinary doctors and lifetime WhatsApp advice.",
    badge: "Medical",
  },
];

export function Services() {
  return (
    <section id="support" className="bg-cream/70 py-16 scroll-mt-20 border-t border-border">
      <SectionTab subtitle="Essential puppy care, dedicated health assurance, and lifetime companion support for pet parents.">
        Comprehensive Puppy Care
      </SectionTab>

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ Icon, title, text, badge }) => (
          <div
            key={title}
            className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <Icon className="size-6" />
                </span>
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                  {badge}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-border/50 flex items-center gap-1.5 text-xs font-semibold text-secondary">
              <Sparkles className="size-3" /> Included with Every Puppy
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
