"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Star } from "lucide-react";

interface Competitor {
  rank: number;
  name: string;
  points: number;
  wins: number;
  trend: "up" | "down" | "stable";
}

interface TournamentLeaderboardProps {
  tournament?: string;
  competitors?: Competitor[];
}

export function TournamentLeaderboard({
  tournament = "DMX Summer Championship 2024",
  competitors = [
    { rank: 1, name: "DevilMaxy", points: 12500, wins: 45, trend: "up" },
    { rank: 2, name: "ProPlayer99", points: 11800, wins: 42, trend: "down" },
    { rank: 3, name: "EliteGamer", points: 10200, wins: 38, trend: "stable" },
    { rank: 4, name: "NinjaKing", points: 9500, wins: 35, trend: "up" },
    { rank: 5, name: "ShadowKnight", points: 8900, wins: 33, trend: "down" },
  ],
}: TournamentLeaderboardProps) {
  return (
    <section className="relative px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center gap-3">
          <Trophy className="text-yellow-400" size={32} />
          <div>
            <h2 className="text-4xl font-black tracking-tight">Leaderboard</h2>
            <p className="text-sm text-gray-400">{tournament}</p>
          </div>
        </div>

        <motion.div className="space-y-3">
          {competitors.map((competitor, index) => (
            <motion.div
              key={competitor.rank}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] p-4 backdrop-blur-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 5, borderColor: "rgba(255,255,255,0.2)" }}
            >
              <div className="flex items-center gap-4">
                <div className="flex w-12 items-center justify-center">
                  {competitor.rank === 1 && (
                    <Trophy className="text-yellow-400" size={28} />
                  )}
                  {competitor.rank === 2 && (
                    <Medal className="text-gray-300" size={28} />
                  )}
                  {competitor.rank === 3 && (
                    <Medal className="text-orange-600" size={28} />
                  )}
                  {competitor.rank > 3 && (
                    <div className="text-2xl font-black text-gray-400">
                      #{competitor.rank}
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="font-black">{competitor.name}</div>
                  <div className="text-sm text-gray-400">
                    {competitor.wins} wins • {competitor.points.toLocaleString()}{" "}
                    pts
                  </div>
                </div>

                <div className={`text-sm font-bold ${
                  competitor.trend === "up"
                    ? "text-green-400"
                    : competitor.trend === "down"
                      ? "text-red-400"
                      : "text-gray-400"
                }`}>
                  {competitor.trend === "up" && "↑"}
                  {competitor.trend === "down" && "↓"}
                  {competitor.trend === "stable" && "→"}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
