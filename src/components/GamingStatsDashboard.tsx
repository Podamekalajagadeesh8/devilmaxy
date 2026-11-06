"use client";

import { motion } from "framer-motion";
import { Target, Zap, Flame, Medal } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

interface GamingStatsDashboardProps {
  stats?: Stat[];
}

export function GamingStatsDashboard({
  stats = [
    {
      icon: <Medal size={32} />,
      value: "2.5K+",
      label: "RANK POINTS",
      color: "text-yellow-400",
    },
    {
      icon: <Target size={32} />,
      value: "45.2%",
      label: "HEADSHOT RATIO",
      color: "text-red-400",
    },
    {
      icon: <Zap size={32} />,
      value: "2.8M+",
      label: "TOTAL ELIMINATIONS",
      color: "text-blue-400",
    },
    {
      icon: <Flame size={32} />,
      value: "324",
      label: "KILL STREAK",
      color: "text-orange-400",
    },
  ],
}: GamingStatsDashboardProps) {
  return (
    <section className="relative px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-black tracking-tight">
          Gaming Stats
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-xl"
              whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/5 opacity-0 transition group-hover:opacity-100" />

              <div className="relative z-10">
                <div className={`mb-4 inline-block rounded-lg bg-white/10 p-3 ${stat.color}`}>
                  {stat.icon}
                </div>

                <div className="mb-2 text-4xl font-black">{stat.value}</div>
                <div className="text-sm font-bold text-gray-400 tracking-widest">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
