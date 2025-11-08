import type { PerfumeGroup } from "@/types";
import { NextResponse } from "next/server";



export async function GET() {
  const apiUrl = process.env.PERFUMES_DATA_URL ?? "";
  try {
    const response = await fetch(apiUrl, {
      // Cache for 5 minutes
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch images: ${response.status}`);
    }

    const data: PerfumeGroup = await response.json();

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching images:", error.message);
    }

    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
