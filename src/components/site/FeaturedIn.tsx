const outlets = ["ZEE NEWS", "Hindustan Times", "Curly Tales", "SO Delhi", "The Print"];

export function FeaturedIn() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        <h2 className="font-display text-2xl sm:text-3xl">Featured In-</h2>
        {outlets.map((o) => (
          <span
            key={o}
            className="font-display text-xl font-bold text-muted-foreground sm:text-2xl"
          >
            {o}
          </span>
        ))}
      </div>
    </section>
  );
}
