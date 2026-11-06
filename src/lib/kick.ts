const KICK_API = "https://kick.com/api/v1";

const CHANNEL_ID = process.env.KICK_CHANNEL_ID;

if (!CHANNEL_ID) {
  console.warn("KICK_CHANNEL_ID is missing");
}

async function kickFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${KICK_API}/${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Kick API error ${response.status}: ${errorText}`);
  }

  return response.json();
}

export type KickStream = {
  id: string;
  title: string;
  is_live: boolean;
  viewers: number;
  duration: number;
  thumbnail_url: string;
  category: string;
  started_at: string;
};

export type KickChannel = {
  id: string;
  username: string;
  display_name: string;
  bio: string;
  profile_pic: string;
  banner_image?: string;
  follower_count: number;
  verified: boolean;
  is_live: boolean;
  subscription_count: number;
};

export async function getKickChannelInfo(): Promise<KickChannel | null> {
  try {
    if (!CHANNEL_ID) {
      console.warn("KICK_CHANNEL_ID not configured");
      return null;
    }

    const response = await kickFetch<KickChannel>(
      `channels/${CHANNEL_ID}`
    );
    return response;
  } catch (error) {
    console.error("Failed to fetch Kick channel info:", error);
    return null;
  }
}

export async function getKickLiveStream(): Promise<KickStream | null> {
  try {
    if (!CHANNEL_ID) {
      console.warn("KICK_CHANNEL_ID not configured");
      return null;
    }

    const response = await kickFetch<KickStream>(
      `channels/${CHANNEL_ID}/stream`
    );
    return response;
  } catch (error) {
    console.error("Failed to fetch Kick stream:", error);
    return null;
  }
}

export async function getKickStreamHistory(
  limit: number = 10
): Promise<KickStream[]> {
  try {
    if (!CHANNEL_ID) {
      console.warn("KICK_CHANNEL_ID not configured");
      return [];
    }

    const response = await kickFetch<{
      data: KickStream[];
    }>(`channels/${CHANNEL_ID}/past_streams?limit=${limit}`);

    return response.data || [];
  } catch (error) {
    console.error("Failed to fetch Kick stream history:", error);
    return [];
  }
}
