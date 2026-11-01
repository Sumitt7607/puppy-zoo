import { Star, Quote, Sparkles } from "lucide-react";
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
    location: "New Delhi",
    breed: "Shih Tzu Puppy",
    text: "Welcoming our Shih Tzu through Puppy Sale Point was an absolute joy. The live video call made us confident, and he arrived healthy, calm, and with his complete health passport and luxury welcome pamper kit!",
    photo: customer1,
    rating: 5,
  },
  {
    name: "Rohan & Nidhi",
    location: "Gurgaon",
    breed: "Chow Chow",
    text: "The customer service is unmatched. From our initial WhatsApp chat to the chaperoned home delivery, every detail was handled with genuine care and veterinary professionalism.",
    photo: customer2,
    rating: 5,
  },
  {
    name: "Suresh & Family",
    location: "Bengaluru",
    breed: "Labrador Retriever",
    text: "Both our Labrador pups arrived energetic, microchipped, and vaccinated. The complimentary first vet telehealth call gave us instant peace of mind. Highly recommended!",
    photo: customer3,
    rating: 5,
  },
  {
    name: "Ankit & Riya",
    location: "Mumbai",
    breed: "American Bully",
    text: "Our American Bully is healthy, beautifully socialized, and so affectionate. Puppy Sale Point's parenting team still checks in on his nutrition and milestones every month.",
    photo: customer4,
    rating: 5,
  },
  {
    name: "Rahul & Smita",
    location: "Pune",
    breed: "Toy Poodle",
    text: "Flawless buying experience. Our Toy Poodle arrived in a climate-controlled crate right to our doorstep. She is fluffy, playful, and already potty trained!",
    photo: customer5,
    rating: 5,
  },
  {
    name: "The Sharma Family",
    location: "Hyderabad",
    breed: "Golden Retriever",
    text: "A truly heartwarming experience for our entire family. Our kids adore our Golden Retriever, and the ongoing support from their behaviorist has made training so easy.",
    photo: customer6,
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-navy py-16 scroll-mt-20">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 size-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 size-96 rounded-full bg-secondary/15 blur-3xl" />
      </div>

      <div className="relative">
        <div className="text-center px-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-sunny shadow-xs">
            <Sparkles className="size-3.5" />
            <span>Parent Love & Stories</span>
          </div>
          <h2 className="mt-3 font-display text-2xl sm:text-4xl font-extrabold text-navy-foreground">
            What Happy Pet Parents Say
          </h2>
          <p className="mt-2 text-sm font-medium text-navy-foreground/75">
            Real families, real puppies, lifelong companionship across India 🐾
          </p>
        </div>

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
                  alt={`${r.name} with their ${r.breed} from Puppy Sale Point`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Stars on the photo */}
                <div className="absolute bottom-3 left-4 flex gap-1">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-sunny text-sunny drop-shadow" />
                  ))}
                </div>
                {/* Breed badge */}
                <span className="absolute top-3 right-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-bold text-primary-foreground shadow">
                  {r.breed}
                </span>
              </div>

              {/* Review card body */}
              <div className="p-6">
                <Quote className="size-7 text-primary/40 mb-2" />
                <blockquote className="text-sm leading-relaxed text-navy-foreground/80">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-2">
                  <div className="h-px flex-1 bg-white/10" />
                  <div className="text-right">
                    <p className="font-display text-sm font-bold text-navy-foreground">
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
            <p className="font-display text-3xl font-extrabold text-sunny">10,000+</p>
            <p className="text-xs font-bold uppercase tracking-wide text-navy-foreground/60">Happy Companions</p>
          </div>
          <div className="hidden h-10 w-px bg-white/20 sm:block" />
          <div className="text-center">
            <p className="font-display text-3xl font-extrabold text-sunny">4.95★</p>
            <p className="text-xs font-bold uppercase tracking-wide text-navy-foreground/60">Average Rating</p>
          </div>
          <div className="hidden h-10 w-px bg-white/20 sm:block" />
          <div className="text-center">
            <p className="font-display text-3xl font-extrabold text-sunny">100%</p>
            <p className="text-xs font-bold uppercase tracking-wide text-navy-foreground/60">Health Assurance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
