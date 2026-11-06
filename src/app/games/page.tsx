"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GamesPage() {
  const games = [
    {
      name: "Free Fire",
      category: "Battle Royale",
      hours: "2,400+",
      rank: "Grandmaster",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "PUBG Mobile",
      category: "Battle Royale",
      hours: "1,850+",
      rank: "Conqueror",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Call of Duty Mobile",
      category: "FPS",
      hours: "1,200+",
      rank: "Master",
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Valorant",
      category: "Tactical FPS",
      hours: "800+",
      rank: "Radiant",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=600&auto=format&fit=crop",
    },
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
          <h1 className="text-lg font-black sm:text-2xl">Games Hub</h1>
          <div className="w-16 sm:w-20" />
        </div>
      </div>

      <section className="px-4 py-16 pt-24 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="mb-3 text-2xl font-black sm:text-4xl md:text-5xl">Games I Play</h2>
            <p className="text-sm text-gray-400 sm:text-lg">
              Explore the games that made me a top player
            </p>
          </motion.div>

          <div className="grid gap-5 sm:gap-8 sm:grid-cols-2">
            {games.map((game, index) => (
              <motion.div
                key={game.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ rotateX: 8, rotateY: -8, y: -6, scale: 1.03 }}
                style={{ perspective: "1000px" }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl">
                  <div className="relative h-0 w-full pb-[100%] bg-black">
                    <img
                      src={game.image}
                      alt={game.name}
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="mb-2 text-4xl font-black">{game.name}</h3>
                      <p className="mb-6 text-lg text-gray-300">{game.category}</p>

                      <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-4">
                        <div>
                          <p className="text-sm text-gray-400">Hours Played</p>
                          <p className="text-2xl font-black text-red-400">{game.hours}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Best Rank</p>
                          <p className="text-2xl font-black text-yellow-400">{game.rank}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
