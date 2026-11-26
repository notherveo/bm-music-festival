"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-12-31T20:00:00");
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (value: number) =>
    String(value).padStart(2, "0");

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item) => (
        <div
          key={item.label}
          className="bg-white/5 rounded-xl p-6 border border-white/10"
        >
          <div className="text-4xl md:text-5xl font-bold font-mono">
            {format(item.value)}
          </div>
          <div className="text-sm text-gray-400 mt-2">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
