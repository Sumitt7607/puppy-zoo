import { SectionTab } from "./SectionTab";

const steps = [
  { n: "01", title: "Tell us your pick", text: "Share the breed, budget and city you want." },
  { n: "02", title: "Meet on video call", text: "See the pup live with its parents and papers." },
  { n: "03", title: "Health & documents", text: "Vet check, vaccination card and breed certificate." },
  { n: "04", title: "Safe home delivery", text: "Doorstep delivery with a care kit and vet support." },
];

export function HowItWorks() {
  return (
    <section className="py-14">
      <SectionTab>How It Works</SectionTab>
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="rounded-xl bg-navy p-6 text-navy-foreground">
            <span className="font-display text-4xl font-extrabold text-sunny">{s.n}</span>
            <h3 className="mt-2 text-xl">{s.title}</h3>
            <p className="mt-2 text-sm opacity-90">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
