"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Music, Mic2, Radio, Video } from "lucide-react";

const artists = [
  {
    name: "Neon Pulse",
    genre: "Synthwave",
    image: "https://picsum.photos/seed/neon/400/400",
    icon: Music,
  },
  {
    name: "Echo Chamber",
    genre: "Ambient",
    image: "https://picsum.photos/seed/echo/400/400",
    icon: Radio,
  },
  {
    name: "Digital Dreams",
    genre: "Techno",
    image: "https://picsum.photos/seed/digital/400/400",
    icon: Video,
  },
  {
    name: "Cyber Soul",
    genre: "House",
    image: "https://picsum.photos/seed/cyber/400/400",
    icon: Mic2,
  },
  {
    name: "Laser Grid",
    genre: "Trance",
    image: "https://picsum.photos/seed/laser/400/400",
    icon: Music,
  },
  {
    name: "Void Walker",
    genre: "Dubstep",
    image: "https://picsum.photos/seed/void/400/400",
    icon: Radio,
  },
  {
    name: "Pixel Heart",
    genre: "Chillwave",
    image: "https://picsum.photos/seed/pixel/400/400",
    icon: Video,
  },
  {
    name: "Neural Network",
    genre: "Experimental",
    image: "https://picsum.photos/seed/neural/400/400",
    icon: Mic2,
  },
];

const genres = ["All", "Synthwave", "Ambient", "Techno", "House", "Trance", "Dubstep", "Chillwave", "Experimental"];

export function LineupGrid() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? artists : artists.filter((a) => a.genre === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setFilter(genre)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              filter === genre
                ? "bg-white text-black"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            )}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((artist, i) => (
          <motion.div
            key={artist.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl"
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 mb-2">
                <artist.icon className="size-4 text-white/60" />
                <span className="text-xs text-white/60 uppercase tracking-wider">{artist.genre}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{artist.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}
