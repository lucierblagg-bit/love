"use client";

import { useState, useEffect } from "react";

const START_DATE = new Date("2025-07-11T00:00:00+08:00");

export default function CountdownTimer({ className }: { className?: string }) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      const now = new Date();
      const diff = now.getTime() - START_DATE.getTime();
      if (diff < 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <p className={className}>&nbsp;</p>;

  return (
    <p className={`font-sans text-sm md:text-base tracking-wide ${className || ""}`}>
      我们已经在一起{" "}
      <span className="font-medium">{time.days}</span> 天{" "}
      <span className="font-medium">{time.hours}</span> 小时{" "}
      <span className="font-medium">{time.minutes}</span> 分{" "}
      <span className="font-medium">{time.seconds}</span> 秒
    </p>
  );
}
