"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export function BackgroundLines() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const lines = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      width: Math.random() * 100 + 50,
      height: Math.random() * 100 + 50,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      delay: Math.random() * 2,
    }));

    const animate = () => {
      lines.forEach((line) => {
        const element = container.querySelector(`[data-line="${line.id}"]`);
        if (element) {
          element.style.transform = `translate(${line.x}%, ${line.y}%) rotate(${line.rotation}deg)`;
        }
      });
    };

    animate();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {lines.map((line) => (
        <motion.div
          key={line.id}
          data-line={line.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: line.delay, duration: 0.5 }}
          className="absolute rounded-full bg-white/10"
          style={{
            width: line.width,
            height: line.height,
            left: line.x,
            top: line.y,
            rotate: line.rotation,
          }}
        />
      ))}
    </div>
  );
}
