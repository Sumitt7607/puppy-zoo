import { Breed } from "@/data/breedsData";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Dog, Phone, MessageCircle, ShieldCheck, Sparkles, CheckCircle2, Video } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/data/contact";

interface BreedModalProps {
  breed: Breed | null;
  onClose: () => void;
}

export function BreedModal({ breed, onClose }: BreedModalProps) {
  if (!breed) return null;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Puppy Sale Shop, I would like to book a live video playdate to meet the ${breed.name} puppy (${breed.age ?? "8 Weeks"}).`
  )}`;

  return (
    <Dialog open={!!breed} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[94vw] max-w-2xl max-h-[90vh] overflow-y-auto p-0 rounded-3xl border border-border bg-card shadow-2xl">
        <div className="relative">
          <img
            src={breed.image}
            alt={breed.name}
            className="h-60 sm:h-72 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

          <span className="absolute top-4 left-4 rounded-full bg-navy/85 px-3.5 py-1 font-display text-xs font-bold text-navy-foreground backdrop-blur-md border border-white/10">
            Puppy Sale Shop Certified
          </span>

          <div className="absolute bottom-4 left-6 right-6">
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl drop-shadow-md">
              {breed.name}
            </h2>
            <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-white/90">
              <Dog className="size-4 text-sunny" /> {breed.breedLabel ?? breed.name} • {breed.category.toUpperCase()} COMPANION
            </p>
          </div>
        </div>

        <div className="space-y-6 p-6 sm:p-8">
          {/* Key Traits Grid */}
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="rounded-2xl bg-cream border border-border/80 p-3.5">
              <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Health Status</span>
              <p className="mt-1 font-display font-bold text-base sm:text-lg text-secondary">30-Point Certified</p>
            </div>
            <div className="rounded-2xl bg-cream border border-border/80 p-3.5">
              <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Lineage</span>
              <p className="mt-1 font-display font-bold text-base sm:text-lg text-primary">KCI & Microchipped</p>
            </div>
          </div>

          {/* Highlights */}
          <div className="rounded-2xl border border-border/80 bg-background/60 p-5">
            <h4 className="flex items-center gap-2 font-display text-sm font-bold text-foreground uppercase tracking-wider">
              <Sparkles className="size-4 text-primary" /> Included with your {breed.name}:
            </h4>
            <ul className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-secondary shrink-0" /> Microchipped & Vet Checked
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-secondary shrink-0" /> Free First Pediatric Vet Telecall
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-secondary shrink-0" /> Starter Nutrition & Health Passport
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-secondary shrink-0" /> 100% Pure Breed Lineage Guarantee
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-secondary shrink-0" /> Pan-India Chaperoned Delivery
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-secondary shrink-0" /> Lifetime Pet Parenting Advice
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 font-display text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:scale-102"
            >
              <Video className="size-4.5" /> Book Live Video Playdate
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-6 py-3.5 font-display text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="size-4 text-muted-foreground" /> Call Advisor
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
