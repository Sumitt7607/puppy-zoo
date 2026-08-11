import { Dog, Calendar, Phone, MessageCircle } from "lucide-react";
import { SectionTab } from "./SectionTab";
import pet1 from "@/assets/pet-1.jpg";
import pet2 from "@/assets/pet-2.jpg";
import pet3 from "@/assets/pet-3.jpg";
import pet4 from "@/assets/pet-4.jpg";
import pet5 from "@/assets/pet-5.jpg";
import pet6 from "@/assets/pet-6.jpg";

const pets = [
  { name: "Eden", breed: "Shih tzu", age: "8 Weeks", tier: "PLATINUM", img: pet1 },
  { name: "Xenna", breed: "Cavapoo", age: "8 weeks", tier: "PLATINUM", img: pet2 },
  { name: "Abby", breed: "English mastiff", age: "8 weeks", tier: "GOLD", img: pet3 },
  { name: "Blue", breed: "Siberian husky", age: "9 weeks", tier: "PLATINUM", img: pet4 },
  { name: "Simba", breed: "Golden retriever", age: "10 weeks", tier: "GOLD", img: pet5 },
  { name: "Mia", breed: "Persian cat", age: "8 weeks", tier: "GOLD", img: pet6 },
];

export function AvailablePets() {
  return (
    <section id="pets" className="py-14">
      <SectionTab>Available Pets</SectionTab>
      <div className="mx-auto mt-12 grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {pets.map((pet) => (
          <article
            key={pet.name}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-card"
          >
            <div className="relative">
              <img
                src={pet.img}
                alt={`${pet.name}, a ${pet.breed} puppy available at Puppiezoo`}
                width={768}
                height={768}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <span className="absolute top-3 left-3 font-display text-sm font-bold text-primary-foreground drop-shadow">
                PUPPIEZOO
              </span>
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
                <button className="rounded-md bg-navy/70 px-3 py-2 text-xs font-bold tracking-wide text-navy-foreground">
                  VIEW PRICE
                </button>
                <span
                  className={
                    "rounded-md px-3 py-2 text-xs font-bold tracking-wide " +
                    (pet.tier === "GOLD"
                      ? "bg-gold text-navy"
                      : "bg-primary text-primary-foreground")
                  }
                >
                  {pet.tier}
                </span>
              </div>
            </div>
            <div className="space-y-3 p-5">
              <h3 className="font-display text-2xl">{pet.name}</h3>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Dog className="size-5" /> {pet.breed}
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="size-5" /> {pet.age}
              </p>
              <div className="flex gap-3 pt-1">
                <a
                  href="tel:+911234567890"
                  className="flex flex-1 items-center justify-center gap-2 rounded-md border border-border py-2 font-semibold hover:border-primary hover:text-primary"
                >
                  <Phone className="size-4" /> Call
                </a>
                <a
                  href="#contact"
                  className="flex flex-1 items-center justify-center gap-2 rounded-md border border-border py-2 font-semibold hover:border-primary hover:text-primary"
                >
                  <MessageCircle className="size-4" /> Whatsapp
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
