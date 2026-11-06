"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  Video,
  Gamepad2,
  Trophy,
  ShoppingBag,
  Users,
  Calendar,
  User,
  ArrowRight,
  Play,
  Camera,
  MessageCircle,
  Radio,
} from "lucide-react";

type YouTubeApiResponse = {
  channel?: {
    statistics?: {
      subscriberCount?: string;
      viewCount?: string;
      videoCount?: string;
    };
  };
  videos?: Array<{
    id?: string;
    snippet?: {
      title?: string;
      publishedAt?: string;
      thumbnails?: {
        high?: { url?: string };
        medium?: { url?: string };
        default?: { url?: string };
      };
    };
    statistics?: {
      viewCount?: string;
    };
  }>;
  live?: {
    id?: string;
    snippet?: {
      title?: string;
      thumbnails?: {
        high?: { url?: string };
        medium?: { url?: string };
      };
    };
  } | null;
};

const formatCompactNumber = (value?: string) => {
  const numericValue = Number(value ?? 0);

  if (!Number.isFinite(numericValue)) {
    return "0";
  }

  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(numericValue);
};

const formatVideoDate = (value?: string) => {
  if (!value) {
    return "Recently";
  }

  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

export default function Home() {
  const [youtubeData, setYoutubeData] = useState<YouTubeApiResponse>({
    channel: undefined,
    videos: [],
    live: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadYouTubeData() {
      try {
        const response = await fetch("/api/youtube");

        const data = (await response.json()) as YouTubeApiResponse;

        if (isMounted) {
          setYoutubeData(data);
        }
      } catch (error) {
        console.error("Failed to load YouTube data", error);

        if (isMounted) {
          setYoutubeData({ channel: undefined, videos: [], live: null });
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadYouTubeData();

    return () => {
      isMounted = false;
    };
  }, []);

  const pages = [
    {
      title: "Register for Tournaments",
      description: "Join upcoming matches and climb the leaderboard",
      href: "/tournaments",
      icon: Trophy,
      color: "from-red-500 to-orange-500",
      delay: 0.1,
      badge: "Open Cups",
    },
    {
      title: "Player Profile",
      description: "Check stats, achievements, and current rank",
      href: "/profile",
      icon: User,
      color: "from-purple-500 to-indigo-500",
      delay: 0.2,
      badge: "Elite",
    },
    {
      title: "Game Setup",
      description: "View the games, loadouts, and playstyle details",
      href: "/games",
      icon: Gamepad2,
      color: "from-blue-500 to-cyan-500",
      delay: 0.3,
      badge: "Loadout",
    },
    {
      title: "Watch Highlights",
      description: "Replay match moments, clips, and stream recaps",
      href: "/videos",
      icon: Video,
      color: "from-red-500 to-pink-500",
      delay: 0.4,
      badge: "Recap",
    },
    {
      title: "Match Schedule",
      description: "See when the next scrims, streams, and events go live",
      href: "/schedule",
      icon: Calendar,
      color: "from-green-500 to-emerald-500",
      delay: 0.5,
      badge: "Live",
    },
    {
      title: "DMX Shop",
      description: "Support the team and grab official gear",
      href: "/shop",
      icon: ShoppingBag,
      color: "from-pink-500 to-rose-500",
      delay: 0.6,
      badge: "Merch",
    },
    {
      title: "Join the Community",
      description: "Connect with the squad and team updates",
      href: "/community",
      icon: Users,
      color: "from-indigo-500 to-purple-500",
      delay: 0.7,
      badge: "Squad",
    },
  ];

  const stats = useMemo(
    () => ({
      subscribers:
        formatCompactNumber(youtubeData.channel?.statistics?.subscriberCount) || "0",
      views: formatCompactNumber(youtubeData.channel?.statistics?.viewCount) || "0",
      videos: formatCompactNumber(youtubeData.channel?.statistics?.videoCount) || "0",
    }),
    [youtubeData]
  );

  const latestVideos = (youtubeData.videos || []).slice(0, 4);
  const matchCards = [
    { label: "Squad", value: "DMX ARMY" },
    { label: "Rank", value: "Elite" },
    { label: "Mode", value: "Battle Royale" },
  ];

  const schedule = [
    { day: "Mon", time: "5:00 PM", game: "Free Fire" },
    { day: "Tue", time: "7:00 PM", game: "Practice Scrim" },
    { day: "Wed", time: "5:00 PM", game: "Live Match" },
    { day: "Thu", time: "8:00 PM", game: "Highlight Review" },
  ];

  const navSocials = [
    {
      href: "https://youtube.com/@devilmaxy",
      label: "YouTube",
      icon: Play,
      color: "text-red-400 hover:bg-red-500/15",
    },
    {
      href: "https://instagram.com/devilmaxy",
      label: "Instagram",
      icon: Camera,
      color: "text-pink-400 hover:bg-pink-500/15",
    },
    {
      href: "https://discord.com",
      label: "Discord",
      icon: MessageCircle,
      color: "text-indigo-400 hover:bg-indigo-500/15",
    },
    {
      href: "https://kick.com/devilmaxy",
      label: "Kick",
      icon: Radio,
      color: "text-green-400 hover:bg-green-500/15",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl" style={{ perspective: "1000px" }}>
        <div className="mx-auto max-w-7xl px-3 py-3 sm:px-5 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <motion.div
              whileHover={{ rotateY: 15, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ perspective: "1000px" }}
            >
              <Link href="/" className="flex flex-col">
                <div className="text-2xl font-black italic tracking-tighter leading-none sm:text-3xl">
                  <span className="text-white">DM</span>
                  <span className="text-red-500">X</span>
                </div>
                <div className="-mt-1 text-[7px] font-extrabold tracking-[0.28em] text-gray-300 uppercase sm:text-[8px] sm:tracking-[0.42em]">
                  DEVILMAXY
                </div>
              </Link>
            </motion.div>

            <div className="flex items-center gap-2 sm:gap-3">
              {navSocials.map(({ href, label, icon: Icon, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ rotateY: 25, rotateZ: 10, scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  style={{ perspective: "1000px" }}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 sm:h-9 sm:w-9 ${color}`}
                >
                  <Icon size={14} className="sm:h-4 sm:w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center justify-center px-4 pt-20 sm:px-5 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-red-600/30 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute inset-x-0 top-24 mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        </div>

        <motion.div
          className="relative z-10 w-full max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex items-center justify-center gap-2 text-[8px] font-black uppercase tracking-[0.25em] text-red-400 sm:gap-3 sm:text-[10px] sm:tracking-[0.45em] md:text-xs">
            <span className="inline-block h-px w-6 bg-red-500 sm:w-8" />
            ESPORTS HQ
            <span className="inline-block h-px w-6 bg-red-500 sm:w-8" />
          </div>

          <motion.div
            className="mb-6 inline-block"
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
          >
            <motion.div
              animate={{ rotateX: [0, -20, 0], rotateZ: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Gamepad2 size={60} className="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.6)]" />
            </motion.div>
          </motion.div>

          <h1 className="mb-6 text-4xl font-black leading-none sm:text-5xl md:text-7xl lg:text-8xl">
            <span className="block text-white">WELCOME TO</span>
            <span className="mt-2 block font-black tracking-tight text-white">
              <span className="text-white">DM</span>
              <span className="text-red-500">X</span>
              <span className="text-white"> DEVILMAXY</span>
            </span>
          </h1>

          <p className="mb-12 text-base text-gray-300 sm:text-xl md:text-2xl">
            Explore videos, stats, games, tournaments, and connect with the gaming community
          </p>

          <motion.a
            href="#portal"
            className="mb-16 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-pink-600 px-6 py-3 text-base font-black transition hover:shadow-[0_0_40px_rgba(239,68,68,0.5)] sm:mb-20 sm:px-8 sm:py-4 sm:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Now
            <ArrowRight size={20} />
          </motion.a>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ rotateX: 10, rotateY: -10, y: -8, scale: 1.05 }}
              style={{ perspective: "1000px" }}
              className="rounded-xl border border-red-500/20 bg-black/30 p-4 shadow-[0_0_30px_rgba(239,68,68,0.08)] backdrop-blur"
            >
              <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.35em] text-red-300">
                Rank
              </div>
              <div className="text-3xl font-black text-red-400">
                {isLoading ? "..." : stats.subscribers}
              </div>
              <div className="text-xs text-gray-400">Subscribers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ rotateX: 10, rotateY: 0, y: -8, scale: 1.05 }}
              style={{ perspective: "1000px" }}
              className="rounded-xl border border-purple-500/20 bg-black/30 p-4 shadow-[0_0_30px_rgba(168,85,247,0.08)] backdrop-blur"
            >
              <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.35em] text-purple-300">
                Drops
              </div>
              <div className="text-3xl font-black text-purple-400">
                {isLoading ? "..." : stats.videos}
              </div>
              <div className="text-xs text-gray-400">Videos</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ rotateX: 10, rotateY: 10, y: -8, scale: 1.05 }}
              style={{ perspective: "1000px" }}
              className="rounded-xl border border-blue-500/20 bg-black/30 p-4 shadow-[0_0_30px_rgba(59,130,246,0.08)] backdrop-blur"
            >
              <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.35em] text-blue-300">
                View
              </div>
              <div className="text-3xl font-black text-blue-400">
                {isLoading ? "..." : stats.views}
              </div>
              <div className="text-xs text-gray-400">Views</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="relative px-4 pb-8 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 overflow-hidden rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-500/10 via-black to-purple-500/10 p-5 shadow-[0_0_40px_rgba(239,68,68,0.12)] sm:p-6 md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="mb-2 text-[9px] font-black uppercase tracking-[0.35em] text-red-400 sm:text-[10px] sm:tracking-[0.45em]">
                  Next Match
                </p>
                <h3 className="text-2xl font-black sm:text-3xl md:text-5xl">
                  <span className="text-white">DMX</span>
                  <span className="text-red-500"> VS </span>
                  <span className="text-white">RIVAL SQUAD</span>
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs text-gray-300 sm:gap-4 sm:text-sm">
                <div className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-2 font-bold text-red-300">
                  7:30 PM
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 font-bold">
                  Live on YouTube
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {matchCards.map((card) => (
                <motion.div
                  key={card.label}
                  whileHover={{ rotateX: 12, rotateY: -8, scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ perspective: "1000px" }}
                  className="rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur"
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-gray-400">
                    {card.label}
                  </div>
                  <div className="mt-2 text-2xl font-black text-white">{card.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-16 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-400 sm:text-sm">
                Live Status
              </p>
              <h2 className="mt-2 text-2xl font-black sm:text-3xl md:text-4xl">
                {youtubeData.live ? "🔴 LIVE NOW" : "OFFLINE"}
              </h2>
            </div>
            <a
              href="https://www.youtube.com/@devilmaxy"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-red-500/50 bg-red-500/10 px-4 py-2.5 text-xs font-bold text-red-300 sm:px-5 sm:py-3 sm:text-sm"
            >
              Watch on YouTube
            </a>
          </div>

          <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {schedule.map((slot) => (
              <motion.div
                key={slot.day}
                whileHover={{ rotateX: 8, scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ perspective: "1000px" }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <div className="text-xs font-bold uppercase tracking-[0.35em] text-red-400">
                  {slot.day}
                </div>
                <div className="mt-3 text-xl font-black text-white">{slot.time}</div>
                <div className="mt-1 text-sm text-gray-400">{slot.game}</div>
              </motion.div>
            ))}
          </div>

          {latestVideos.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {latestVideos.map((video) => (
                <motion.a
                  key={video.id}
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={
                        video.snippet?.thumbnails?.high?.url ||
                        video.snippet?.thumbnails?.medium?.url ||
                        video.snippet?.thumbnails?.default?.url ||
                        "https://i.ytimg.com/vi/placeholder/hqdefault.jpg"
                      }
                      alt={video.snippet?.title || "YouTube video"}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3 p-4">
                    <h3 className="line-clamp-2 text-base font-black text-white">
                      {video.snippet?.title || "Untitled video"}
                    </h3>
                    <div className="text-sm text-gray-400">
                      {formatCompactNumber(video.statistics?.viewCount)} views • {formatVideoDate(video.snippet?.publishedAt)}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="portal" className="relative px-4 py-20 sm:px-5 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            className="mb-6 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-red-400">DMX</span> Arena
          </motion.h2>
          <p className="mb-10 text-base text-gray-400 sm:mb-16 sm:text-lg">
            Choose a section to dive into the gaming experience
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pages.map((page) => {
              const Icon = page.icon;
              return (
                <motion.div
                  key={page.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: page.delay }}
                  whileHover={{ y: -10, rotateX: 8, rotateY: -5, scale: 1.03 }}
                  style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 backdrop-blur-xl sm:p-8"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${page.color} opacity-0 transition duration-500 group-hover:opacity-10`}
                  />

                  <Link
                    href={page.href}
                    className="relative z-10 flex h-full flex-col justify-between"
                  >
                    <div>
                      <div className="mb-5 flex items-center justify-between gap-3">
                        <motion.div
                          whileHover={{ rotateX: -15, rotateY: 15, rotateZ: 5, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          style={{ perspective: "1000px" }}
                          className={`inline-block rounded-lg bg-gradient-to-br ${page.color} p-4 text-white`}
                        >
                          <Icon size={32} />
                        </motion.div>
                        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">
                          {page.badge}
                        </span>
                      </div>
                      <h3 className="mb-3 text-2xl font-black">{page.title}</h3>
                      <p className="text-gray-400">{page.description}</p>
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-red-400 transition group-hover:translate-x-2">
                      Join Now
                      <ArrowRight size={16} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/50 px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl text-center text-sm text-gray-500">
          <p>© 2024 DevilMaxy Gaming. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
