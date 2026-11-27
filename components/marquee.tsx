"use client";
import * as React from "react";

import { motion } from "motion/react";

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
}: {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
}) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 bg-black/50 backdrop-blur-sm border-y border-white/10",
        className
      )}
      data-animate={true}
      data-pause={pauseOnHover}
    >
      <div
        className={cn(
          "animate-marquee flex items-center whitespace-nowrap gap-8",
          reverse && "animate-marquee-reverse"
        )}
      >
        {[...React.Children.toArray(children), ...React.Children.toArray(children)].map((child, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex items-center gap-8"
          >
            {child}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}
