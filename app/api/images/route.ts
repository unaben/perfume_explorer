// src/app/api/images/route.ts
import { NextResponse } from "next/server";
import type { ImagesResponse } from "@/types/image.types";

const baseUrl = process.env.PERFUME_IMAGES_URL;

export async function GET() {
  try {
    const response = await fetch(baseUrl, {
      // Cache for 5 minutes
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch images: ${response.status}`);
    }

    const data: ImagesResponse = await response.json();

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
