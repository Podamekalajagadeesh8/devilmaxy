const INSTAGRAM_GRAPH_API = "https://graph.instagram.com/v18.0";

const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const BUSINESS_ACCOUNT_ID = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

if (!ACCESS_TOKEN) {
  console.warn("INSTAGRAM_ACCESS_TOKEN is missing");
}

if (!BUSINESS_ACCOUNT_ID) {
  console.warn("INSTAGRAM_BUSINESS_ACCOUNT_ID is missing");
}

async function instagramFetch<T>(
  endpoint: string,
  params: Record<string, string> = {}
): Promise<T> {
  const searchParams = new URLSearchParams({
    ...params,
    access_token: ACCESS_TOKEN || "",
  });

  const response = await fetch(
    `${INSTAGRAM_GRAPH_API}/${endpoint}?${searchParams.toString()}`,
    {
      next: {
        revalidate: 300,
      },
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Instagram API error ${response.status}: ${errorText}`
    );
  }

  return response.json();
}

export type InstagramPost = {
  id: string;
  caption: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL";
  media_url: string;
  permalink: string;
  timestamp: string;
  like_count: number;
  comments_count: number;
  thumbnail_url?: string;
};

export type InstagramProfile = {
  id: string;
  name: string;
  biography: string;
  website: string;
  profile_picture_url: string;
  followers_count: number;
  follows_count: number;
  ig_id: number;
  media_count: number;
};

export async function getInstagramProfile(): Promise<InstagramProfile> {
  try {
    const response = await instagramFetch<InstagramProfile>(
      `${BUSINESS_ACCOUNT_ID}`,
      {
        fields:
          "id,name,biography,website,profile_picture_url,followers_count,follows_count,ig_id,media_count",
      }
    );
    return response;
  } catch (error) {
    console.error("Failed to fetch Instagram profile:", error);
    throw error;
  }
}

export async function getInstagramPosts(
  limit: number = 12
): Promise<InstagramPost[]> {
  try {
    const response = await instagramFetch<{
      data: InstagramPost[];
      paging?: {
        cursors: {
          before: string;
          after: string;
        };
        next: string;
      };
    }>(`${BUSINESS_ACCOUNT_ID}/media`, {
      fields:
        "id,caption,media_type,media_url,permalink,timestamp,like_count,comments_count,thumbnail_url",
      limit: limit.toString(),
    });

    return response.data || [];
  } catch (error) {
    console.error("Failed to fetch Instagram posts:", error);
    throw error;
  }
}
