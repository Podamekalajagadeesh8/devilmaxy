"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Gamepad2, Medal, Trophy, Users } from "lucide-react";

export default function TournamentsPage() {
  const tournaments = [
    {
      name: "DMX Summer Clash",
      format: "Squad Battle Royale",
      prize: "$1,200",
      date: "Aug 24, 2026",
      slots: "32 Teams",
      status: "Register Open",
    },
    {
      name: "Night Arena Cup",
      format: "5v5 Tactical Mode",
      prize: "$800",
      date: "Aug 30, 2026",
      slots: "16 Teams",
      status: "Filling Fast",
    },
    {
      name: "DMX Community Scrim",
      format: "Friendly Ranked Clash",
      prize: "Discord Rewards",
      date: "Sep 02, 2026",
      slots: "48 Players",
      status: "Open",
    },
  ];

  const leaderboard = [
    { rank: 1, name: "DevilMaxy", points: 12500, wins: 45, trend: "up" },
    { rank: 2, name: "ProPlayer99", points: 11800, wins: 42, trend: "down" },
    { rank: 3, name: "EliteGamer", points: 10200, wins: 38, trend: "stable" },
    { rank: 4, name: "NinjaKing", points: 9500, wins: 35, trend: "up" },
    { rank: 5, name: "ShadowKnight", points: 8900, wins: 33, trend: "down" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-gray-300 transition hover:text-white">
            <ArrowLeft size={20} />
            Back
          </Link>
          <h1 className="text-2xl font-black">Tournaments</h1>
          <div className="w-20" />
        </div>
      </div>

      <section className="px-4 py-24 pt-28 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-500/10 via-black to-purple-500/10 p-6 md:p-8"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.45em] text-red-400">
                  Esports Circuit
                </p>
                <h2 className="text-4xl font-black md:text-5xl">Join the next DMX tournament</h2>
              </div>

              <button className="rounded-full bg-gradient-to-r from-red-600 to-pink-600 px-6 py-3 text-sm font-black text-white shadow-[0_0_35px_rgba(239,68,68,0.35)]">
                Register Team
              </button>
            </div>
          </motion.div>

          <div className="mb-14 grid gap-5 md:grid-cols-3">
            {tournaments.map((tournament, index) => (
              <motion.div
                key={tournament.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-2 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-red-300">
                    {tournament.status}
                  </div>
                  <Trophy className="text-yellow-400" size={22} />
                </div>

                <h3 className="mb-3 text-2xl font-black text-white">{tournament.name}</h3>
                <div className="mb-2 text-sm text-gray-300">{tournament.format}</div>

                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-red-400" />
                    {tournament.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-purple-400" />
                    {tournament.slots}
                  </div>
                  <div className="flex items-center gap-2">
                    <Gamepad2 size={16} className="text-green-400" />
                    Prize: {tournament.prize}
                  </div>
                </div>

                <button className="mt-5 w-full rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-black text-red-200 transition hover:bg-red-500/20">
                  Join Tournament
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="mb-4 text-4xl font-black">Leaderboard</h2>
            <p className="mb-6 text-lg text-gray-400">DMX Summer Championship 2026</p>
          </motion.div>

          <div className="space-y-4">
            {leaderboard.map((player, index) => (
              <motion.div
                key={player.rank}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] p-6 backdrop-blur-xl transition hover:border-white/20"
              >
                <div className="flex items-center gap-6">
                  <div className="flex w-16 items-center justify-center">
                    {player.rank === 1 && <Trophy className="text-yellow-400" size={36} />}
                    {player.rank === 2 && <Medal className="text-gray-300" size={36} />}
                    {player.rank === 3 && <Medal className="text-orange-600" size={36} />}
                    {player.rank > 3 && <div className="text-3xl font-black text-gray-400">#{player.rank}</div>}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-black">{player.name}</h3>
                    <p className="text-sm text-gray-400">
                      {player.wins} wins • {player.points.toLocaleString()} pts
                    </p>
                  </div>

                  <div
                    className={`text-2xl font-black ${
                      player.trend === "up"
                        ? "text-green-400"
                        : player.trend === "down"
                          ? "text-red-400"
                          : "text-gray-400"
                    }`}
                  >
                    {player.trend === "up" && "↑"}
                    {player.trend === "down" && "↓"}
                    {player.trend === "stable" && "→"}
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
