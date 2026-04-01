"use client";

import { useState, useRef } from "react";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* 在 public 文件夹放入 music.mp3 即可播放 */}
      <audio ref={audioRef} src="/music.mp3" loop />
      <button
        onClick={toggle}
        className="w-12 h-12 rounded-full bg-card shadow-lg border border-rose-light/40 flex items-center justify-center text-rose-dark hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="播放音乐"
      >
        <svg
          viewBox="0 0 24 24"
          className={`w-5 h-5 ${playing ? "animate-spin" : ""}`}
          style={{ animationDuration: "3s" }}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      </button>
    </div>
  );
}
