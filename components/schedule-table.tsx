"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Sun, Moon, Clock, MapPin } from "lucide-react";

const days = ["Friday", "Saturday", "Sunday"];
const stages = ["Main Stage", "Techno Tent", "Ambient Garden", "Rooftop Lounge"];

const schedule = [
  {
    day: 0,
    stage: 0,
    time: "18:00",
    artist: "Neon Pulse",
    genre: "Synthwave",
    type: "Headliner",
  },
  {
    day: 0,
    stage: 1,
    time: "19:00",
    artist: "Echo Chamber",
    genre: "Ambient",
    type: "Support",
  },
  {
    day: 0,
    stage: 2,
    time: "20:00",
    artist: "Digital Dreams",
    genre: "Techno",
    type: "Support",
  },
  {
    day: 1,
    stage: 0,
    time: "12:00",
    artist: "Cyber Soul",
    genre: "House",
    type: "Support",
  },
  {
    day: 1,
    stage: 0,
    time: "18:00",
    artist: "Laser Grid",
    genre: "Trance",
    type: "Headliner",
  },
  {
    day: 1,
    stage: 0,
    time: "22:00",
    artist: "Void Walker",
    genre: "Dubstep",
    type: "Headliner",
  },
  {
    day: 2,
    stage: 0,
    time: "18:00",
    artist: "Pixel Heart",
    genre: "Chillwave",
    type: "Support",
  },
  {
    day: 2,
    stage: 1,
    time: "19:00",
    artist: "Neural Network",
    genre: "Experimental",
    type: "Support",
  },
];

export function ScheduleTable() {
  const [day, setDay] = useState(0);
  const [stage, setStage] = useState(0);

  const events = schedule.filter((e) => e.day === day && e.stage === stage);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {days.map((d, i) => (
          <button
            key={d}
            onClick={() => setDay(i)}
            className={cn(
              "px-6 py-3 rounded-xl text-sm font-medium transition-colors",
              day === i
                ? "bg-white text-black"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            )}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {stages.map((s, i) => (
          <button
            key={s}
            onClick={() => setStage(i)}
            className={cn(
              "px-6 py-3 rounded-xl text-sm font-medium transition-colors",
              stage === i
                ? "bg-white text-black"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            )}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {events.map((event, i) => (
          <motion.div
            key={`${event.day}-${event.stage}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="size-4" />
              <span className="font-mono">{event.time}</span>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-white">{event.artist}</h4>
              <p className="text-sm text-gray-400">{event.genre}</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300">
              {event.type}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}
