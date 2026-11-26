"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export function CloudShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const clouds = Array.from({ length: 50 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 100 + 50,
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.3 + 0.1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      clouds.forEach((cloud) => {
        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y, cloud.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${cloud.opacity})`;
        ctx.fill();

        cloud.x += cloud.speed;
        if (cloud.x > canvas.width + cloud.size) {
          cloud.x = -cloud.size;
        }
      });
    };

    const animationFrame = requestAnimationFrame(animate);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
