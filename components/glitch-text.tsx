"use client";

import { motion } from "motion/react";

export function GlitchText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

  return (
    <div className="relative inline-block">
      <span className={className}>{text}</span>
      <span className="absolute top-0 left-0 w-full h-full opacity-0 glitch-layer" aria-hidden="true">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="absolute top-0 left-0 w-full text-center"
            style={{ left: `${i * 0.5}%` }}
          >
            {chars[Math.floor(Math.random() * chars.length)]}
          </span>
        ))}
      </span>
    </div>
  );
}
