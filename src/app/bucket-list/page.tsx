"use client";

import { motion } from "framer-motion";
import { bucketList } from "@/data/bucket-list";
import PageWrapper from "@/components/PageWrapper";

export default function BucketListPage() {
  const completed = bucketList.filter((item) => item.completed);
  const pending = bucketList.filter((item) => !item.completed);

  return (
    <PageWrapper>
      <div className="max-w-2xl mx-auto px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-3xl md:text-4xl text-center text-warm mb-4"
        >
          恋爱清单
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-sm text-warm-lighter mb-12"
        >
          想和你一起完成的每一件小事
        </motion.p>

        {/* Pending items */}
        <div className="space-y-3 mb-12">
          {pending.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="flex items-center gap-4 bg-card rounded-xl p-4 border border-rose-light/20 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-6 h-6 rounded-full border-2 border-rose-light/50 flex-shrink-0" />
              <span className="text-warm">{item.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Completed items */}
        {completed.length > 0 && (
          <>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-rose-light/30" />
              <span className="text-xs text-warm-lighter tracking-wide">已完成</span>
              <div className="h-px flex-1 bg-rose-light/30" />
            </div>
            <div className="space-y-3">
              {completed.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-4 bg-card/60 rounded-xl p-4 border border-rose-light/10"
                >
                  <div className="w-6 h-6 rounded-full bg-rose-light flex-shrink-0 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-warm-lighter line-through">{item.text}</span>
                  {item.completedDate && (
                    <span className="ml-auto text-xs text-warm-lighter/60 flex-shrink-0">
                      {item.completedDate}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </PageWrapper>
  );
}
