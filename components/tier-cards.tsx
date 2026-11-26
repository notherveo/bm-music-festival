"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const tiers = [
  {
    name: "General",
    price: "$89",
    features: [
      "Access to all stages",
      "Festival app access",
      "Standard entry",
    ],
    popular: false,
  },
  {
    name: "VIP",
    price: "$199",
    features: [
      "All General perks",
      "Fast-track entry",
      "Exclusive lounge access",
      "Premium seating",
      "Complimentary drinks",
    ],
    popular: true,
  },
  {
    name: "Platinum",
    price: "$399",
    features: [
      "All VIP perks",
      "Meet & greet with artists",
      "Private after-party",
      "Exclusive merchandise",
      "Priority support",
    ],
    popular: false,
  },
];

export function TierCards() {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {tiers.map((tier, i) => (
          <button
            key={tier.name}
            onClick={() => setSelected(i)}
            className={cn(
              "flex-1 px-6 py-4 rounded-xl text-sm font-medium transition-colors",
              selected === i
                ? "bg-white text-black"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            )}
          >
            {tier.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "relative p-6 rounded-2xl border transition-colors",
              tier.popular
                ? "border-white bg-white text-black"
                : "border-white/10 bg-white/5"
            )}
          >
            {tier.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium bg-black text-white">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
            <div className="text-4xl font-bold mb-4">{tier.price}</div>
            <ul className="space-y-2 mb-6">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <Check className="size-4 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setSelected(i)}
              className={cn(
                "w-full py-3 rounded-xl font-medium transition-colors",
                tier.popular
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white/10 text-white hover:bg-white/20"
              )}
            >
              Select {tier.name}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}
