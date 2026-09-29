"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function BlogFaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="border-b border-[var(--fg-primary)] border-opacity-10"
        >
          <button
            className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <span
              className={`text-sm md:text-base font-light pr-8 transition-colors duration-300 ${
                openIndex === idx
                  ? "text-[#251a23]"
                  : "text-[#251a23]/80 group-hover:text-[#251a23]"
              }`}
            >
              {faq.question}
            </span>

            {/* Circular Plus/Minus Icon */}
            <span className="shrink-0 w-5 h-5 rounded-full bg-[#245171] text-white flex items-center justify-center transition-transform duration-300">
              {openIndex === idx ? (
                <Minus size={12} strokeWidth={3} />
              ) : (
                <Plus size={12} strokeWidth={3} />
              )}
            </span>
          </button>

          <AnimatePresence>
            {openIndex === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-sm text-[#251a23]/60 font-light pb-5 pr-12 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
