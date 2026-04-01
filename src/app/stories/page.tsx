"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { stories } from "@/data/stories";
import PageWrapper from "@/components/PageWrapper";

export default function StoriesPage() {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-3xl md:text-4xl text-center text-warm mb-16"
        >
          我们的故事
        </motion.h1>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-rose-light/50 md:-translate-x-px" />

          {stories.map((story, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`relative mb-16 pl-16 md:pl-0 ${
                  isLeft ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
                }`}
              >
                {/* Dot */}
                <div
                  className="absolute left-[18px] md:left-1/2 top-1 w-5 h-5 rounded-full bg-card border-[3px] border-rose md:-translate-x-[10px] z-10"
                />

                {/* Card */}
                <Link href={`/stories/${story.id}`}>
                  <div className="group bg-card rounded-xl p-6 border border-rose-light/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <span className="text-xs text-warm-lighter font-sans tracking-wide">
                      {story.date}
                    </span>
                    <h2 className="font-serif text-xl text-warm mt-2 mb-2 group-hover:text-rose-dark transition-colors">
                      {story.title}
                    </h2>
                    <p className="text-sm text-warm-light leading-relaxed line-clamp-2">
                      {story.content[0]}
                    </p>
                    <span className="inline-block mt-4 text-xs text-rose-dark tracking-wide">
                      查看详情 →
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
