import { Dog, ShieldCheck, Star, Stethoscope } from "lucide-react";

const stats = [
  {
    Icon: Dog,
    value: "35,000+",
    label: "Happy Puppies Placed",
    color: "text-primary",
  },
  {
    Icon: ShieldCheck,
    value: "100%",
    label: "KCI & Vet Certified",
    color: "text-secondary",
  },
  {
    Icon: Star,
    value: "4.9 / 5.0",
    label: "Pet Parents Rating",
    color: "text-gold",
  },
  {
    Icon: Stethoscope,
    value: "24 / 7",
    label: "Free Veterinary Support",
    color: "text-emerald-500",
  },
];

export function TrustStats() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-2 gap-4 rounded-3xl border border-border/80 bg-card p-6 shadow-card sm:grid-cols-4">
        {stats.map(({ Icon, value, label, color }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center text-center p-3 transition-transform hover:scale-105"
          >
            <span className="mb-2 flex size-12 items-center justify-center rounded-2xl bg-teal-soft/60">
              <Icon className={`size-6 ${color}`} />
            </span>
            <div className="font-display text-2xl font-black text-foreground sm:text-3xl">
              {value}
            </div>
            <div className="mt-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
