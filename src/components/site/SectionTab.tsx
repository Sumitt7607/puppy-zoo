export function SectionTab({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <div className="absolute inset-x-8 -top-3 h-6 rounded-t-lg bg-primary" />
        <h2 className="section-tab relative text-center text-xl sm:text-2xl">{children}</h2>
      </div>
    </div>
  );
}
