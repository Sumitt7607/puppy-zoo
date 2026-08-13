const columns = [
  {
    title: "Get a Puppy",
    links: [
      { label: "All Breeds", href: "#breeds" },
      { label: "Family Dogs", href: "#breeds" },
      { label: "Guard & Large Dogs", href: "#breeds" },
      { label: "Toy & Small Dogs", href: "#breeds" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Grooming at Home", href: "#services" },
      { label: "Pet Relocation", href: "#services" },
      { label: "Puppy Training", href: "#services" },
      { label: "Vet Consultation", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why Choose Us", href: "#why-choose" },
      { label: "Happy Families", href: "#happy-family" },
      { label: "Ethical Breeding", href: "#why-choose" },
      { label: "Pet Reviews", href: "#testimonials" },
    ],
  },
  {
    title: "Help & Contact",
    links: [
      { label: "Support", href: "#contact" },
      { label: "Contact Us", href: "#contact" },
      { label: "FAQs", href: "#faq" },
      { label: "Privacy Policy", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-cream py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="font-display text-2xl font-extrabold">
            <span className="text-secondary">Puppy</span>
            <span className="text-primary"> ZOO</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            India's trusted marketplace for ethically bred, vet-checked puppies & dogs.
          </p>
        </div>
        {columns.map((c) => (
          <div key={c.title}>
            <h3 className="font-display font-bold text-lg">{c.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center text-sm text-muted-foreground sm:flex-row sm:gap-4">
        <p>© {new Date().getFullYear()} Puppy ZOO. All rights reserved.</p>
        <span className="hidden sm:inline">•</span>
        <p>
          Powered by{" "}
          <a
            href="https://www.nexcoretech.online"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground transition-colors hover:text-primary hover:underline"
          >
            NexCore Technologies
          </a>
        </p>
      </div>
    </footer>
  );
}

