import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const increment = searchParams.get("increment") === "true";

  const namespace = "dev.safeedaadmi.dev";
  const key = "visitor-count";

  const upstreamUrl = increment
    ? `https://api.counterapi.dev/v1/${namespace}/${key}/up`
    : `https://api.counterapi.dev/v1/${namespace}/${key}`;

  try {
    const res = await fetch(upstreamUrl, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`Upstream error: ${res.status}`);
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Visitor count proxy error:", error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
