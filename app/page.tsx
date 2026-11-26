"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { GlitchText } from "@/components/glitch-text";
import { Marquee } from "@/components/marquee";
import { Countdown } from "@/components/countdown";
import { artists } from "@/lib/lineup";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-black to-black opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_120%)]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm font-medium text-gray-300 mb-6">
              OCTOBER 2026 · LOS ANGELES
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-9xl font-black tracking-tighter mb-6"
          >
            <GlitchText text="NEXUS" className="text-7xl md:text-9xl font-black tracking-tighter" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 mb-10 max-w-xl mx-auto"
          >
            The ultimate electronic music festival. World-class artists, immersive experiences, and unforgettable nights.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/tickets">
              <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors">
                Get Tickets
              </button>
            </Link>
            <Link href="/lineup">
              <button className="px-8 py-4 rounded-full border border-white/20 text-white font-medium text-lg hover:bg-white/10 transition-colors">
                View Lineup
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Until We See You</h2>
            <p className="text-gray-400">Countdown to the festival</p>
          </div>
          <Countdown />
        </div>
      </section>

      {/* Lineup Teaser */}
      <section className="py-24 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Artists</h2>
              <p className="text-gray-400">World-class talent from around the globe</p>
            </div>
            <Link href="/lineup">
              <button className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors">
                View Full Lineup
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {artists.slice(0, 4).map((artist, i) => (
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
                    <span className="text-xs text-white/60 uppercase tracking-wider">{artist.genre}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{artist.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-12 px-4">
        <Marquee className="bg-black/50 backdrop-blur-sm border-y border-white/10">
          <div className="flex items-center gap-8">
            {["NEXUS", "ELECTRONIC MUSIC FESTIVAL", "LOS ANGELES", "OCTOBER 2026"].map((text, i) => (
              <span key={i} className="text-4xl font-black text-white/20 uppercase tracking-wider">
                {text}
              </span>
            ))}
          </div>
        </Marquee>
      </section>

      {/* Schedule Teaser */}
      <section className="py-24 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Festival Schedule</h2>
              <p className="text-gray-400">Three days of non-stop music</p>
            </div>
            <Link href="/schedule">
              <button className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors">
                View Full Schedule
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Friday", "Saturday", "Sunday"].map((day, i) => (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-4">{day}</h3>
                <ul className="space-y-3">
                  {["18:00", "20:00", "22:00"].map((time, j) => (
                    <li key={time} className="flex items-center gap-3 text-gray-400">
                      <span className="font-mono text-sm">{time}</span>
                      <span>Live performances</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for the Experience?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Secure your spot at the ultimate electronic music festival.
          </p>
          <Link href="/tickets">
            <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors">
              Get Tickets
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
