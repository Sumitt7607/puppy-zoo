import { useState, useRef, useEffect } from "react";
import {
  Search,
  ChevronDown,
  PawPrint,
  X,
  Dog,
  PhoneCall,
  Sparkles,
  ShieldCheck,
  Menu,
} from "lucide-react";
import { BREEDS_DATA, Breed } from "@/data/breedsData";

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
    <header id="top" className="sticky top-0 z-50 bg-card shadow-sm">
      {/* Top Announcement Bar */}
      <div className="bg-navy px-4 py-2 text-center text-xs font-extrabold text-navy-foreground sm:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-2.5 py-0.5 text-xs text-primary font-bold">
              <Sparkles className="size-3" /> SPECIAL OFFER
            </span>
            <span className="hidden sm:inline">
              Free Vet Consultation Kit & KCI Certification with every puppy booking!
            </span>
            <span className="sm:hidden">Free Vet Consultation with every puppy!</span>
          </div>
          <a
            href="tel:+919310025055"
            className="flex items-center gap-1 font-bold text-sunny hover:underline"
          >
            <PhoneCall className="size-3.5" /> +91 93100 25055
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3.5 md:flex-row md:items-center md:gap-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-1.5 font-display text-3xl font-extrabold tracking-tight transition-transform hover:scale-105"
          >
            <span className="text-secondary">Puppy</span>
            <span className="text-primary">ZOO</span>
            <PawPrint className="size-7 text-primary" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-foreground hover:bg-muted md:hidden"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
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
              aria-label="Search for breeds"
              placeholder="Search 32+ breeds (e.g. Husky, Golden Retriever, Beagle)..."
              className="w-full rounded-full border border-border bg-background py-2.5 pr-10 pl-11 text-sm font-semibold outline-none transition-colors focus:border-secondary focus:ring-2 focus:ring-secondary/20"
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
                    Found {searchResults.length} Breed{searchResults.length > 1 ? "s" : ""}
                  </div>
                  {searchResults.map((breed) => (
                    <button
                      key={breed.id}
                      onClick={() => handleSelectBreed(breed.name)}
                      className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-teal-soft/50"
                    >
                      <img
                        src={breed.image}
                        alt={breed.name}
                        className="size-10 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-bold text-foreground">{breed.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {breed.breedLabel ?? breed.name} • {breed.age ?? "8 Weeks"}
                        </div>
                      </div>
                      <span className="rounded bg-secondary/10 px-2 py-1 text-xs font-bold text-secondary uppercase">
                        {breed.category}
                      </span>
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      scrollToSection("breeds");
                    }}
                    className="w-full bg-primary/10 py-2.5 text-center text-xs font-bold text-primary hover:bg-primary/20"
                  >
                    View All Results ↓
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

        {/* Support & Contact Buttons */}
        <nav className="hidden items-center gap-4 text-sm font-bold md:flex">
          <button
            onClick={() => scrollToSection("why-choose")}
            className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ShieldCheck className="size-4 text-emerald-500" /> KCI Verified
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="rounded-xl bg-primary px-5 py-2.5 text-primary-foreground font-display font-extrabold shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            Contact Advisor
          </button>
        </nav>
      </div>

      {/* Main Navbar Navigation Bar */}
      <div className="border-y-2 border-secondary bg-card">
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
                  "flex items-center gap-1.5 px-5 py-3 font-bold transition-colors " +
                  (selectedCategory === "all" && !searchQuery
                    ? "bg-primary text-primary-foreground"
                    : "hover:text-primary")
                }
              >
                Home
              </button>
            </li>

            {/* Get a Pet Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setActiveDropdown("get-a-pet")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleCategorySelect("all")}
                className="flex items-center gap-1.5 px-5 py-3 font-bold transition-colors hover:text-primary"
              >
                Get a Pet <ChevronDown className="size-4" />
              </button>
              {activeDropdown === "get-a-pet" && (
                <div className="absolute top-full left-0 z-50 w-52 overflow-hidden rounded-b-xl border border-border bg-card shadow-xl animate-in fade-in">
                  <button
                    onClick={() => handleCategorySelect("all")}
                    className="block w-full px-4 py-2.5 text-left text-sm font-semibold transition-colors hover:bg-teal-soft"
                  >
                    All Available Breeds
                  </button>
                  <button
                    onClick={() => handleCategorySelect("family")}
                    className="block w-full px-4 py-2.5 text-left text-sm font-semibold transition-colors hover:bg-teal-soft"
                  >
                    Family Dogs
                  </button>
                  <button
                    onClick={() => handleCategorySelect("guard")}
                    className="block w-full px-4 py-2.5 text-left text-sm font-semibold transition-colors hover:bg-teal-soft"
                  >
                    Guard & Large Dogs
                  </button>
                  <button
                    onClick={() => handleCategorySelect("toy")}
                    className="block w-full px-4 py-2.5 text-left text-sm font-semibold transition-colors hover:bg-teal-soft"
                  >
                    Toy & Small Dogs
                  </button>
                </div>
              )}
            </li>

            {/* Shop */}
            <li>
              <button
                onClick={() => scrollToSection("breeds")}
                className="flex items-center gap-1.5 px-5 py-3 font-bold transition-colors hover:text-primary"
              >
                Shop Puppies
              </button>
            </li>

            {/* Other Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setActiveDropdown("other")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => scrollToSection("why-choose")}
                className="flex items-center gap-1.5 px-5 py-3 font-bold transition-colors hover:text-primary"
              >
                Other <ChevronDown className="size-4" />
              </button>
              {activeDropdown === "other" && (
                <div className="absolute top-full left-0 z-50 w-52 overflow-hidden rounded-b-xl border border-border bg-card shadow-xl animate-in fade-in">
                  <button
                    onClick={() => scrollToSection("why-choose")}
                    className="block w-full px-4 py-2.5 text-left text-sm font-semibold transition-colors hover:bg-teal-soft"
                  >
                    Why Choose Us
                  </button>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="block w-full px-4 py-2.5 text-left text-sm font-semibold transition-colors hover:bg-teal-soft"
                  >
                    Pet Parents Reviews
                  </button>
                  <button
                    onClick={() => scrollToSection("happy-family")}
                    className="block w-full px-4 py-2.5 text-left text-sm font-semibold transition-colors hover:bg-teal-soft"
                  >
                    Happy Families
                  </button>
                  <button
                    onClick={() => scrollToSection("faq")}
                    className="block w-full px-4 py-2.5 text-left text-sm font-semibold transition-colors hover:bg-teal-soft"
                  >
                    FAQs
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="border-b border-border bg-card px-4 py-4 md:hidden animate-in slide-in-from-top-2">
          <div className="space-y-2">
            <button
              onClick={() => handleCategorySelect("all")}
              className="block w-full rounded-lg px-4 py-2.5 text-left font-bold transition-colors hover:bg-teal-soft"
            >
              🐾 All Breeds
            </button>
            <button
              onClick={() => handleCategorySelect("family")}
              className="block w-full rounded-lg px-4 py-2.5 text-left font-bold transition-colors hover:bg-teal-soft"
            >
              🏠 Family Dogs
            </button>
            <button
              onClick={() => handleCategorySelect("guard")}
              className="block w-full rounded-lg px-4 py-2.5 text-left font-bold transition-colors hover:bg-teal-soft"
            >
              🛡️ Guard Dogs
            </button>
            <button
              onClick={() => handleCategorySelect("toy")}
              className="block w-full rounded-lg px-4 py-2.5 text-left font-bold transition-colors hover:bg-teal-soft"
            >
              🧸 Toy & Small Dogs
            </button>
            <button
              onClick={() => scrollToSection("why-choose")}
              className="block w-full rounded-lg px-4 py-2.5 text-left font-bold transition-colors hover:bg-teal-soft"
            >
              ✨ Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full rounded-lg bg-primary py-3 text-center font-display font-extrabold text-primary-foreground"
            >
              📞 Contact Pet Advisor
            </button>
          </div>
        </div>
      )}
    </header>
  );
}


