import { NextResponse } from "next/server";
import { getInstagramProfile, getInstagramPosts } from "@/lib/instagram";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type") || "posts";
    const limit = parseInt(searchParams.get("limit") || "12", 10);

    if (type === "profile") {
      const profile = await getInstagramProfile();
      return NextResponse.json(profile);
    }

    const posts = await getInstagramPosts(limit);
    return NextResponse.json({ data: posts });
  } catch (error) {
    console.error("Instagram API error:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch Instagram data",
      },
      {
        status: 500,
      }
    );
  }
}
