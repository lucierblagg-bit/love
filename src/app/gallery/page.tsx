"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";

const galleryImages = [
  { id: 1, src: "https://picsum.photos/seed/lg1/400/600", w: 400, h: 600 },
  { id: 2, src: "https://picsum.photos/seed/lg2/400/400", w: 400, h: 400 },
  { id: 3, src: "https://picsum.photos/seed/lg3/400/500", w: 400, h: 500 },
  { id: 4, src: "https://picsum.photos/seed/lg4/400/350", w: 400, h: 350 },
  { id: 5, src: "https://picsum.photos/seed/lg5/400/550", w: 400, h: 550 },
  { id: 6, src: "https://picsum.photos/seed/lg6/400/450", w: 400, h: 450 },
  { id: 7, src: "https://picsum.photos/seed/lg7/400/600", w: 400, h: 600 },
  { id: 8, src: "https://picsum.photos/seed/lg8/400/400", w: 400, h: 400 },
  { id: 9, src: "https://picsum.photos/seed/lg9/400/500", w: 400, h: 500 },
  { id: 10, src: "https://picsum.photos/seed/lg10/400/350", w: 400, h: 350 },
  { id: 11, src: "https://picsum.photos/seed/lg11/400/550", w: 400, h: 550 },
  { id: 12, src: "https://picsum.photos/seed/lg12/400/450", w: 400, h: 450 },
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<(typeof galleryImages)[0] | null>(null);

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-3xl md:text-4xl text-center text-warm mb-12"
        >
          照片墙
        </motion.h1>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setSelected(img)}
            >
              <div className="relative overflow-hidden rounded-xl border border-rose-light/20">
                <Image
                  src={img.src}
                  alt={`照片 ${img.id}`}
                  width={img.w}
                  height={img.h}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-rose-dark/0 group-hover:bg-rose-dark/10 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-pointer"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.src.replace("/400/", "/1200/")}
                alt="照片大图"
                width={1200}
                height={Math.round((selected.h / selected.w) * 1200)}
                className="w-full h-auto rounded-lg object-contain max-h-[85vh]"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-card text-warm flex items-center justify-center text-sm shadow-lg hover:bg-rose-light transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
