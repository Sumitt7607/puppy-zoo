import { SectionTab } from "./SectionTab";
import { Search, Video, FileCheck2, Home, Sparkles } from "lucide-react";

const steps = [
  {
    n: "01",
    Icon: Search,
    title: "Discover & Match",
    text: "Explore our curated breed collection or consult with our pet advisors for personalized guidance.",
  },
  {
    n: "02",
    Icon: Video,
    title: "Live Video Playdate",
    text: "Meet your prospective puppy and their parents on a live video call to observe energy and temperament.",
  },
  {
    n: "03",
    Icon: FileCheck2,
    title: "Health & Document Prep",
    text: "Comprehensive 30-point pediatric veterinary screening, microchipping, and KCI certificate processing.",
  },
  {
    n: "04",
    Icon: Home,
    title: "Doorstep Handover",
    text: "Chaperoned climate-controlled safe travel to your home with a luxury starter pamper kit and lifetime support.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 scroll-mt-20">
      <SectionTab subtitle="A transparent, hassle-free 4-step process to buy your puppy online with total security and zero advance fraud.">
        How To Buy Your Puppy Online
      </SectionTab>

      <div className="mx-auto mt-12 grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div
            key={s.n}
            className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-black text-primary/30 group-hover:text-primary transition-colors">
                  {s.n}
                </span>
                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <s.Icon className="size-5.5" />
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-secondary pt-3 border-t border-border/50">
              <Sparkles className="size-3.5" /> Step {s.n} Protocol
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
