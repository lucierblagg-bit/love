"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import LandingHero from "@/components/LandingHero";
import Navigation from "@/components/Navigation";
import MusicPlayer from "@/components/MusicPlayer";
import CountdownTimer from "@/components/CountdownTimer";

const modules = [
  {
    icon: "📖",
    title: "我们的故事",
    desc: "记录每一个重要时刻",
    href: "/stories",
    color: "from-rose-light to-rose",
    border: "border-rose-light",
  },
  {
    icon: "📸",
    title: "照片墙",
    desc: "定格最美的瞬间",
    href: "/gallery",
    color: "from-lavender-light to-lavender",
    border: "border-lavender-light",
  },
  {
    icon: "💌",
    title: "悄悄话",
    desc: "那些甜蜜的对话",
    href: "/whisper",
    color: "from-gold-light to-gold",
    border: "border-gold-light",
  },
  {
    icon: "✨",
    title: "恋爱清单",
    desc: "想和你一起完成的事",
    href: "/bucket-list",
    color: "from-rose-light to-lavender-light",
    border: "border-rose-light",
  },
];

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("entered") === "true") {
      setShowLanding(false);
    }
    setLoaded(true);
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem("entered", "true");
    setShowLanding(false);
  };

  if (!loaded) return <div className="min-h-screen" style={{ backgroundColor: "#0a0a1a" }} />;

  return (
    <>
      <AnimatePresence mode="wait">
        {showLanding ? (
          <LandingHero key="landing" onEnter={handleEnter} />
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Navigation />
            <MusicPlayer />

            {/* Hero */}
            <section className="pt-16">
              <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/couple-hero/1600/900"
                  alt="我们的合照"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 pb-12 text-center">
                  <h1 className="font-serif text-3xl md:text-5xl text-warm tracking-wider mb-4">
                    威威威 <span className="text-rose">♥</span> 琴琴琴
                  </h1>
                  <CountdownTimer className="text-warm-light" />
                </div>
              </div>
            </section>

            {/* Module Cards */}
            <section className="max-w-5xl mx-auto px-6 py-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {modules.map((mod, i) => (
                  <motion.div
                    key={mod.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                  >
                    <Link href={mod.href}>
                      <div
                        className={`group relative bg-card rounded-2xl p-8 border ${mod.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
                      >
                        <div
                          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${mod.color} opacity-20 rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40`}
                        />
                        <span className="text-4xl mb-4 block">{mod.icon}</span>
                        <h3 className="font-serif text-xl text-warm mb-2">{mod.title}</h3>
                        <p className="text-sm text-warm-light">{mod.desc}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer className="text-center pb-12 text-sm text-warm-lighter">
              Made with <span className="text-rose">♥</span> by 威威威
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
