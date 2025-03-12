import { PATH } from "@/constants/path";
import { error } from "console";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(PATH.ROTATION_URL, {
      method: "GET",
      headers: {
        "X-Riot-Token": process.env.RIOT_API_KEY || "",
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "챔피언 로테이션을 받아오는데 실패하였습니다." },
        { status: res.status }
      );
    }

    const { freeChampionIds }: { freeChampionIds: number[] } = await res.json();

    return NextResponse.json(freeChampionIds);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
