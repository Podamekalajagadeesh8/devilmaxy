import { NextResponse } from "next/server";
import { getYouTubeData } from "@/lib/youtube";

export async function GET() {
  try {
    const data = await getYouTubeData();

    return NextResponse.json({
      channel: data.channel ?? null,
      videos: data.videos ?? [],
      live: data.live ?? null,
    });
  } catch (error) {
    console.error("YouTube API error:", error);

    return NextResponse.json(
      {
        channel: null,
        videos: [],
        live: null,
      },
      {
        status: 200,
      }
    );
  }
}