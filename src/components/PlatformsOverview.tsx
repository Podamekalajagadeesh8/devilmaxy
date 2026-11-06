"use client";

import { Music, Image, Radio } from "lucide-react";
import { PlatformCard } from "./PlatformCard";

interface PlatformsOverviewProps {
  youtubeStats?: {
    subscribers: string;
    videos: string;
    views: string;
  };
  instagramStats?: {
    followers: string;
    posts: string;
  };
  kickStats?: {
    followers: string;
    views: string;
    isLive?: boolean;
  };
}

export function PlatformsOverview({
  youtubeStats = {
    subscribers: "Loading...",
    videos: "Loading...",
    views: "Loading...",
  },
  instagramStats = {
    followers: "Loading...",
    posts: "Loading...",
  },
  kickStats = {
    followers: "Loading...",
    views: "Loading...",
    isLive: false,
  },
}: PlatformsOverviewProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="mb-12 text-4xl font-black tracking-tight">
          Social Platforms
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <PlatformCard
            platform="YouTube"
            icon={<Music className="text-red-500" />}
            stats={[
              { label: "Subscribers", value: youtubeStats.subscribers },
              { label: "Videos", value: youtubeStats.videos },
              { label: "Total Views", value: youtubeStats.views },
            ]}
            actionUrl="https://youtube.com/@devilmaxy"
            actionText="Subscribe"
          />

          <PlatformCard
            platform="Instagram"
            icon={<Image className="text-pink-500" />}
            stats={[
              { label: "Followers", value: instagramStats.followers },
              { label: "Posts", value: instagramStats.posts },
            ]}
            actionUrl="https://instagram.com/devilmaxy"
            actionText="Follow"
          />

          <PlatformCard
            platform="Kick"
            icon={<Radio className="text-green-500" />}
            stats={[
              { label: "Followers", value: kickStats.followers },
              { label: "Views", value: kickStats.views },
            ]}
            isLive={kickStats.isLive}
            actionUrl="https://kick.com/devilmaxy"
            actionText="Follow"
          />
        </div>
      </div>
    </section>
  );
}
