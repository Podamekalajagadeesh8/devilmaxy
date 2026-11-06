"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Gamepad2 } from "lucide-react";

export default function SchedulePage() {
  const streams = [
    {
      day: "Monday",
      date: "Aug 19",
      time: "8:00 PM",
      game: "Free Fire Ranked",
      status: "Live Match",
    },
    {
      day: "Wednesday",
      date: "Aug 21",
      time: "7:00 PM",
      game: "Free Fire Tournament",
      status: "Practice Scrim",
    },
    {
      day: "Friday",
      date: "Aug 23",
      time: "9:00 PM",
      game: "Custom Rooms",
      status: "Community Stream",
    },
    {
      day: "Sunday",
      date: "Aug 25",
      time: "6:00 PM",
      game: "Community Stream",
      status: "Highlight Review",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-gray-300 transition hover:text-white">
            <ArrowLeft size={20} />
            Back
          </Link>
          <h1 className="text-2xl font-black">Schedule</h1>
          <div className="w-20" />
        </div>
      </div>

      <section className="px-4 py-24 pt-28 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 flex items-center gap-3 sm:mb-16 sm:gap-4"
          >
            <Calendar className="text-green-500" size={32} />
            <div>
              <h2 className="text-3xl font-black sm:text-5xl">Stream Schedule</h2>
              <p className="text-sm text-gray-400 sm:text-lg">When I&apos;m streaming and what I&apos;m playing</p>
            </div>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {streams.map((stream, index) => (
              <motion.div
                key={stream.day}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-green-500/30 bg-gradient-to-r from-green-500/10 to-emerald-500/5 p-6 backdrop-blur-xl transition hover:border-green-500/50"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.35em] text-green-400">
                      {stream.status}
                    </div>
                    <h3 className="mt-2 text-2xl font-black text-white">{stream.day}</h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-gray-300">
                    {stream.date}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xl font-black text-green-400">
                  <Clock size={20} />
                  {stream.time}
                </div>

                <div className="mt-4 flex items-center gap-2 text-lg text-gray-200">
                  <Gamepad2 size={18} className="text-red-400" />
                  {stream.game}
                </div>

                <button className="mt-6 w-full rounded-xl bg-green-600 px-6 py-3 font-black text-white transition hover:bg-green-500">
                  Notify Me
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
