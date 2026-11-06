"use client";

import { motion } from "framer-motion";
import { Play, Video } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export function HeroSection({
  title = "GAMING CONTENT CREATOR",
  subtitle = "DevilMaxy",
  description = "Join me on my journey through gaming excellence. Streams, highlights, and crazy moments.",
}: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black pt-20"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-5 text-center lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6 inline-block">
          <div className="rounded-full border border-red-500/50 bg-red-500/10 px-6 py-2 text-sm font-bold tracking-widest text-red-400">
            🔴 LIVE NOW
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mb-4 text-6xl font-black tracking-tight md:text-7xl lg:text-8xl"
        >
          {subtitle}
          <span className="block text-red-500">DMX</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mb-8 max-w-2xl text-xl text-gray-300 md:text-2xl"
        >
          {title}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mb-12 max-w-2xl text-base text-gray-400"
        >
          {description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#live"
            className="group flex items-center justify-center gap-2 rounded-xl bg-red-600 px-8 py-4 text-lg font-black transition hover:bg-red-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.3)]"
          >
            <Play size={20} fill="white" />
            WATCH LIVE
          </a>

          <a
            href="#videos"
            className="flex items-center justify-center gap-2 rounded-xl border-2 border-red-600 px-8 py-4 text-lg font-black transition hover:bg-red-600/10"
          >
            <Video size={20} />
            LATEST VIDEOS
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-3 gap-8"
        >
          {[
            { value: "100K+", label: "Subscribers" },
            { value: "450+", label: "Videos" },
            { value: "25M+", label: "Views" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-black text-red-500 md:text-4xl">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
