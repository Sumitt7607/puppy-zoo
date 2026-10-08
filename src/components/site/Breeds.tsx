import { useState } from "react";
import { Dog, Calendar, Phone, MessageCircle, Search, X, Sparkles, Eye, ShieldCheck, Tag } from "lucide-react";
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
    <section id="breeds" className="py-14 scroll-mt-24">
      <SectionTab>Popular Dog Breeds</SectionTab>

      {/* Category Filter Pills */}
      <div className="mx-auto mt-8 flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4">
        {[
          { id: "all", label: "🐾 All Breeds" },
          { id: "family", label: "🏠 Family Dogs" },
          { id: "guard", label: "🛡️ Guard & Large" },
          { id: "toy", label: "🧸 Toy & Small" },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={
              "rounded-full px-6 py-3 text-sm font-extrabold transition-all duration-200 " +
              (selectedCategory === cat.id && !searchQuery
                ? "bg-secondary text-secondary-foreground shadow-lg scale-105"
                : "bg-card border border-border text-foreground hover:border-secondary hover:text-secondary hover:scale-102")
            }
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Search Active Notification Bar */}
      {searchQuery && (
        <div className="mx-auto mt-6 flex max-w-xl items-center justify-between rounded-full bg-secondary/15 px-6 py-3 text-sm font-extrabold text-secondary shadow-sm">
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
      <div className="mx-auto mt-10 grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
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
          <h3 className="mt-4 font-display text-2xl font-extrabold">No Breeds Found</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            We couldn't find any breeds matching "{searchQuery}". Try searching for another breed like "Husky", "Golden Retriever", or "Poodle".
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="mt-6 rounded-xl bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-md transition-transform hover:scale-105"
          >
            Show All Breeds
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
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Puppy ZOO, I'm interested in a ${breed.name} puppy.`
  )}`;

  return (
    <article
      onClick={onSelect}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-border/80 bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-secondary/40"
    >
      {/* Photo + overlay */}
      <div className="relative overflow-hidden">
        <img
          src={breed.image}
          alt={`${breed.name} puppy available at Puppy ZOO`}
          width={768}
          height={768}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80";
          }}
        />

        {/* Puppy ZOO watermark */}
        <span className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-black/50 px-3 py-1 font-display text-xs font-bold tracking-wider text-white backdrop-blur-md drop-shadow">
          <Sparkles className="size-3 text-sunny" /> Puppy ZOO
        </span>

        {/* VIEW DETAILS button */}
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-start">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
            className="flex items-center gap-1.5 rounded-xl bg-navy/85 px-4 py-2 text-xs font-extrabold tracking-wide text-navy-foreground backdrop-blur-md transition-transform group-hover:scale-105"
          >
            <Eye className="size-3.5 text-sunny" /> VIEW DETAILS
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-3.5 p-6">
        <div>
          <h3 className="font-display text-2xl font-extrabold transition-colors group-hover:text-primary">
            {breed.name}
          </h3>
          <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
            <Dog className="size-4.5 text-primary" />
            {breed.breedLabel ?? breed.name} • Vet Certified
          </p>
        </div>

        {/* Pricing Bar (Orange Colour Tab) */}
        {breed.price ? (
          <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 px-3.5 py-2 text-white shadow-md shadow-orange-500/20">
            <span className="flex items-center gap-1.5 text-xs font-black tracking-wide uppercase">
              <Tag className="size-3.5 fill-white/20" /> Starting From
            </span>
            <span className="font-display text-base font-black tracking-tight drop-shadow-sm">
              ₹{breed.price.toLocaleString("en-IN")}
            </span>
          </div>
        ) : null}

        {/* CTA Buttons */}
        <div className="flex gap-2.5 pt-2">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              breed.price
                ? `Hi Puppy ZOO, I would like to chat about the ${breed.name} puppy (listed starting from ₹${breed.price.toLocaleString("en-IN")}).`
                : `Hi Puppy ZOO, I would like to chat about the ${breed.name} puppy.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-2.5 text-xs font-extrabold text-white shadow-sm transition-transform hover:scale-105"
          >
            <MessageCircle className="size-4" /> Chat Now
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            onClick={(e) => e.stopPropagation()}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2.5 text-xs font-extrabold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="size-3.5 text-primary" /> Call Now
          </a>
        </div>
      </div>
    </article>
  );
}


