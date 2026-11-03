import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustStats } from "@/components/site/TrustStats";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Breeds } from "@/components/site/Breeds";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Testimonials } from "@/components/site/Testimonials";
import { HappyFamily } from "@/components/site/HappyFamily";
import { Faq } from "@/components/site/Faq";
import { ContactCta } from "@/components/site/ContactCta";
import { Footer } from "@/components/site/Footer";
import { WhatsAppWidget } from "@/components/site/WhatsAppWidget";

const title = "Puppies For Sale Online — Puppy Sale Shop | Healthy Purebred Puppies in India";
const description =
  "Looking for puppies for sale? Puppy Sale Shop (puppiesforsale.shop) offers 100% healthy, KCI-certified purebred puppies for sale online. 30-point vet check, microchip & safe pan-India delivery.";
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
          "puppies for sale, puppies for sale near me, puppies for sale in india, puppy sale shop, puppiesforsale.shop, buy puppies online india, kci certified puppies for sale, golden retriever puppies for sale, shih tzu puppies for sale, toy poodle puppies for sale, labrador puppies for sale, beagle puppies for sale, husky puppies for sale",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Puppies For Sale at Puppy Sale Shop - Healthy Dogs Online in India" },
      { property: "og:site_name", content: "Puppy Sale Shop" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      { name: "google-site-verification", content: "ahCYoiSyaT_KjyAVdk3NyF9TNJBE7QVCLvbzTxD6hfs" },
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
              "name": "Where can I find healthy, genuine puppies for sale in India?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Puppy Sale Shop (puppiesforsale.shop) is India's trusted platform for purebred puppies for sale. We offer healthy, KCI-certified puppies across Delhi NCR, Mumbai, Bangalore, Pune, Hyderabad, and 150+ cities with safe doorstep delivery and veterinary health records."
              }
            },
            {
              "@type": "Question",
              "name": "Are Puppy Sale Shop puppies for sale KCI registered?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, most of our puppies for sale come with KCI registration and a verified breed pedigree certificate along with an ISO microchip."
              }
            },
            {
              "@type": "Question",
              "name": "Do you deliver puppies outside Delhi NCR?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We deliver puppies for sale across all of India by road and air with IATA-approved crates and an experienced pet handler."
              }
            },
            {
              "@type": "Question",
              "name": "What health guarantee do I get when I buy a puppy?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Every puppy for sale is vet-checked and vaccinated, and comes with a written health assurance plus a free vet consultation."
              }
            },
            {
              "@type": "Question",
              "name": "Can I see the puppy on a live video call before booking?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We arrange a live interactive video call with the puppy and its parents before you make any payment."
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
          "name": "Purebred Puppies For Sale in India - Puppy Sale Shop",
          "description": "Ethically bred purebred puppies for sale at Puppy Sale Shop including Shih Tzu, Golden Retriever, Labrador Retriever, German Shepherd, Siberian Husky, Toy Poodle, Beagle, and Pomeranian.",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Shih Tzu Puppies For Sale",
              "url": "https://puppiesforsale.shop/#breeds"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Golden Retriever Puppies For Sale",
              "url": "https://puppiesforsale.shop/#breeds"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Labrador Retriever Puppies For Sale",
              "url": "https://puppiesforsale.shop/#breeds"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "German Shepherd Puppies For Sale",
              "url": "https://puppiesforsale.shop/#breeds"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Siberian Husky Puppies For Sale",
              "url": "https://puppiesforsale.shop/#breeds"
            },
            {
              "@type": "ListItem",
              "position": 6,
              "name": "Toy Poodle Puppies For Sale",
              "url": "https://puppiesforsale.shop/#breeds"
            },
            {
              "@type": "ListItem",
              "position": 7,
              "name": "Beagle Puppies For Sale",
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
        <HowItWorks />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}


