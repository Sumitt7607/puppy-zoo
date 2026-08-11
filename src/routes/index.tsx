import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustStats } from "@/components/site/TrustStats";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Breeds } from "@/components/site/Breeds";
import { Services } from "@/components/site/Services";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Testimonials } from "@/components/site/Testimonials";
import { HappyFamily } from "@/components/site/HappyFamily";
import { Faq } from "@/components/site/Faq";
import { ContactCta } from "@/components/site/ContactCta";
import { Footer } from "@/components/site/Footer";
import { WhatsAppWidget } from "@/components/site/WhatsAppWidget";

const title = "Puppy ZOO — Buy Healthy Puppies & Dogs Online in India";
const description =
  "Puppy ZOO connects you with ethically bred, vaccinated and KCI-certified puppies with pan-India safe delivery and free vet support.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <main>
        <Hero />
        <TrustStats />
        <Breeds
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Testimonials />
        <HappyFamily />
        <WhyChoose />
        <Services />
        <HowItWorks />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}


