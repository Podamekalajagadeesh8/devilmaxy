"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PlatformCardProps {
  platform: string;
  icon: ReactNode;
  stats: Array<{
    label: string;
    value: string;
  }>;
  isLive?: boolean;
  actionText?: string;
  actionUrl?: string;
}

export function PlatformCard({
  platform,
  icon,
  stats,
  isLive,
  actionText = "Visit",
  actionUrl = "#",
}: PlatformCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-xl transition hover:border-white/20"
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/5 opacity-0 transition group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-6 flex items-start justify-between">
          <div className="text-4xl">{icon}</div>
          {isLive && (
            <div className="flex items-center gap-2 rounded-full bg-red-600/20 px-3 py-1">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-bold text-red-400">LIVE</span>
            </div>
          )}
        </div>

        <h3 className="mb-6 text-2xl font-black tracking-tight">{platform}</h3>

        <div className="mb-6 space-y-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-gray-400">{stat.label}</span>
              <span className="font-bold text-white">{stat.value}</span>
            </div>
          ))}
        </div>

        <a
          href={actionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-xs font-bold tracking-wide transition hover:bg-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
        >
          {actionText}
          <span>→</span>
        </a>
      </div>
    </motion.div>
  );
}
