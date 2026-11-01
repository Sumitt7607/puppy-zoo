import { useState, useRef, useEffect } from "react";
import {
  Search,
  ChevronDown,
  PawPrint,
  X,
  Dog,
  PhoneCall,
  ShieldCheck,
  Menu,
  Heart,
  Video,
} from "lucide-react";
import { BREEDS_DATA, Breed } from "@/data/breedsData";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/data/contact";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export function Header({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Filter matching breeds for autocomplete search preview
  const searchResults: Breed[] = searchQuery.trim()
    ? BREEDS_DATA.filter(
        (b) =>
          b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (b.breedLabel &&
            b.breedLabel.toLowerCase().includes(searchQuery.toLowerCase())) ||
          b.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6)
    : [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectBreed = (breedName: string) => {
    setSearchQuery(breedName);
    setIsSearchOpen(false);
    const breedsEl = document.getElementById("breeds");
    if (breedsEl) {
      breedsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    setSearchQuery("");
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    const breedsEl = document.getElementById("breeds");
    if (breedsEl) {
      breedsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (id: string) => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="top" className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-xs border-b border-border">
      {/* Main Brand & Search Bar */}
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:gap-8">
        <div className="flex items-center justify-between">
          {/* Logo with Boutique Aesthetic */}
          <a
            href="/"
            className="flex items-center gap-2.5 transition-transform hover:scale-102"
          >
            <span className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
              <PawPrint className="size-5.5 text-primary" />
            </span>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black tracking-tight leading-none text-foreground">
                Puppy <span className="text-primary">Sale Point</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                Verified Purebred Puppies
              </span>
            </div>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-xl border border-border p-2 text-foreground hover:bg-muted md:hidden"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Search Bar with Autocomplete */}
        <div ref={searchRef} className="relative flex-1">
          <div className="relative">
            <Search className="absolute top-1/2 left-4 size-4.5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setIsSearchOpen(false);
                  scrollToSection("breeds");
                }
              }}
              aria-label="Search curated breeds"
              placeholder="Search 32+ boutique breeds (e.g. Toy Poodle, Golden Retriever, Shih Tzu)..."
              className="w-full rounded-full border border-border bg-background/80 py-2.5 pr-10 pl-11 text-sm font-medium outline-none transition-colors focus:border-primary focus:bg-card focus:ring-2 focus:ring-primary/15"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setIsSearchOpen(false);
                }}
                className="absolute top-1/2 right-3.5 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          {/* Search Dropdown Results */}
          {isSearchOpen && searchQuery.trim().length > 0 && (
            <div className="absolute top-full left-0 z-50 mt-2 w-full overflow-hidden rounded-2xl border border-border bg-card shadow-2xl animate-in fade-in slide-in-from-top-2">
              {searchResults.length > 0 ? (
                <div className="divide-y divide-border">
                  <div className="bg-muted/40 px-4 py-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Found {searchResults.length} Curated Breed{searchResults.length > 1 ? "s" : ""}
                  </div>
                  {searchResults.map((breed) => (
                    <button
                      key={breed.id}
                      onClick={() => handleSelectBreed(breed.name)}
                      className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/60"
                    >
                      <img
                        src={breed.image}
                        alt={breed.name}
                        className="size-10 rounded-xl object-cover border border-border"
                      />
                      <div className="flex-1">
                        <div className="font-bold text-foreground">{breed.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {breed.breedLabel ?? breed.name} • {breed.age ?? "8 Weeks"}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="rounded-full bg-secondary/10 px-2 py-0.5 text-[10px] font-bold text-secondary uppercase">
                          {breed.category}
                        </span>
                      </div>
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      scrollToSection("breeds");
                    }}
                    className="w-full bg-primary/10 py-2.5 text-center text-xs font-bold text-primary hover:bg-primary/20"
                  >
                    Explore All Matching Breeds ↓
                  </button>
                </div>
              ) : (
                <div className="p-6 text-center text-sm text-muted-foreground">
                  <Dog className="mx-auto mb-2 size-8 text-muted-foreground/60" />
                  No breeds found matching "<span className="font-semibold text-foreground">{searchQuery}</span>".
                </div>
              )}
            </div>
          )}
        </div>

        {/* Support & Video Consultation Actions */}
        <nav className="hidden items-center gap-4 text-sm font-semibold md:flex">
          <button
            onClick={() => scrollToSection("why-choose")}
            className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ShieldCheck className="size-4 text-secondary" /> KCI Verified
          </button>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hi Puppy Sale Point! I'd like to book a live video playdate with available puppies."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-primary-foreground font-display font-bold shadow-xs transition-transform hover:scale-102 active:scale-98"
          >
            <Video className="size-4" /> Live Video Playdate
          </a>
        </nav>
      </div>

      {/* Main Minimalist Navbar */}
      <div className="border-t border-border bg-card/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <ul className="hidden flex-wrap items-center md:flex">
            {/* Home */}
            <li>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={
                  "flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold transition-colors " +
                  (selectedCategory === "all" && !searchQuery
                    ? "text-primary border-b-2 border-primary font-bold"
                    : "text-muted-foreground hover:text-foreground")
                }
              >
                Boutique Home
              </button>
            </li>

            {/* Curated Breeds Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setActiveDropdown("get-a-pet")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleCategorySelect("all")}
                className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                Curated Breeds <ChevronDown className="size-3.5 opacity-60" />
              </button>
              {activeDropdown === "get-a-pet" && (
                <div className="absolute top-full left-0 z-50 w-56 overflow-hidden rounded-2xl border border-border bg-card p-1 shadow-xl animate-in fade-in">
                  <button
                    onClick={() => handleCategorySelect("all")}
                    className="block w-full rounded-xl px-3.5 py-2 text-left text-xs font-semibold transition-colors hover:bg-muted"
                  >
                    🐾 All 32+ Breeds
                  </button>
                  <button
                    onClick={() => handleCategorySelect("family")}
                    className="block w-full rounded-xl px-3.5 py-2 text-left text-xs font-semibold transition-colors hover:bg-muted"
                  >
                    🏠 Gentle Family Companions
                  </button>
                  <button
                    onClick={() => handleCategorySelect("toy")}
                    className="block w-full rounded-xl px-3.5 py-2 text-left text-xs font-semibold transition-colors hover:bg-muted"
                  >
                    🧸 Velvet Toy & Lap Puppies
                  </button>
                  <button
                    onClick={() => handleCategorySelect("guard")}
                    className="block w-full rounded-xl px-3.5 py-2 text-left text-xs font-semibold transition-colors hover:bg-muted"
                  >
                    🛡️ Devoted Guard & Large Breeds
                  </button>
                </div>
              )}
            </li>

            {/* Boutique Collection */}
            <li>
              <button
                onClick={() => scrollToSection("breeds")}
                className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                Puppy Collection
              </button>
            </li>

            {/* Why Choose Us */}
            <li>
              <button
                onClick={() => scrollToSection("why-choose")}
                className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                The Boutique Standard
              </button>
            </li>

            {/* Wellness Services */}
            <li>
              <button
                onClick={() => scrollToSection("support")}
                className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                Wellness & Pampering
              </button>
            </li>

            {/* How It Works */}
            <li>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                How To Buy
              </button>
            </li>

            {/* Happy Families */}
            <li>
              <button
                onClick={() => scrollToSection("happy-family")}
                className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                Happy Stories
              </button>
            </li>

            {/* FAQ */}
            <li>
              <button
                onClick={() => scrollToSection("faq")}
                className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                FAQ
              </button>
            </li>
          </ul>

          <div className="hidden items-center gap-3 py-2 text-xs font-semibold text-muted-foreground md:flex">
            <span className="flex items-center gap-1 text-secondary">
              <Heart className="size-3.5 fill-secondary/20" /> 100% Ethical & Cage-Free
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-border bg-card p-4 md:hidden animate-in slide-in-from-top-2">
          <div className="space-y-1">
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-bold hover:bg-muted"
            >
              Boutique Home
            </button>
            <button
              onClick={() => handleCategorySelect("all")}
              className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-bold hover:bg-muted"
            >
              All Available Breeds
            </button>
            <button
              onClick={() => handleCategorySelect("family")}
              className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-bold hover:bg-muted"
            >
              Family Companions
            </button>
            <button
              onClick={() => handleCategorySelect("toy")}
              className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-bold hover:bg-muted"
            >
              Toy & Small Puppies
            </button>
            <button
              onClick={() => handleCategorySelect("guard")}
              className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-bold hover:bg-muted"
            >
              Guard & Large Breeds
            </button>
            <button
              onClick={() => scrollToSection("why-choose")}
              className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-bold hover:bg-muted"
            >
              The Boutique Standard
            </button>
            <button
              onClick={() => scrollToSection("support")}
              className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-bold hover:bg-muted"
            >
              Wellness & Pampering Services
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-bold hover:bg-muted"
            >
              Adoption Journey
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-bold hover:bg-muted"
            >
              Parent Reviews
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full rounded-xl px-4 py-2.5 text-left text-sm font-bold hover:bg-muted"
            >
              FAQ
            </button>
            <div className="pt-3 border-t border-border flex flex-col gap-2">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-border py-2.5 text-sm font-bold text-foreground"
              >
                <PhoneCall className="size-4 text-primary" /> Call {PHONE_NUMBER}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-sm font-bold text-primary-foreground shadow-sm"
              >
                <Video className="size-4" /> Book Live Playdate
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
