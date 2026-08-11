import { Star, Quote } from "lucide-react";
import { SectionTab } from "./SectionTab";
import customer1 from "@/assets/customer-1.jpg";
import customer2 from "@/assets/customer-2.jpg";
import customer3 from "@/assets/customer-3.jpg";
import customer4 from "@/assets/customer-4.jpg";
import customer5 from "@/assets/customer-5.jpg";
import customer6 from "@/assets/customer-6.jpg";

const reviews = [
  {
    name: "Priya S.",
    location: "Delhi",
    breed: "Shih Tzu",
    text: "Got my adorable Shih Tzu puppy from Puppy ZOO and I couldn't be happier! He arrived healthy, vaccinated, and with all KCI papers. The team was so supportive throughout!",
    photo: customer1,
    rating: 5,
  },
  {
    name: "Rohan & Nidhi",
    location: "Gurgaon",
    breed: "Chow Chow",
    text: "We bought a beautiful Chow Chow from Puppy ZOO. The live video call before booking was super helpful. Our pup is the perfect addition to our family!",
    photo: customer2,
    rating: 5,
  },
  {
    name: "Suresh & Family",
    location: "Bengaluru",
    breed: "Labrador (×2)",
    text: "We got two Labrador puppies at once! Both are perfectly healthy and so playful. Delivery was smooth with all documentation. Highly recommend Puppy ZOO!",
    photo: customer3,
    rating: 5,
  },
  {
    name: "Ankit & Riya",
    location: "Mumbai",
    breed: "American Bully",
    text: "Our American Bully pup is everything we hoped for — healthy, energetic, and so well-tempered. The Puppy ZOO team made the whole process very easy.",
    photo: customer4,
    rating: 5,
  },
  {
    name: "Rahul & Smita",
    location: "Pune",
    breed: "Shih Tzu",
    text: "From inquiry to doorstep delivery, the experience was flawless. Our Shih Tzu is the most adorable thing! Puppy ZOO is truly India's best puppy marketplace.",
    photo: customer5,
    rating: 5,
  },
  {
    name: "The Sharma Family",
    location: "Hyderabad",
    breed: "Golden Retriever",
    text: "A complete family experience! Our kids absolutely love our Golden Retriever pup. Thank you Puppy ZOO for bringing so much joy into our home 🐾",
    photo: customer6,
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-navy py-16 scroll-mt-20">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 size-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 size-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative">
        <SectionTab>What Pet Parents Say</SectionTab>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm font-semibold text-navy-foreground/70 px-4">
          Real families, real puppies, real happiness 🐾
        </p>

        <div className="mx-auto mt-12 grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:bg-white/10"
            >
              {/* Full customer photo */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={r.photo}
                  alt={`${r.name} with their ${r.breed} puppy from Puppy ZOO`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                {/* Stars on the photo */}
                <div className="absolute bottom-3 left-4 flex gap-1">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-sunny text-sunny drop-shadow" />
                  ))}
                </div>
                {/* Breed badge */}
                <span className="absolute top-3 right-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-extrabold text-primary-foreground shadow">
                  {r.breed}
                </span>
              </div>

              {/* Review card body */}
              <div className="p-5">
                <Quote className="size-7 text-primary/30 mb-2" />
                <blockquote className="text-sm leading-relaxed text-navy-foreground/80">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-2">
                  <div className="h-px flex-1 bg-white/10" />
                  <div className="text-right">
                    <p className="font-display text-sm font-extrabold text-navy-foreground">
                      {r.name}
                    </p>
                    <p className="text-xs text-navy-foreground/50">{r.location}</p>
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-8 rounded-3xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-sm mx-4">
          <div className="text-center">
            <p className="font-display text-3xl font-extrabold text-sunny">35,000+</p>
            <p className="text-xs font-bold uppercase tracking-wide text-navy-foreground/60">Happy Families</p>
          </div>
          <div className="hidden h-10 w-px bg-white/20 sm:block" />
          <div className="text-center">
            <p className="font-display text-3xl font-extrabold text-sunny">4.9★</p>
            <p className="text-xs font-bold uppercase tracking-wide text-navy-foreground/60">Average Rating</p>
          </div>
          <div className="hidden h-10 w-px bg-white/20 sm:block" />
          <div className="text-center">
            <p className="font-display text-3xl font-extrabold text-sunny">100%</p>
            <p className="text-xs font-bold uppercase tracking-wide text-navy-foreground/60">Verified Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
