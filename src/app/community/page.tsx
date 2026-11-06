"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Users, ExternalLink } from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-3 py-3 sm:px-5 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xs text-gray-300 hover:text-white transition sm:text-base">
            <ArrowLeft size={16} className="sm:h-5 sm:w-5" />
            Back
          </Link>
          <h1 className="text-lg font-black sm:text-2xl">Community</h1>
          <div className="w-16 sm:w-20" />
        </div>
      </div>

      <section className="px-4 py-16 pt-24 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Discord Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 overflow-hidden rounded-2xl sm:rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 p-6 sm:p-8 md:p-12 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center">
              <motion.div
                whileHover={{ rotateX: 20, rotateY: -20, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ perspective: "1000px" }}
                className="inline-block rounded-full bg-indigo-600/30 p-5 sm:p-6 backdrop-blur-sm"
              >
                <MessageCircle size={40} className="text-indigo-300 sm:h-12 sm:w-12" />
              </motion.div>

              <div className="flex-1">
                <h2 className="mb-3 text-2xl font-black sm:text-3xl md:text-4xl">Join DMX Army Discord</h2>
                <p className="mb-6 text-base text-gray-300 sm:text-lg">
                  Connect with thousands of gamers, get early access to streams, exclusive clips, and
                  hang out with the community!
                </p>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href="https://discord.gg/yourservercode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 rounded-xl bg-indigo-600 px-8 py-4 font-black text-white transition hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(79,70,229,0.4)]"
                  >
                    <MessageCircle size={20} />
                    JOIN NOW
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition" />
                  </a>

                  <div className="flex gap-8">
                    <div>
                      <div className="text-3xl font-black text-indigo-400">12.5K</div>
                      <div className="text-sm text-gray-400">Members</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-purple-400">1.2K</div>
                      <div className="text-sm text-gray-400">Online</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="mb-8 text-2xl font-black sm:text-3xl">Follow on Socials</h3>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
              <motion.a
                href="https://youtube.com/@devilmaxy"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ rotateX: 10, rotateY: -10, y: -4, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ perspective: "1000px" }}
                className="group rounded-xl sm:rounded-2xl border border-red-500/30 bg-red-500/10 p-4 sm:p-6 backdrop-blur-xl hover:border-red-500/50"
              >
                <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl">▶</div>
                <h4 className="mb-2 text-lg sm:text-xl font-black">YouTube</h4>
                <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">100K+ subscribers</p>
                <div className="inline-flex items-center gap-2 text-red-400 font-bold group-hover:translate-x-2 transition text-xs sm:text-sm">
                  Subscribe
                  <ExternalLink size={14} className="sm:h-4 sm:w-4" />
                </div>
              </motion.a>

              <motion.a
                href="https://instagram.com/devilmaxy"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ rotateX: 10, rotateY: 0, y: -4, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ perspective: "1000px" }}
                className="group rounded-xl sm:rounded-2xl border border-pink-500/30 bg-pink-500/10 p-4 sm:p-6 backdrop-blur-xl hover:border-pink-500/50"
              >
                <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl">📸</div>
                <h4 className="mb-2 text-lg sm:text-xl font-black">Instagram</h4>
                <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">50K+ followers</p>
                <div className="inline-flex items-center gap-2 text-pink-400 font-bold group-hover:translate-x-2 transition text-xs sm:text-sm">
                  Follow
                  <ExternalLink size={14} className="sm:h-4 sm:w-4" />
                </div>
              </motion.a>

              <motion.a
                href="https://kick.com/devilmaxy"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ rotateX: 10, rotateY: 10, y: -4, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ perspective: "1000px" }}
                className="group rounded-xl sm:rounded-2xl border border-green-500/30 bg-green-500/10 p-4 sm:p-6 backdrop-blur-xl hover:border-green-500/50"
              >
                <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl">🎮</div>
                <h4 className="mb-2 text-lg sm:text-xl font-black">Kick</h4>
                <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">Live streaming</p>
                <div className="inline-flex items-center gap-2 text-green-400 font-bold group-hover:translate-x-2 transition text-xs sm:text-sm">
                  Follow
                  <ExternalLink size={14} className="sm:h-4 sm:w-4" />
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
