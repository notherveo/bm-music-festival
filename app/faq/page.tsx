"use client";

import { useState } from "react";
import { motion } from "motion/react";

const faqs = [
  {
    question: "When is the festival?",
    answer: "The NEXUS Festival takes place over three days in October 2026.",
  },
  {
    question: "Where is it located?",
    answer: "Downtown Los Angeles, California. Check the venue page for exact location and transportation options.",
  },
  {
    question: "What is included in the ticket?",
    answer: "All tickets include access to all stages, the festival app, and standard entry. VIP and Platinum tickets include additional perks.",
  },
  {
    question: "Can I bring my own drinks?",
    answer: "No, outside food and drinks are not permitted. There are plenty of food and beverage vendors on-site.",
  },
  {
    question: "Is there a dress code?",
    answer: "We encourage you to dress comfortably and expressively. The festival is casual and fun!",
  },
];



export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pt-32 pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">FAQ</h1>
          <p className="text-gray-400">Everything you need to know</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                {openIndex === i && (
                  <p className="text-gray-400">{faq.answer}</p>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
