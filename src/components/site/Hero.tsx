import { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Phone,
  Video,
  MessageCircle,
  Star,
  PawPrint,
  ArrowRight,
} from "lucide-react";
import heroPuppies from "@/assets/hero-puppies.png";
import customer1 from "@/assets/customer-1.jpg";
import customer2 from "@/assets/customer-2.jpg";
import customer3 from "@/assets/customer-3.jpg";
import customer4 from "@/assets/customer-4.jpg";
import { WHATSAPP_NUMBER, PHONE_NUMBER } from "@/data/contact";

interface CarouselSlide {
  id: string;
  breed: string;
  tagline: string;
  image: string;
  badge: string;
  category: string;
  highlights: string[];
}

const carouselSlides: CarouselSlide[] = [
  {
    id: "golden-retriever",
    breed: "Golden Retriever Puppy",
    tagline: "Diwali Super Star • Gentle, Loving & Ultimate Family Companion",
    image: heroPuppies,
    badge: "🪔 Most Loved Diwali Selection",
    category: "Family Companion",
    highlights: ["Champion Bloodline", "Playful & Golden Coat", "30-Point Vet Certified", "Microchip & KCI Included"],
  },
  {
    id: "shih-tzu",
    breed: "Shih Tzu Puppy",
    tagline: "Fluffy Living Diya • Low Shedding & Ideal for Apartments",
    image: "https://wallpapercave.com/wp/wp2126256.jpg",
    badge: "✨ Diwali Best Seller",
    category: "Toy & Lap Puppy",
    highlights: ["Ultra Fluffy Coat", "Zero Shedding", "Fully Dewormed & Vaccinated", "Pre-Trained on Pee Pads"],
  },
  {
    id: "toy-poodle",
    breed: "Toy Poodle Puppy",
    tagline: "Hypoallergenic Velvet Baby • High IQ & Super Cuddly",
    image: "https://imageserver.petsbest.com/marketing/blog/toy-poodle.jpg",
    badge: "🪔 Premium Velvet Lap Dog",
    category: "Hypoallergenic Toy",
    highlights: ["100% Non-Shedding", "Apartment Friendly", "Curled Velvet Coat", "KCI Lineage Certified"],
  },
  {
    id: "beagle-lab",
    breed: "Beagle & Labrador Puppies",
    tagline: "High Energy Play Buddies • Extremely Friendly with Kids",
    image: "https://www.rover.com/blog/wp-content/uploads/beagle-puppy.jpg",
    badge: "🎉 Festive Family Favorites",
    category: "Active Family Dogs",
    highlights: ["Best With Children", "Strong Immunity", "Friendly & Socialized", "Free First Vet Telecall"],
  },
  {
    id: "siberian-husky",
    breed: "Siberian Husky & GSD",
    tagline: "Majestic Guard Puppies • Wolf-Like Beauty & Intelligent",
    image: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?w=900&auto=format&fit=crop&q=80",
    badge: "👑 Royal Festive Selection",
    category: "Guard & Large Breed",
    highlights: ["Blue Eyes Available", "Alert & Protective", "IATA Approved Crate Travel", "Pedigree Verified"],
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-rotate carousel
  useEffect(() => {
    if (isPaused) return;
    slideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4500);

    return () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, [isPaused]);

  const activeSlide = carouselSlides[currentSlide]!;

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const getSlideWhatsAppUrl = (slide: CarouselSlide) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Hi Puppy Sale Shop! I want to inquire about buying the ${slide.breed} for Diwali. Please share live photos, video, and details!`
    )}`;
  };

  return (
    <section className="relative overflow-hidden pt-2 pb-12 sm:pt-4 sm:pb-16 bg-gradient-to-b from-amber-500/10 via-background to-background">
      {/* Festive Golden Top Ticker */}
      <div className="mx-auto max-w-7xl px-3 sm:px-4 mb-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 p-2.5 sm:p-3 text-white shadow-lg border border-amber-400/40">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-extrabold px-2">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-white/20 text-white animate-pulse">
                🪔
              </span>
              <span className="tracking-wide uppercase text-amber-100">
                SHUBH DIWALI MEGA PUPPY SALE
              </span>
              <span className="hidden md:inline rounded-full bg-white px-2.5 py-0.5 text-[11px] font-black text-amber-700">
                SPECIAL FESTIVE OFFERS
              </span>
              <span className="hidden lg:inline text-white/90">
                • 100% KCI Certified • Guaranteed Pre-Diwali Doorstep Delivery
              </span>
            </div>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 font-bold text-white hover:bg-white hover:text-orange-700 transition-colors"
            >
              <Phone className="size-3.5" /> Call: {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Main 2-Column Split: Festive Copy & Interactive Image Carousel */}
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Bold Festive Sale Pitch & Value Pillars */}
          <div className="flex flex-col items-start text-left lg:col-span-6">
            {/* Festive Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/15 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 shadow-xs">
              <Sparkles className="size-3.5 text-amber-600 animate-spin" />
              <span>Festival of Joy & Prosperity 🪔</span>
            </div>

            {/* Main Festive Headline */}
            <h1 className="mt-3.5 font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.08]">
              PUPPIES FOR SALE:{" "}
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
                PUREBRED, HEALTHY & VET CERTIFIED 🐾
              </span>
            </h1>

            {/* Sale Subtitle */}
            <p className="mt-3.5 text-base sm:text-lg font-medium leading-relaxed text-muted-foreground">
              Looking for <strong>puppies for sale</strong>? Puppy Sale Shop offers 100% purebred, vaccinated, and KCI-certified puppies online in India with special festive offers.
              Every puppy comes with a complete 30-point pediatric health certificate, microchip, and guaranteed safe doorstep delivery!
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex w-full flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={getSlideWhatsAppUrl(activeSlide)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 px-7 py-4 font-display text-base font-extrabold text-white shadow-xl hover:shadow-2xl transition-all hover:scale-102 active:scale-98 border border-amber-300/30"
              >
                <MessageCircle className="size-5" /> Inquire on WhatsApp
                <ArrowRight className="size-4 ml-1" />
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hi Puppy Sale Shop! I want to book a live video call to see the available puppies for purchase."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border-2 border-secondary/40 bg-card px-6 py-4 font-display text-base font-bold text-secondary shadow-sm transition-all hover:bg-secondary hover:text-secondary-foreground hover:scale-102 active:scale-98"
              >
                <Video className="size-5 text-secondary" /> Book Live Video Call
              </a>
            </div>

            {/* Social Trust proof */}
            <div className="mt-8 flex items-center gap-3 pt-4 border-t border-border/80 w-full">
              <div className="flex -space-x-2.5">
                {[customer1, customer2, customer3, customer4].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Customer ${i + 1}`}
                    className="size-9 rounded-full border-2 border-card object-cover"
                  />
                ))}
              </div>
              <div className="text-xs">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-amber-500 text-amber-500" />
                  ))}
                  <span className="font-bold text-foreground ml-1">4.95 / 5.0</span>
                </div>
                <span className="text-muted-foreground font-medium">
                  <strong>10,000+ Families</strong> bought their puppy through Puppy Sale Shop
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Festive Interactive Breed Carousel */}
          <div
            className="relative lg:col-span-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative overflow-hidden rounded-4xl border-2 border-amber-500/40 bg-card p-3 shadow-2xl">
              {/* Top Banner on the Card */}
              <div className="relative overflow-hidden rounded-3xl bg-neutral-900">
                {/* Active Slide Image */}
                <div className="relative h-[380px] sm:h-[460px] w-full overflow-hidden">
                  <img
                    src={activeSlide.image}
                    alt={activeSlide.breed}
                    className="h-full w-full object-cover object-center transition-all duration-700 scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30" />

                  {/* Top Slide Header Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 rounded-full bg-amber-500/90 px-3.5 py-1 text-xs font-black text-black shadow-md backdrop-blur-md">
                      {activeSlide.badge}
                    </span>
                    <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-black text-white shadow-md">
                      ✓ Available For Dispatch
                    </span>
                  </div>

                  {/* Slide Carousel Arrow Controls */}
                  <button
                    onClick={goToPrev}
                    aria-label="Previous Puppy Slide"
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 transition-transform hover:scale-110 active:scale-95 hover:bg-amber-600"
                  >
                    <ChevronLeft className="size-5" />
                  </button>

                  <button
                    onClick={goToNext}
                    aria-label="Next Puppy Slide"
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 transition-transform hover:scale-110 active:scale-95 hover:bg-amber-600"
                  >
                    <ChevronRight className="size-5" />
                  </button>

                  {/* Bottom Slide Content Box */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-2.5">
                    <div className="rounded-2xl bg-black/80 p-4 backdrop-blur-md border border-white/15">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                            {activeSlide.category}
                          </div>
                          <h3 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight">
                            {activeSlide.breed}
                          </h3>
                        </div>

                        {/* Availability Pill */}
                        <div className="text-right shrink-0">
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 text-xs font-bold text-emerald-300">
                            <CheckCircle2 className="size-3 text-emerald-400" /> In Stock
                          </span>
                        </div>
                      </div>

                      {/* Highlight badges */}
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {activeSlide.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="rounded-md bg-white/15 px-2 py-0.5 text-[10px] font-bold text-white/90"
                          >
                            ✓ {h}
                          </span>
                        ))}
                      </div>

                      {/* Direct CTA Buttons inside Slide */}
                      <div className="mt-3.5 flex gap-2">
                        <a
                          href={getSlideWhatsAppUrl(activeSlide)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 py-2.5 text-xs font-black text-white shadow-md transition-transform hover:scale-102"
                        >
                          <MessageCircle className="size-4" /> Inquire Availability
                        </a>
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                            `Hi Puppy Sale Shop! I would like to see live video of the ${activeSlide.breed}. Please schedule a call!`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 rounded-xl bg-white/20 px-3.5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition-colors hover:bg-white/30"
                        >
                          <Video className="size-4" /> Live Video
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide Dots / Thumbnails Selector */}
              <div className="mt-3 flex items-center justify-between px-2">
                <div className="flex items-center gap-1.5">
                  {carouselSlides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentSlide
                          ? "w-8 bg-amber-600"
                          : "w-2.5 bg-amber-400/30 hover:bg-amber-400/60"
                      }`}
                      aria-label={`Go to slide ${idx + 1}: ${slide.breed}`}
                    />
                  ))}
                </div>

                <div className="text-[11px] font-extrabold text-muted-foreground">
                  <span className="text-amber-600 font-black">{currentSlide + 1}</span> of {carouselSlides.length} Featured Breeds
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
