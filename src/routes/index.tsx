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

const title = "Puppy Sale Point — Buy Purebred Puppies & Dogs Online in India | KCI Certified";
const description =
  "Find healthy, KCI-certified purebred puppies for sale at Puppy Sale Point (puppiesforsale.shop). 30-point pediatric vet screening, live video calls, and pan-India safe doorstep delivery.";
const siteUrl = "https://puppiesforsale.shop";
const ogImage = "https://puppiesforsale.shop/favicon.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "puppy sale point, puppies for sale, puppiesforsale.shop, buy puppies online india, kci certified puppies, golden retriever puppy price, shih tzu puppy buy, dog breeders india, pet store near me, buy dogs online, beagle puppy india, husky puppy india, german shepherd puppy",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Puppy Sale Point - Healthy Puppies & Dogs Online in India" },
      { property: "og:site_name", content: "Puppy Sale Point" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Are Puppy Sale Point puppies KCI registered?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, most of our puppies come with KCI registration and a verified breed certificate along with a microchip."
              }
            },
            {
              "@type": "Question",
              "name": "Do you deliver outside Delhi NCR?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We deliver pan India by road and air with IATA-approved crates and a trained pet handler."
              }
            },
            {
              "@type": "Question",
              "name": "What health guarantee do I get?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Every puppy is vet-checked and vaccinated, and comes with a written health assurance plus a free vet consultation."
              }
            },
            {
              "@type": "Question",
              "name": "Can I see the puppy before booking?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We arrange a live video call with the puppy and its parents before you pay anything."
              }
            }
          ]
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Available Purebred Puppies in India - Puppy Sale Point",
          "description": "Ethically bred purebred puppies at Puppy Sale Point including Shih Tzu, Golden Retriever, Labrador Retriever, German Shepherd, Siberian Husky, Toy Poodle, Beagle, and Pomeranian.",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Shih Tzu Puppy",
              "url": "https://puppiesforsale.shop/#breeds"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Golden Retriever Puppy",
              "url": "https://puppiesforsale.shop/#breeds"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Labrador Retriever Puppy",
              "url": "https://puppiesforsale.shop/#breeds"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "German Shepherd Puppy",
              "url": "https://puppiesforsale.shop/#breeds"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Siberian Husky Puppy",
              "url": "https://puppiesforsale.shop/#breeds"
            },
            {
              "@type": "ListItem",
              "position": 6,
              "name": "Toy Poodle Puppy",
              "url": "https://puppiesforsale.shop/#breeds"
            },
            {
              "@type": "ListItem",
              "position": 7,
              "name": "Beagle Puppy",
              "url": "https://puppiesforsale.shop/#breeds"
            }
          ]
        }),
      },
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


