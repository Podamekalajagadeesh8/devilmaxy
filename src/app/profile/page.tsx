"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Trophy, Zap, Target, Flame } from "lucide-react";

export default function ProfilePage() {
  const stats = [
    { icon: Trophy, value: "2.5K", label: "Rank Points", color: "text-yellow-400" },
    { icon: Target, value: "45.2%", label: "Headshot Ratio", color: "text-red-400" },
    { icon: Zap, value: "2.8M", label: "Total Eliminations", color: "text-blue-400" },
    { icon: Flame, value: "324", label: "Kill Streak", color: "text-orange-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-3 py-3 sm:px-5 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xs text-gray-300 hover:text-white transition sm:text-base">
            <ArrowLeft size={16} className="sm:h-5 sm:w-5" />
            Back
          </Link>
          <h1 className="text-lg font-black sm:text-2xl">Player Profile</h1>
          <div className="w-16 sm:w-20" />
        </div>
      </div>

      <section className="px-4 py-16 pt-24 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Profile Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <motion.div
                className="h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-3xl sm:text-5xl font-black"
                whileHover={{ rotateX: 15, rotateY: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ perspective: "1000px" }}
              >
                DM
              </motion.div>

              <div className="flex-1">
                <h2 className="mb-2 text-5xl font-black">DevilMaxy</h2>
                <p className="mb-4 text-xl text-gray-400">Professional Gaming Content Creator</p>
                <div className="flex gap-4">
                  <a href="#" className="rounded-lg bg-red-600 px-4 py-2 font-bold hover:bg-red-500 transition">
                    Follow
                  </a>
                  <a href="#" className="rounded-lg border border-white/20 px-4 py-2 font-bold hover:border-white/40 transition">
                    Share
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="mb-16">
            <h3 className="mb-8 text-3xl font-black">Gaming Statistics</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ rotateX: 12, rotateY: -8, scale: 1.05, y: -4 }}
                    style={{ perspective: "1000px" }}
                    className="rounded-lg sm:rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 sm:p-6 backdrop-blur-xl"
                  >
                    <motion.div
                      whileHover={{ rotateZ: 10, scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`mb-3 sm:mb-4 inline-block rounded-lg bg-white/10 p-2 sm:p-3 ${stat.color}`}
                    >
                      <Icon size={24} className="sm:h-6 sm:w-6" />
                    </motion.div>
                    <div className="mb-2 text-3xl font-black">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="mb-8 text-3xl font-black">Achievements</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {["Grandmaster Rank", "1M Eliminations", "100 Win Streak"].map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-6 text-center backdrop-blur-xl"
                >
                  <Trophy className="mx-auto mb-3 text-yellow-400" size={32} />
                  <h4 className="font-black">{achievement}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
