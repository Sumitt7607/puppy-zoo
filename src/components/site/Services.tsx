import { Scissors, Truck, Bone, GraduationCap, ShieldCheck, HeartPulse } from "lucide-react";
import { SectionTab } from "./SectionTab";

const services = [
  { Icon: Scissors, title: "Grooming at Home", text: "Certified groomers visit you with all supplies." },
  { Icon: Truck, title: "Pet Relocation", text: "Safe, IATA-compliant travel across India." },
  { Icon: Bone, title: "Food & Accessories", text: "Curated nutrition kits for every breed and age." },
  { Icon: GraduationCap, title: "Puppy Training", text: "Basic obedience and potty training plans." },
  { Icon: ShieldCheck, title: "Pet Insurance", text: "Coverage partners for accidents and illness." },
  { Icon: HeartPulse, title: "Vet Consultation", text: "Free first online vet call with every pet." },
];

export function Services() {
  return (
    <section id="support" className="bg-cream py-14">
      <SectionTab>Our Services</SectionTab>
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ Icon, title, text }) => (
          <div
            key={title}
            className="flex gap-4 rounded-xl border-b-4 border-primary bg-card p-6 shadow-card"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-teal-soft">
              <Icon className="size-6 text-secondary" />
            </span>
            <div>
              <h3 className="text-xl">{title}</h3>
              <p className="mt-1 text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
