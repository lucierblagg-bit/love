"use client";

import { motion } from "framer-motion";
import { whispers } from "@/data/whispers";
import PageWrapper from "@/components/PageWrapper";

export default function WhisperPage() {
  return (
    <PageWrapper>
      <div className="max-w-lg mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-3xl md:text-4xl text-center text-warm mb-4"
        >
          悄悄话
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-sm text-warm-lighter mb-12"
        >
          那些只属于我们的甜蜜对话
        </motion.p>

        {/* Chat area */}
        <div className="bg-cream-dark/50 rounded-2xl p-4 md:p-6 space-y-4 border border-rose-light/20">
          {/* Chat header */}
          <div className="text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-cream text-xs text-warm-lighter">
              今天
            </span>
          </div>

          {whispers.map((w, i) => {
            const isWeiwei = w.sender === "weiwei";
            return (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, y: 15, x: isWeiwei ? 20 : -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className={`flex ${isWeiwei ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[75%] ${isWeiwei ? "order-1" : ""}`}>
                  {/* Sender name */}
                  <p
                    className={`text-xs mb-1 text-warm-lighter ${
                      isWeiwei ? "text-right" : "text-left"
                    }`}
                  >
                    {isWeiwei ? "威威威" : "琴琴琴"}
                  </p>
                  {/* Bubble */}
                  <div
                    className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      isWeiwei
                        ? "bg-lavender-light/60 text-warm rounded-br-md"
                        : "bg-rose-light/60 text-warm rounded-bl-md"
                    }`}
                  >
                    {w.message}
                  </div>
                  <p
                    className={`text-[10px] mt-1 text-warm-lighter/60 ${
                      isWeiwei ? "text-right" : "text-left"
                    }`}
                  >
                    {w.time}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
