import { Dog, ShieldCheck, Star, Stethoscope } from "lucide-react";

const stats = [
  {
    Icon: Dog,
    value: "10,000+",
    title: "Happy Puppies Placed",
    subtitle: "In Loving Homes Pan-India",
    accent: "text-primary",
    bg: "bg-primary/10",
  },
  {
    Icon: ShieldCheck,
    value: "100%",
    title: "Certified Pedigree",
    subtitle: "KCI Lineage & Microchipped",
    accent: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    Icon: Star,
    value: "4.95 / 5",
    title: "Parent Satisfaction",
    subtitle: "Over 8,500+ Verified Reviews",
    accent: "text-amber-600",
    bg: "bg-amber-500/10",
  },
  {
    Icon: Stethoscope,
    value: "24 / 7",
    title: "Wellness & Vet Care",
    subtitle: "Lifetime Pediatric Vet Support",
    accent: "text-secondary",
    bg: "bg-secondary/10",
  },
];

export function TrustStats() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-2 gap-4 rounded-3xl border border-border bg-card p-6 shadow-card sm:grid-cols-4">
        {stats.map(({ Icon, value, title, subtitle, accent, bg }) => (
          <div
            key={title}
            className="flex flex-col items-center justify-center text-center p-3 transition-transform hover:scale-102"
          >
            <span className={`mb-3 flex size-12 items-center justify-center rounded-2xl ${bg}`}>
              <Icon className={`size-6 ${accent}`} />
            </span>
            <div className="font-display text-2xl font-black text-foreground sm:text-3xl tracking-tight">
              {value}
            </div>
            <div className="mt-1 font-display text-sm font-bold text-foreground">
              {title}
            </div>
            <div className="text-[11px] font-medium text-muted-foreground mt-0.5">
              {subtitle}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
