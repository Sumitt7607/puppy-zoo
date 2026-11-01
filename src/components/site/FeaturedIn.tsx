export function FeaturedIn() {
  const outlets = ["ZEE NEWS", "Hindustan Times", "Curly Tales", "SO Delhi", "The Print"];

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 border-y border-border/70 my-4">
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Recognized & Featured In
        </span>
        <div className="hidden sm:block h-4 w-px bg-border" />
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {outlets.map((o) => (
            <span
              key={o}
              className="font-display text-base sm:text-xl font-bold tracking-tight text-foreground/60 transition-colors hover:text-foreground"
            >
              {o}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
