import { Breed } from "@/data/breedsData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Dog, Calendar, Phone, MessageCircle, ShieldCheck, Heart, Sparkles, CheckCircle2, Tag } from "lucide-react";

interface BreedModalProps {
  breed: Breed | null;
  onClose: () => void;
}

import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/data/contact";

export function BreedModal({ breed, onClose }: BreedModalProps) {
  if (!breed) return null;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Puppy ZOO, I would like to book a live video call to see the ${breed.name} puppy (${breed.age ?? "8 Weeks"}).`
  )}`;

  return (
    <Dialog open={!!breed} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[94vw] max-w-2xl max-h-[90vh] overflow-y-auto p-0 rounded-3xl border-border bg-card shadow-2xl">
        <div className="relative">
          <img
            src={breed.image}
            alt={breed.name}
            className="h-56 sm:h-72 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <span className="absolute top-4 left-4 rounded-full bg-black/50 px-3 py-1 font-display text-xs font-bold text-white backdrop-blur-md">
            Puppy ZOO Certified
          </span>

          <div className="absolute bottom-4 left-6 right-6">
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl drop-shadow-md">
              {breed.name}
            </h2>
            <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-white/90">
              <Dog className="size-4 text-primary" /> {breed.breedLabel ?? breed.name} • {breed.category.toUpperCase()} BREED
            </p>
          </div>
        </div>

        <div className="space-y-6 p-6 sm:p-8">
          {/* Key Traits Grid */}
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="rounded-2xl bg-teal-soft/60 p-3">
              <span className="text-xs font-bold text-muted-foreground uppercase">Vaccination</span>
              <p className="mt-1 font-display font-extrabold text-lg text-emerald-600">Up to Date</p>
            </div>
            <div className="rounded-2xl bg-teal-soft/60 p-3">
              <span className="text-xs font-bold text-muted-foreground uppercase">Certificate</span>
              <p className="mt-1 font-display font-extrabold text-lg text-secondary">KCI Included</p>
            </div>
          </div>

          {/* Highlights */}
          <div className="rounded-2xl border border-border/80 bg-background/50 p-4">
            <h4 className="flex items-center gap-2 font-display text-sm font-bold text-foreground uppercase tracking-wider">
              <Sparkles className="size-4 text-primary" /> Included with your {breed.name}:
            </h4>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" /> Microchipped & Vet Checked
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" /> Free First Online Vet Call
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" /> 100% Pure Breed Guarantee
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" /> Pan-India Safe Delivery
              </li>
            </ul>
          </div>

          {/* Pricing Bar (Orange Colour Tab) */}
          {breed.price ? (
            <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 px-5 py-3 text-white shadow-lg shadow-orange-500/25">
              <div className="flex items-center gap-2">
                <Tag className="size-4 fill-white/20" />
                <span className="text-xs font-black uppercase tracking-wider">
                  Starting Price
                </span>
              </div>
              <span className="font-display text-xl font-black">
                ₹{breed.price.toLocaleString("en-IN")}
              </span>
            </div>
          ) : null}

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                breed.price
                  ? `Hi Puppy ZOO, I would like to chat about the ${breed.name} puppy (listed starting from ₹${breed.price.toLocaleString("en-IN")}).`
                  : `Hi Puppy ZOO, I would like to chat about the ${breed.name} puppy.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3.5 font-display text-base font-extrabold text-white shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="size-5" /> Chat Now
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-border bg-card px-6 py-3.5 font-display text-base font-extrabold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="size-5 text-primary" /> Call Now
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
