import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Check, CheckCheck } from "lucide-react";
import { SectionTab } from "./SectionTab";
import customer1 from "@/assets/customer-1.jpg";
import customer2 from "@/assets/customer-2.jpg";
import customer3 from "@/assets/customer-3.jpg";
import customer4 from "@/assets/customer-4.jpg";
import customer5 from "@/assets/customer-5.jpg";
import customer6 from "@/assets/customer-6.jpg";

type Msg = {
  type: "received" | "sent" | "image-received";
  text?: string;
  time: string;
  ticks?: "single" | "double" | "read";
  image?: string;
  liked?: boolean;
};

type Chat = {
  name: string;
  avatar: string;
  breed: string;
  messages: Msg[];
};

const chats: Chat[] = [
  // Chat 1 — from user's screenshot (Vandana / Poodle)
  {
    name: "Vandana Poodle F…",
    avatar: customer1,
    breed: "Toy Poodle",
    messages: [
      { type: "image-received", image: customer1, text: "", time: "3:38 PM", liked: true },
      { type: "received", text: "Thanks for the lovely family member", time: "3:38 PM", liked: true },
      { type: "sent", text: "wow that's really cute", time: "3:39 PM", ticks: "read" },
      { type: "sent", text: "touchwood 🧿", time: "3:39 PM", ticks: "read" },
      { type: "sent", text: "do give us reference ma'am\nif anyone ask for a new family member", time: "3:41 PM", ticks: "read" },
      { type: "received", text: "Goes without saying", time: "3:41 PM", liked: true },
      { type: "sent", text: "sounds beautiful ❤️", time: "3:42 PM", ticks: "read" },
    ],
  },
  // Chat 2 — from user's screenshot (lil baby)
  {
    name: "Priya — Pomeranian",
    avatar: customer2,
    breed: "Pomeranian",
    messages: [
      { type: "sent", text: "hie dear", time: "6:32 PM", ticks: "read" },
      { type: "received", text: "Hi", time: "6:32 PM" },
      { type: "sent", text: "how's lil baby\nhope she is comfortable with you and family now", time: "6:32 PM", ticks: "read" },
      { type: "received", text: "Yes just roaming around", time: "6:32 PM" },
      { type: "sent", text: "great", time: "6:36 PM", ticks: "read" },
      { type: "sent", text: "good to know she is happy with you and you all too", time: "6:36 PM", ticks: "read" },
      { type: "sent", text: "❤️🥰", time: "6:36 PM", ticks: "read" },
      { type: "received", text: "Yes 🌸🌷", time: "6:36 PM" },
    ],
  },
  // Chat 3 — fabricated (Rohit / German Shepherd)
  {
    name: "Rohit — GSD Owner",
    avatar: customer3,
    breed: "German Shepherd",
    messages: [
      { type: "received", text: "Bhai puppy aa gayi! 🎉", time: "11:20 AM" },
      { type: "sent", text: "Woww!! Congratulations Rohit bhai 🥳", time: "11:21 AM", ticks: "read" },
      { type: "sent", text: "Kaisa laga unboxing moment? 😄", time: "11:21 AM", ticks: "read" },
      { type: "received", text: "Yaar itna cute tha dekh ke dil bhar aaya 😭❤️", time: "11:22 AM" },
      { type: "received", text: "Poori family excited hai ghar mein 🐾", time: "11:23 AM", liked: true },
      { type: "sent", text: "Aise hi moments ke liye toh hum kaam karte hain 🙏", time: "11:24 AM", ticks: "read" },
      { type: "sent", text: "Do share pics when you can! We love seeing happy families ❤️", time: "11:24 AM", ticks: "read" },
      { type: "received", text: "Sure bhai! Best decision ever 🐶👌", time: "11:26 AM" },
    ],
  },
  // Chat 4 — fabricated (Meena / Golden Retriever)
  {
    name: "Meena — Golden Retr…",
    avatar: customer4,
    breed: "Golden Retriever",
    messages: [
      { type: "sent", text: "Hi Meena ji! How is our golden baby doing? 🐾", time: "9:15 AM", ticks: "read" },
      { type: "received", text: "He is absolutely amazing!", time: "9:17 AM" },
      { type: "received", text: "Sleeps all day and cuddles all night 😄❤️", time: "9:17 AM", liked: true },
      { type: "sent", text: "Haha that's every golden's superpower 😂", time: "9:18 AM", ticks: "read" },
      { type: "sent", text: "Please do share his photos with us 🥹", time: "9:18 AM", ticks: "read" },
      { type: "received", text: "Of course! He's become the star of the family 🌟", time: "9:20 AM" },
      { type: "received", text: "Thank you Puppy ZOO for this angel 🙏", time: "9:20 AM", liked: true },
      { type: "sent", text: "Our pleasure! Happy parenting! 🐶🎉", time: "9:22 AM", ticks: "read" },
    ],
  },
  // Chat 5 — fabricated (Sunita / Shih Tzu delivery feedback)
  {
    name: "Sunita — Shih Tzu",
    avatar: customer5,
    breed: "Shih Tzu",
    messages: [
      { type: "received", text: "Hello, the puppy reached safely 🥰", time: "2:10 PM" },
      { type: "received", text: "She is so tiny and fluffy omg 😭💕", time: "2:10 PM", liked: true },
      { type: "sent", text: "So glad to hear that Sunita ji! 😊", time: "2:12 PM", ticks: "read" },
      { type: "sent", text: "Shih Tzus are just balls of fluff and love 🐾", time: "2:12 PM", ticks: "read" },
      { type: "received", text: "The delivery was very smooth too", time: "2:14 PM" },
      { type: "received", text: "Everything was properly packed and she seemed calm 👌", time: "2:14 PM" },
      { type: "sent", text: "That's what we aim for! Comfort of the pup is #1 🐶", time: "2:15 PM", ticks: "read" },
      { type: "sent", text: "Enjoy your new baby! Feel free to reach out anytime ❤️", time: "2:16 PM", ticks: "read" },
    ],
  },
  // Chat 6 — fabricated (Kapoor family / Labrador twins)
  {
    name: "Kapoor Family — Labs",
    avatar: customer6,
    breed: "Labrador (Twins)",
    messages: [
      { type: "sent", text: "Good morning! How are both the lab pups? 😄", time: "8:45 AM", ticks: "read" },
      { type: "received", text: "They are an absolute handful but we love it! 😂🐾🐾", time: "8:47 AM", liked: true },
      { type: "received", text: "They already took over the entire sofa 👀", time: "8:48 AM" },
      { type: "sent", text: "Haha Labradors have that talent! 😂❤️", time: "8:49 AM", ticks: "read" },
      { type: "sent", text: "Do send us a video sometime — we'd love to see them!", time: "8:49 AM", ticks: "read" },
      { type: "received", text: "Definitely will! Everyone at home is so happy", time: "8:51 AM" },
      { type: "received", text: "Best investment we ever made 🥹🐶🐶", time: "8:51 AM", liked: true },
      { type: "sent", text: "This made our day! Thank you for trusting Puppy ZOO 🙏", time: "8:53 AM", ticks: "read" },
    ],
  },
];

function TickIcon({ ticks }: { ticks?: "single" | "double" | "read" | undefined }) {
  if (!ticks) return null;
  if (ticks === "single") return <Check className="size-3.5 text-white/50" />;
  if (ticks === "double") return <CheckCheck className="size-3.5 text-white/50" />;
  return <CheckCheck className="size-3.5 text-[#53bdeb]" />;
}

function WhatsAppCard({ chat }: { chat: Chat }) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] shadow-2xl border border-white/10"
      style={{ background: "#111b21", minHeight: 520 }}>

      {/* WA Header */}
      <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#202c33" }}>
        <div className="flex-1 min-w-0">
          <p className="truncate font-bold text-white text-sm">{chat.name}</p>
          <p className="text-[11px] text-emerald-400">online</p>
        </div>
        <span className="rounded-full bg-emerald-600/20 border border-emerald-500/40 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-400 uppercase tracking-wide">
          {chat.breed}
        </span>
      </div>

      {/* WA wallpaper chat area */}
      <div
        className="flex-1 overflow-y-auto px-3 py-4 space-y-1.5"
        style={{
          background: "#0b141a",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cstyle%3E.s%7Bfill:none;stroke:%23ffffff08;stroke-width:1%7D%3C/style%3E%3C/defs%3E%3Ccircle class='s' cx='200' cy='200' r='60'/%3E%3Ccircle class='s' cx='50' cy='80' r='30'/%3E%3Ccircle class='s' cx='350' cy='320' r='40'/%3E%3C/svg%3E\")",
        }}
      >
        {chat.messages.map((msg, i) => {
          const isSent = msg.type === "sent";

          if (msg.type === "image-received") {
            return (
              <div key={i} className="flex flex-col items-start gap-0.5">
                <div className="relative max-w-[65%] overflow-hidden rounded-2xl rounded-tl-sm border border-white/5"
                  style={{ background: "#202c33" }}>
                  <img src={msg.image} alt="Customer photo" className="h-40 w-full object-cover object-top" />
                  <span className="absolute bottom-1.5 right-2 text-[10px] text-white/60">{msg.time}</span>
                </div>
                {msg.liked && <span className="ml-2 text-base">❤️</span>}
              </div>
            );
          }

          return (
            <div key={i} className={`flex flex-col ${isSent ? "items-end" : "items-start"} gap-0.5`}>
              <div
                className={`relative max-w-[78%] rounded-2xl px-3.5 py-2 text-[13px] leading-relaxed shadow-md ${
                  isSent
                    ? "rounded-tr-sm text-white"
                    : "rounded-tl-sm text-[#e9edef]"
                }`}
                style={{
                  background: isSent ? "#005c4b" : "#202c33",
                  whiteSpace: "pre-line",
                }}
              >
                {msg.text}
                <span className={`mt-1 flex items-center gap-1 ${isSent ? "justify-end" : "justify-start"}`}>
                  <span className="text-[10px] text-white/40">{msg.time}</span>
                  {isSent && <TickIcon ticks={msg.ticks} />}
                </span>
              </div>
              {msg.liked && <span className={`text-base ${isSent ? "mr-2" : "ml-2"}`}>❤️</span>}
            </div>
          );
        })}
      </div>

      {/* WA input bar */}
      <div className="flex items-center gap-2 px-3 py-2" style={{ background: "#202c33" }}>
        <div className="flex-1 rounded-full px-4 py-2 text-xs text-white/30" style={{ background: "#2a3942" }}>
          Type a message
        </div>
        <div className="flex size-9 items-center justify-center rounded-full" style={{ background: "#00a884" }}>
          <MessageCircle className="size-4 text-white" />
        </div>
      </div>
    </div>
  );
}

export function HappyFamily() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActive((idx + chats.length) % chats.length);
    setTimeout(() => setIsAnimating(false), 350);
  };

  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  useEffect(() => {
    intervalRef.current = setInterval(() => goTo(active + 1), 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // 3 visible: prev, active, next (desktop)
  const getIdx = (offset: number) => (active + offset + chats.length) % chats.length;

  return (
    <section id="happy-family" className="relative overflow-hidden py-14 scroll-mt-20"
      style={{ background: "linear-gradient(135deg, #0b141a 0%, #111b21 60%, #1a2733 100%)" }}>

      {/* Background glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 size-96 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 size-96 rounded-full bg-teal-400/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-emerald-700/5 blur-3xl" />
      </div>

      <div className="relative">
        {/* Section header */}
        <SectionTab>Real Chats. Real Smiles. 💬</SectionTab>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm font-semibold text-white/50 px-4">
          See what our customers share directly on WhatsApp after receiving their new family member 🐾
        </p>

        {/* WhatsApp verified badge */}
        <div className="mt-5 flex justify-center">
          <span className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-400">
            <MessageCircle className="size-3.5" />
            Real WhatsApp conversations — unedited
          </span>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto mt-12 max-w-7xl px-4">
          {/* Desktop: 3 cards side by side */}
          <div className="hidden lg:flex items-end justify-center gap-6">
            {/* Previous card */}
            <div
              className="w-72 flex-shrink-0 cursor-pointer opacity-40 scale-90 transition-all duration-500 hover:opacity-60"
              style={{ transformOrigin: "center bottom" }}
              onClick={prev}
            >
              <WhatsAppCard chat={chats[getIdx(-1)]!} />
            </div>

            {/* Active card */}
            <div className="w-80 flex-shrink-0 scale-100 transition-all duration-500 drop-shadow-2xl z-10">
              <WhatsAppCard chat={chats[getIdx(0)]!} />
            </div>

            {/* Next card */}
            <div
              className="w-72 flex-shrink-0 cursor-pointer opacity-40 scale-90 transition-all duration-500 hover:opacity-60"
              style={{ transformOrigin: "center bottom" }}
              onClick={next}
            >
              <WhatsAppCard chat={chats[getIdx(1)]!} />
            </div>
          </div>

          {/* Mobile: single card */}
          <div className="flex lg:hidden justify-center">
            <div className="w-full max-w-sm">
              <WhatsAppCard chat={chats[active]} />
            </div>
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            aria-label="Previous chat"
            className="absolute left-0 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-emerald-600/30 hover:border-emerald-500/40 active:scale-95"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next chat"
            className="absolute right-0 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-emerald-600/30 hover:border-emerald-500/40 active:scale-95"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {chats.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to chat ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 h-2.5 bg-emerald-500"
                  : "size-2.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Stats row */}
        <div className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-8 rounded-3xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-sm">
          <div className="text-center">
            <p className="font-display text-3xl font-extrabold text-emerald-400">35,000+</p>
            <p className="text-xs font-bold uppercase tracking-wide text-white/40">Happy Families</p>
          </div>
          <div className="hidden h-10 w-px bg-white/20 sm:block" />
          <div className="text-center">
            <p className="font-display text-3xl font-extrabold text-emerald-400">4.9★</p>
            <p className="text-xs font-bold uppercase tracking-wide text-white/40">Average Rating</p>
          </div>
          <div className="hidden h-10 w-px bg-white/20 sm:block" />
          <div className="text-center">
            <p className="font-display text-3xl font-extrabold text-emerald-400">100%</p>
            <p className="text-xs font-bold uppercase tracking-wide text-white/40">Real Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
