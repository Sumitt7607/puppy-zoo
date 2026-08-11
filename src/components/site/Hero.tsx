import { HeartHandshake, Stethoscope, MapPin, Syringe, Award, Home, Sparkles, ShieldCheck, Video } from "lucide-react";
import heroPuppies from "@/assets/hero-puppies.png";

const badges = [
  { Icon: HeartHandshake, label: "Ethically\nBred Puppies" },
  { Icon: Stethoscope, label: "Vet-Checked\n& Healthy" },
  { Icon: MapPin, label: "All India Safe\nDelivery" },
  { Icon: Syringe, label: "Vaccinated\nPuppies" },
  { Icon: Award, label: "KCI-Certified\nPuppies" },
  { Icon: Home, label: "10000+\nHappy Family" },
];

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-3 sm:px-4 pt-3 sm:pt-6">
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-card shadow-2xl">
        <div className="paw-bg relative min-h-[340px] sm:min-h-[460px]">
          {/* Main Title Banner Overlay */}
          <div className="absolute top-3 sm:top-8 left-1/2 z-20 -translate-x-1/2 w-[94%] max-w-xl text-center">
            <div className="inline-block rounded-2xl bg-navy/95 border border-white/10 px-4 py-2.5 sm:px-6 sm:py-3.5 shadow-2xl backdrop-blur-md">
              <h2 className="font-display text-xl sm:text-4xl font-black tracking-wide text-navy-foreground leading-tight">
                FIND YOUR PERFECT FRIEND
              </h2>
              <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-sm font-semibold text-sunny/90 leading-tight">
                Ethically Bred • Vet Checked • Safe Pan-India Doorstep Delivery
              </p>
            </div>

            {/* Mobile-visible Trust Pills */}
            <div className="mt-2 flex items-center justify-center gap-1.5 sm:hidden">
              <span className="flex items-center gap-1 rounded-full bg-card/90 px-2.5 py-1 text-[10px] font-extrabold text-foreground shadow-sm backdrop-blur-md border border-border">
                <Sparkles className="size-3 text-primary" /> 32+ Breeds
              </span>
              <span className="flex items-center gap-1 rounded-full bg-card/90 px-2.5 py-1 text-[10px] font-extrabold text-foreground shadow-sm backdrop-blur-md border border-border">
                <ShieldCheck className="size-3 text-emerald-500" /> KCI & Vet Guaranteed
              </span>
            </div>
          </div>

          {/* Desktop Floating Pill Badges */}
          <div className="absolute top-4 left-4 z-20 hidden sm:flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full bg-card/90 px-3.5 py-1.5 text-xs font-extrabold text-foreground shadow-md backdrop-blur-md border border-border">
              <Sparkles className="size-3.5 text-primary" /> 32+ Purebred Breeds
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-card/90 px-3.5 py-1.5 text-xs font-extrabold text-foreground shadow-md backdrop-blur-md border border-border">
              <ShieldCheck className="size-3.5 text-emerald-500" /> KCI & Vet Guaranteed
            </span>
          </div>

          <h1 className="sr-only">
            Puppy ZOO — Buy healthy puppies & dogs online in India
          </h1>

          {/* Hero Image */}
          <img
            src={heroPuppies}
            alt="Lineup of adorable puppies available at Puppy ZOO"
            width={1920}
            height={912}
            className="w-full h-[350px] sm:h-[460px] object-cover object-bottom sm:object-center"
          />

          {/* Floating Action CTA — Visible on Desktop & Mobile */}
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20">
            <a
              href="https://wa.me/919310025055?text=Hi%20Puppy%20ZOO,%20I%20want%20to%20book%20a%20live%20video%20call!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl bg-emerald-600 px-3 py-2 sm:px-5 sm:py-3 font-display text-xs sm:text-base font-extrabold text-white shadow-xl backdrop-blur-md transition-transform hover:scale-105 active:scale-95 border border-emerald-400/30"
            >
              <Video className="size-4 sm:size-5" /> Book Live Video Call
            </a>
          </div>
        </div>

        {/* Feature Badges Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-7 items-center gap-2.5 sm:gap-4 bg-navy px-3 py-4 sm:px-5 sm:py-6 text-navy-foreground">
          {badges.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 sm:gap-2 text-center transition-transform hover:scale-105">
              <span className="flex size-10 sm:size-14 items-center justify-center rounded-xl sm:rounded-2xl bg-navy-foreground/10 text-sunny backdrop-blur-xs border border-navy-foreground/20">
                <Icon className="size-5 sm:size-7" />
              </span>
              <span className="font-display text-[10px] sm:text-sm leading-tight font-bold whitespace-pre-line">
                {label}
              </span>
            </div>
          ))}
          <a
            href="#breeds"
            className="col-span-3 sm:col-span-3 lg:col-span-1 rounded-xl sm:rounded-2xl bg-primary px-4 py-3 sm:px-6 sm:py-4 text-center font-display text-base sm:text-xl font-extrabold text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95 mt-1 sm:mt-0"
          >
            Get Yours Now
          </a>
        </div>
      </div>
    </section>
  );
}


