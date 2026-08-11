import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionTab } from "./SectionTab";

const faqs = [
  {
    q: "Are Puppy ZOO puppies KCI registered?",
    a: "Yes, most of our puppies come with KCI registration and a verified breed certificate along with a microchip.",
  },
  {
    q: "Do you deliver outside Delhi NCR?",
    a: "We deliver pan India by road and air with IATA-approved crates and a trained pet handler.",
  },
  {
    q: "What health guarantee do I get?",
    a: "Every puppy is vet-checked and vaccinated, and comes with a written health assurance plus a free vet consultation.",
  },
  {
    q: "Can I see the puppy before booking?",
    a: "Absolutely. We arrange a live video call with the puppy and its parents before you pay anything.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-14 scroll-mt-20">
      <SectionTab>Frequently Asked Questions</SectionTab>
      <div className="mx-auto mt-12 max-w-3xl px-4">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-5"
            >
              <AccordionTrigger className="text-left font-display text-lg">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

