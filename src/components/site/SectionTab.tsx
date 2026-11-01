import { Sparkles } from "lucide-react";

export function SectionTab({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-xs">
        <Sparkles className="size-3.5" />
        <span>Nordic Boutique Standard</span>
      </div>
      <h2 className="mt-3 font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-2.5 max-w-xl text-sm sm:text-base font-medium text-muted-foreground">
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex items-center justify-center gap-1.5">
        <span className="h-1 w-10 rounded-full bg-primary" />
        <span className="h-1 w-3 rounded-full bg-secondary" />
        <span className="h-1 w-1.5 rounded-full bg-primary/40" />
      </div>
    </div>
  );
}
