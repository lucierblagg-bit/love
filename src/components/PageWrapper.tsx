"use client";

import Navigation from "./Navigation";
import MusicPlayer from "./MusicPlayer";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="pt-16 min-h-screen">{children}</main>
      <MusicPlayer />
    </>
  );
}
