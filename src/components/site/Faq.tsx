import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionTab } from "./SectionTab";
import { Sparkles } from "lucide-react";

const faqs = [
  {
    q: "Where can I find healthy, genuine puppies for sale in India?",
    a: "Puppy Sale Shop (puppiesforsale.shop) is India's premier destination for purebred puppies for sale. We offer healthy, KCI-certified puppies across Delhi NCR, Mumbai, Bangalore, Pune, Hyderabad, and 150+ cities with safe doorstep delivery and veterinary health records.",
  },
  {
    q: "Are Puppy Sale Shop puppies for sale KCI registered and microchipped?",
    a: "Yes. All our purebred puppies for sale come with official Kennel Club of India (KCI) documentation, verified pedigree records, and an international ISO microchip registered in your family's name for lifelong safety and authenticity.",
  },
  {
    q: "What does the 30-Point Pediatric Health Check include?",
    a: "Before travel, every puppy undergoes a comprehensive evaluation by certified veterinary surgeons. This covers cardiopulmonary function, eyes, ears, joint health, dental bite, weight, and deworming status. You receive the signed health clearance card alongside core vaccination records.",
  },
  {
    q: "Can I meet the puppy on a live video playdate before booking?",
    a: "Absolutely! We prioritize total transparency. Our pet advisors arrange an interactive video call so you can watch your chosen puppy interact, see their parents, and observe their natural temperament in real time before making any decision.",
  },
  {
    q: "How does chaperoned doorstep delivery work across India?",
    a: "We arrange climate-controlled, IATA-compliant air or private vehicle transit accompanied by a trained pet handler. Your puppy travels safely and comfortably with hydration, nutrition, and rest breaks right to your doorstep in 150+ Indian cities.",
  },
  {
    q: "What documents and health records are included with the puppy?",
    a: "Every puppy joins your family with official Kennel Club of India (KCI) pedigree documentation, ISO microchip registration, complete veterinary health and vaccination passport, and complimentary access to our pediatric vet telehealth service.",
  },
  {
    q: "What after-sales and lifetime support do you provide after buying?",
    a: "Buying your puppy is just the beginning of our relationship! Our team of veterinary nurses and certified canine behaviorists remains available on WhatsApp to guide you through potty training, teething, vaccination schedules, and dietary transitions throughout your pet's life.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-16 scroll-mt-20">
      <SectionTab subtitle="Answers to common questions regarding buying puppies for sale, health assurance, ethical nurseries, video calls, and doorstep delivery.">
        Puppies For Sale — FAQs
      </SectionTab>
      <div className="mx-auto mt-12 max-w-3xl px-4">
        <Accordion type="single" collapsible className="space-y-3.5">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-6 py-1 shadow-xs transition-colors hover:border-primary/30"
            >
              <AccordionTrigger className="text-left font-display text-base sm:text-lg font-bold text-foreground">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-4">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
