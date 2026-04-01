"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  phase: number;
}

export default function LandingHero({ onEnter }: { onEnter: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.3 + 0.1,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = Date.now() * 0.001;
      particles.forEach((p) => {
        const flicker = 0.5 + 0.5 * Math.sin(t * 1.5 + p.phase);
        const alpha = p.opacity * flicker;
        p.y -= p.speed;
        p.x += Math.sin(t + p.phase) * 0.15;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 160, 160, ${alpha})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0a0a1a" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-serif text-4xl md:text-7xl tracking-wider"
          style={{ color: "#F2D7D5" }}
        >
          威威威{" "}
          <span style={{ color: "#D4A0A0" }}>♥</span>{" "}
          琴琴琴
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8"
        >
          <CountdownTimer className="text-warm-lighter" />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          onClick={onEnter}
          className="mt-14 px-10 py-3.5 rounded-full font-sans text-sm tracking-[0.2em] transition-all duration-300 hover:shadow-lg"
          style={{
            border: "1px solid rgba(212, 160, 160, 0.4)",
            color: "#F2D7D5",
          }}
          whileHover={{
            backgroundColor: "rgba(212, 160, 160, 0.1)",
            borderColor: "rgba(212, 160, 160, 0.8)",
            scale: 1.03,
          }}
          whileTap={{ scale: 0.97 }}
        >
          进入我们的故事
        </motion.button>
      </div>
    </motion.div>
  );
}
