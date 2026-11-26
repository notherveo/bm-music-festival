"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export function Cover() {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        img.src = "https://picsum.photos/seed/cover/1200/600";
        img.onload = () => setLoaded(true);
      }
    });

    observer.observe(img);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-2xl">
      <img
        ref={imgRef}
        src="https://picsum.photos/seed/cover/1200/600"
        alt="Cover"
        className={cn(
          "w-full h-full object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}
