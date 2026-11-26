"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The most incredible festival experience of my life. The energy was unmatched!",
    author: "Alex M.",
    role: "Music Producer",
    image: "https://picsum.photos/seed/alex/100/100",
  },
  {
    quote: "From the lineup to the atmosphere, everything exceeded my expectations.",
    author: "Sarah K.",
    role: "DJ",
    image: "https://picsum.photos/seed/sarah/100/100",
  },
  {
    quote: "A true celebration of electronic music. I'll be back next year for sure!",
    author: "Marcus T.",
    role: "Festival Goer",
    image: "https://picsum.photos/seed/marcus/100/100",
  },
];

export function AnimatedTestimonials() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, i) => (
        <motion.div
          key={testimonial.author}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className="relative p-6 rounded-2xl bg-white/5 border border-white/10"
        >
          <Quote className="size-8 text-white/20 mb-4" />
          <p className="text-lg text-gray-300 mb-6">"{testimonial.quote}"</p>
          <div className="flex items-center gap-4">
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="size-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-bold text-white">{testimonial.author}</h4>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
