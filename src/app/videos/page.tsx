"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Play, Heart, MessageCircle, Share2 } from "lucide-react";

export default function VideosPage() {
  const videos = [
    {
      id: 1,
      title: "28 KILLS SOLO VS SQUAD 🔥",
      views: "234K",
      likes: "12K",
      duration: "14:25",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "RANK PUSH TO GRANDMASTER",
      views: "189K",
      likes: "9.8K",
      duration: "18:42",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "IMPOSSIBLE 1 VS 4 CLUTCH",
      views: "456K",
      likes: "15K",
      duration: "11:37",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "INSANE HEADSHOT GAMEPLAY",
      views: "567K",
      likes: "21K",
      duration: "16:08",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 py-4 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition">
            <ArrowLeft size={20} />
            Back
          </Link>
          <h1 className="text-2xl font-black">Videos & Clips</h1>
          <div className="w-20" />
        </div>
      </div>

      <section className="px-5 py-24 pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="mb-4 text-5xl font-black">Latest Videos</h2>
            <p className="text-lg text-gray-400">
              Watch my best gameplay, highlights and epic moments
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-black">
                  {/* Video Thumbnail */}
                  <div className="relative h-0 w-full pb-[56.25%] overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                    <img
                      src={video.image}
                      alt={video.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="rounded-full bg-red-600 p-4 transition"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play size={32} fill="white" className="text-white" />
                      </motion.div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 rounded-lg bg-black/70 px-3 py-1 text-sm font-bold">
                      {video.duration}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-4">
                    <h3 className="mb-3 text-xl font-black line-clamp-2 group-hover:text-red-400 transition">
                      {video.title}
                    </h3>

                    <div className="mb-4 flex items-center gap-4 text-sm text-gray-400">
                      <span>{video.views} views</span>
                      <span>•</span>
                      <span>2 days ago</span>
                    </div>

                    <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                      <button className="flex items-center gap-2 text-sm hover:text-red-400 transition">
                        <Heart size={18} />
                        {video.likes}
                      </button>
                      <button className="flex items-center gap-2 text-sm hover:text-blue-400 transition">
                        <MessageCircle size={18} />
                        Comment
                      </button>
                      <button className="flex items-center gap-2 text-sm hover:text-green-400 transition ml-auto">
                        <Share2 size={18} />
                      </button>
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
