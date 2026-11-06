"use client";

import { motion } from "framer-motion";
import { Radio, Users, MessageSquare } from "lucide-react";

export function LiveStatusBanner() {
  // Replace with your actual live status check
  const isLive = false;

  if (!isLive) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-20 left-0 right-0 z-40 mx-auto w-fit"
    >
      <div className="flex items-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 shadow-[0_0_40px_rgba(239,68,68,0.5)]">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 animate-pulse rounded-full bg-white" />
          <span className="font-black text-white">🔴 LIVE NOW</span>
        </div>
        <span className="text-sm text-white opacity-90">Watching with 2.4K viewers</span>
      </div>
    </motion.div>
  );
}
