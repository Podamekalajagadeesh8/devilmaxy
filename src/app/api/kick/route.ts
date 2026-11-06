import { NextResponse } from "next/server";
import {
  getKickChannelInfo,
  getKickLiveStream,
  getKickStreamHistory,
} from "@/lib/kick";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type") || "channel";
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    if (type === "channel") {
      const channel = await getKickChannelInfo();
      return NextResponse.json(channel);
    }

    if (type === "live") {
      const stream = await getKickLiveStream();
      return NextResponse.json(stream);
    }

    if (type === "history") {
      const history = await getKickStreamHistory(limit);
      return NextResponse.json({ data: history });
    }

    return NextResponse.json({
      error: "Invalid type parameter",
      status: 400,
    });
  } catch (error) {
    console.error("Kick API error:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch Kick data",
      },
      {
        status: 500,
      }
    );
  }
}
