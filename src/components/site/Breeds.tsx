import { useState } from "react";
import { Dog, Search, X, Sparkles, Eye, ShieldCheck, Tag, MessageCircle, Phone } from "lucide-react";
import { SectionTab } from "./SectionTab";
import { BREEDS_DATA, Breed } from "@/data/breedsData";
import { BreedModal } from "./BreedModal";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/data/contact";

interface BreedsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export function Breeds({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}: BreedsProps) {
  const [selectedBreedForModal, setSelectedBreedForModal] = useState<Breed | null>(null);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredBreeds = BREEDS_DATA.filter((breed) => {
    const matchesCategory =
      selectedCategory === "all" || breed.category === selectedCategory;

    const matchesSearch =
      !normalizedQuery ||
      breed.name.toLowerCase().includes(normalizedQuery) ||
      (breed.breedLabel && breed.breedLabel.toLowerCase().includes(normalizedQuery)) ||
      breed.category.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="breeds" className="py-16 scroll-mt-24">
      <SectionTab subtitle="Explore 100% purebred, vaccinated puppies for sale across India. Every puppy comes with KCI papers, microchip, health card, and pan-India safe delivery.">
        Buy Purebred Puppies Online
      </SectionTab>

      {/* Search Active Notification Bar */}
      {searchQuery && (
        <div className="mx-auto mt-6 flex max-w-xl items-center justify-between rounded-full bg-primary/10 border border-primary/20 px-6 py-2.5 text-sm font-bold text-primary shadow-xs">
          <div className="flex items-center gap-2">
            <Search className="size-4" />
            <span>
              Search results for "<strong>{searchQuery}</strong>" ({filteredBreeds.length} breeds found)
            </span>
          </div>
          <button
            onClick={() => setSearchQuery("")}
            className="flex items-center gap-1 text-xs font-black uppercase tracking-wider hover:underline"
          >
            Clear <X className="size-3.5" />
          </button>
        </div>
      )}

      {/* Cards Grid */}
      <div className="mx-auto mt-10 grid max-w-7xl gap-7 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBreeds.map((breed) => (
          <BreedCard
            key={breed.id}
            breed={breed}
            onSelect={() => setSelectedBreedForModal(breed)}
          />
        ))}
      </div>

      {filteredBreeds.length === 0 && (
        <div className="mx-auto mt-16 max-w-md rounded-3xl border border-dashed border-border bg-card p-10 text-center shadow-card">
          <Dog className="mx-auto size-14 text-muted-foreground/60" />
          <h3 className="mt-4 font-display text-2xl font-extrabold text-foreground">No Breeds Found</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            We couldn't find any breeds matching "{searchQuery}". Try searching for another breed like "Husky", "Golden Retriever", or "Poodle".
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="mt-6 rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:scale-105"
          >
            View All Curated Breeds
          </button>
        </div>
      )}

      {/* Modal Popup */}
      <BreedModal
        breed={selectedBreedForModal}
        onClose={() => setSelectedBreedForModal(null)}
      />
    </section>
  );
}

function BreedCard({ breed, onSelect }: { breed: Breed; onSelect: () => void }) {
  return (
    <article
      onClick={onSelect}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/30"
    >
      {/* Photo + overlay */}
      <div className="relative overflow-hidden">
        <img
          src={breed.image}
          alt={`${breed.name} puppy at Puppy ZOO Boutique`}
          width={768}
          height={768}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-104"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80";
          }}
        />

        {/* Boutique Watermark */}
        <span className="absolute top-3.5 left-3.5 flex items-center gap-1.5 rounded-full bg-navy/80 px-3 py-1 font-display text-xs font-bold tracking-wider text-navy-foreground backdrop-blur-md">
          <Sparkles className="size-3 text-sunny" /> Boutique Purebred
        </span>

        {/* Category Pill */}
        <span className="absolute top-3.5 right-3.5 rounded-full bg-card/90 px-3 py-1 text-[11px] font-bold text-foreground backdrop-blur-md border border-border">
          {breed.category.toUpperCase()}
        </span>

        {/* Quick View Button */}
        <div className="absolute inset-x-3.5 bottom-3.5 flex items-center justify-start">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
            className="flex items-center gap-1.5 rounded-full bg-card/95 px-4 py-1.5 text-xs font-bold text-foreground backdrop-blur-md transition-transform group-hover:scale-102 border border-border shadow-xs"
          >
            <Eye className="size-3.5 text-primary" /> View Profile & Video
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-3.5 p-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-display text-2xl font-bold transition-colors group-hover:text-primary">
              {breed.name}
            </h3>
            <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-[11px] font-bold text-secondary">
              {breed.age ?? "8 Weeks"}
            </span>
          </div>
          <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
            <ShieldCheck className="size-3.5 text-secondary" />
            {breed.breedLabel ?? breed.name} • 30-Point Vet Certified
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-2.5 pt-1">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              `Hi Puppy ZOO! I would like to inquire about the ${breed.name} puppy. Could you share live photos, video & current availability?`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary px-3 py-2.5 text-xs font-bold text-primary-foreground shadow-xs transition-transform hover:scale-102"
          >
            <MessageCircle className="size-4" /> Inquire on WhatsApp
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            onClick={(e) => e.stopPropagation()}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2.5 text-xs font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="size-3.5 text-muted-foreground" /> Call Advisor
          </a>
        </div>
      </div>
    </article>
  );
}
