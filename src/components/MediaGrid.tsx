"use client";

import { motion } from "framer-motion";
import { Play, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

interface MediaItem {
  id: string;
  title?: string;
  image: string;
  views?: string;
  likes?: number;
  comments?: number;
  url?: string;
  duration?: string;
  isVideo?: boolean;
}

interface MediaGridProps {
  items: MediaItem[];
  title: string;
  columns?: 2 | 3 | 4;
}

export function MediaGrid({
  items,
  title,
  columns = 3,
}: MediaGridProps) {
  const colsClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="mb-12 text-4xl font-black tracking-tight">{title}</h2>

        <motion.div
          className={`grid gap-4 ${colsClass[columns]}`}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {items.map((media) => (
            <motion.a
              key={media.id}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              className="group relative overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative h-0 w-full overflow-hidden bg-black/50 pb-[100%]">
                <Image
                  src={media.image}
                  alt={media.title || "Media"}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "none";
                  }}
                />

                {media.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm transition group-hover:bg-black/40">
                    <div className="rounded-full bg-red-600 p-3">
                      <Play size={24} fill="white" />
                    </div>
                  </div>
                )}

                {media.duration && (
                  <div className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-1 text-xs font-bold">
                    {media.duration}
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

                {(media.likes || media.comments) && (
                  <div className="absolute bottom-3 left-3 flex gap-3 text-xs font-bold opacity-0 transition group-hover:opacity-100">
                    {media.likes !== undefined && (
                      <div className="flex items-center gap-1 text-red-400">
                        <Heart size={14} />
                        {media.likes.toLocaleString()}
                      </div>
                    )}
                    {media.comments !== undefined && (
                      <div className="flex items-center gap-1 text-blue-400">
                        <MessageCircle size={14} />
                        {media.comments.toLocaleString()}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {media.title && (
                <div className="bg-white/5 p-3 backdrop-blur">
                  <p className="line-clamp-2 text-sm font-bold transition group-hover:text-red-400">
                    {media.title}
                  </p>
                  {media.views && (
                    <p className="text-xs text-gray-400">{media.views}</p>
                  )}
                </div>
              )}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
