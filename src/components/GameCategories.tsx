"use client";

import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

interface Game {
  id: string;
  name: string;
  image: string;
  category: string;
  hoursPlayed: string;
  bestRank?: string;
}

interface GameCategoriesProps {
  games?: Game[];
}

export function GameCategories({
  games = [
    {
      id: "1",
      name: "Free Fire",
      image:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=500&auto=format&fit=crop",
      category: "Battle Royale",
      hoursPlayed: "2,400+",
      bestRank: "Grandmaster",
    },
    {
      id: "2",
      name: "PUBG Mobile",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=500&auto=format&fit=crop",
      category: "Battle Royale",
      hoursPlayed: "1,850+",
      bestRank: "Conqueror",
    },
    {
      id: "3",
      name: "Call of Duty Mobile",
      image:
        "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=500&auto=format&fit=crop",
      category: "FPS",
      hoursPlayed: "1,200+",
      bestRank: "Master",
    },
    {
      id: "4",
      name: "Valorant",
      image:
        "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=500&auto=format&fit=crop",
      category: "Tactical FPS",
      hoursPlayed: "800+",
      bestRank: "Radiant",
    },
  ],
}: GameCategoriesProps) {
  return (
    <section className="relative px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-black tracking-tight">
          Games I Play
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <motion.div
              key={game.id}
              className="group relative overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative h-0 w-full overflow-hidden bg-black pb-[150%]">
                <img
                  src={game.image}
                  alt={game.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "none";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="text-xl font-black">{game.name}</h3>
                  <p className="text-sm text-gray-300">{game.category}</p>

                  <div className="mt-3 space-y-1 border-t border-white/10 pt-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Hours Played</span>
                      <span className="font-bold text-red-400">
                        {game.hoursPlayed}
                      </span>
                    </div>
                    {game.bestRank && (
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Best Rank</span>
                        <span className="font-bold text-yellow-400">
                          {game.bestRank}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
