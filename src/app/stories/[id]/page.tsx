"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { stories } from "@/data/stories";
import PageWrapper from "@/components/PageWrapper";

export default function StoryDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const index = stories.findIndex((s) => s.id === id);
  const story = stories[index];

  if (!story) {
    notFound();
  }

  const prev = index > 0 ? stories[index - 1] : null;
  const next = index < stories.length - 1 ? stories[index + 1] : null;

  return (
    <PageWrapper>
      {/* Cover Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[50vh] md:h-[60vh]"
      >
        <Image
          src={story.coverImage}
          alt={story.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/20 to-transparent" />
      </motion.div>

      <div className="max-w-2xl mx-auto px-6 -mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-sm text-warm-lighter tracking-wide">{story.date}</span>
          <h1 className="font-serif text-3xl md:text-4xl text-warm mt-2 mb-8">
            {story.title}
          </h1>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-6"
        >
          {story.content.map((paragraph, i) => (
            <p key={i} className="text-warm-light leading-loose text-base">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Story Images */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 space-y-6"
        >
          {story.images.map((img, i) => (
            <div key={i} className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={img}
                alt={`${story.title} - ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-16 mb-20 pt-8 border-t border-rose-light/30">
          {prev ? (
            <Link
              href={`/stories/${prev.id}`}
              className="text-sm text-warm-light hover:text-rose-dark transition-colors"
            >
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/stories/${next.id}`}
              className="text-sm text-warm-light hover:text-rose-dark transition-colors"
            >
              {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
