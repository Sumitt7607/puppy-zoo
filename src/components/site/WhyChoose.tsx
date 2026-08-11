import { Syringe, HeartHandshake, Home, BadgeCheck, Headset, Stethoscope } from "lucide-react";

const items = [
  {
    Icon: Syringe,
    title: "Vaccinated",
    text: "Up to date vaccinations with latest veterinary standards",
  },
  {
    Icon: HeartHandshake,
    title: "Ethical Breeders",
    text: "Licensed, vetted and committed to animal welfare",
  },
  { Icon: Home, title: "Home Delivery", text: "Pan India delivery options bringing joy to your home" },
  {
    Icon: BadgeCheck,
    title: "Breed Certificate",
    text: "Verified lineage & pedigree with included microchip",
  },
  { Icon: Headset, title: "After Sales Support", text: "Expert Guidance for New Puppy Owners" },
  {
    Icon: Stethoscope,
    title: "Health Checked",
    text: "Thorough health check by certified Veterinarians",
  },
];

export function WhyChoose() {
  return (
    <section id="why-choose" className="bg-teal py-14 scroll-mt-20">
      <div className="flex justify-center">
        <h2 className="section-tab text-lg sm:text-xl">
          W<span className="text-base">HY</span> C<span className="text-base">HOOSE</span>{" "}
          <span className="text-secondary">Puppy</span>{" "}
          <span className="text-primary">ZOO</span>
        </h2>
      </div>
      <div className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ Icon, title, text }) => (
          <div key={title} className="overflow-hidden rounded-lg bg-card text-center shadow-card">
            <div className="flex h-44 items-center justify-center">
              <Icon className="size-20 text-foreground" strokeWidth={1.25} />
            </div>
            <h3 className="pb-4 text-2xl text-secondary font-bold">{title}</h3>
            <p className="bg-teal-soft px-5 py-5 text-accent-foreground">{text}</p>
            <div className="h-3 bg-sunny" />
          </div>
        ))}
      </div>
    </section>
  );
}

