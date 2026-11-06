const API_BASE = "https://www.googleapis.com/youtube/v3";

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

if (!API_KEY) {
  console.warn("YOUTUBE_API_KEY is missing");
}

if (!CHANNEL_ID) {
  console.warn("YOUTUBE_CHANNEL_ID is missing");
}

async function youtubeFetch<T>(
  endpoint: string,
  params: Record<string, string>
): Promise<T> {
  if (!API_KEY || !CHANNEL_ID) {
    return {} as T;
  }

  const searchParams = new URLSearchParams({
    ...params,
    key: API_KEY || "",
  });

  const response = await fetch(
    `${API_BASE}/${endpoint}?${searchParams.toString()}`,
    {
      next: {
        revalidate: 300,
      },
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.warn(`YouTube API warning: ${response.status} - ${errorText}`);
    return {} as T;
  }

  return response.json();
}

export type YouTubeChannel = {
  id: string;
  snippet: {
    title: string;
    description: string;
    customUrl?: string;
    thumbnails: {
      default?: {
        url: string;
      };
      medium?: {
        url: string;
      };
      high?: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
  };
};

export type YouTubeVideo = {
  id: string;
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      default?: {
        url: string;
      };
      medium?: {
        url: string;
      };
      high?: {
        url: string;
      };
    };
  };
  statistics?: {
    viewCount?: string;
    likeCount?: string;
    commentCount?: string;
  };
};

export type YouTubeSearchResult = {
  id: {
    videoId?: string;
    channelId?: string;
  };
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      default?: {
        url: string;
      };
      medium?: {
        url: string;
      };
      high?: {
        url: string;
      };
    };
  };
};

export type YouTubeLiveStream = {
  id: string;
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      default?: {
        url: string;
      };
      medium?: {
        url: string;
      };
      high?: {
        url: string;
      };
    };
  };
  liveStreamingDetails?: {
    actualStartTime?: string;
    scheduledStartTime?: string;
    concurrentViewers?: string;
  };
};

export async function getChannel(): Promise<YouTubeChannel | null> {
  if (!API_KEY || !CHANNEL_ID) {
    return null;
  }

  const data = await youtubeFetch<{
    items?: YouTubeChannel[];
  }>("channels", {
    part: "snippet,statistics",
    id: CHANNEL_ID,
  });

  return data.items?.[0] || null;
}

export async function getLatestVideos(
  maxResults = 8
): Promise<YouTubeVideo[]> {
  if (!API_KEY || !CHANNEL_ID) {
    return [];
  }

  const searchData = await youtubeFetch<{
    items?: YouTubeSearchResult[];
  }>("search", {
    part: "snippet",
    channelId: CHANNEL_ID,
    order: "date",
    type: "video",
    maxResults: String(maxResults),
  });

  const videoIds = (searchData.items || [])
    .map((item) => item.id.videoId)
    .filter(Boolean)
    .join(",");

  if (!videoIds) {
    return [];
  }

  const videoData = await youtubeFetch<{
    items?: YouTubeVideo[];
  }>("videos", {
    part: "snippet,statistics",
    id: videoIds,
  });

  return videoData.items || [];
}

export async function getLiveStream(): Promise<YouTubeLiveStream | null> {
  if (!API_KEY || !CHANNEL_ID) {
    return null;
  }

  const data = await youtubeFetch<{
    items?: YouTubeLiveStream[];
  }>("search", {
    part: "snippet",
    channelId: CHANNEL_ID,
    eventType: "live",
    type: "video",
    maxResults: "1",
  });

  const live = data.items?.[0] as YouTubeSearchResult | undefined;

  if (!live?.id?.videoId) {
    return null;
  }

  const videoData = await youtubeFetch<{
    items?: YouTubeLiveStream[];
  }>("videos", {
    part: "snippet,liveStreamingDetails",
    id: (live.id as any).videoId,
  });

  const video = videoData.items?.[0];

  if (!video) {
    return null;
  }

  return {
    ...video,
    id: (live.id as any).videoId,
  };
}

export async function getYouTubeData() {
  const [channel, videos, live] = await Promise.all([
    getChannel(),
    getLatestVideos(8),
    getLiveStream(),
  ]);

  return {
    channel,
    videos,
    live,
  };
}