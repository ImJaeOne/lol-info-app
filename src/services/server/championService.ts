import { ChampionDetail, ChampionsDetail } from "@/types/Champion";
import { PATH } from "@/constants/path";
import { getRecentVersion } from "./versionService";

export const getChampionList = async () => {
  const version = await getRecentVersion();
  const res = await fetch(
    `${PATH.DDRAGON_URL}/cdn/${version}/data/ko_KR/champion.json`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );

  const { data }: { data: ChampionsDetail[] } = await res.json();

  return data;
};

export const getChampionDetail = async (id: string) => {
  const version = await getRecentVersion();
  const res = await fetch(
    `${PATH.DDRAGON_URL}/cdn/${version}/data/ko_KR/champion/${id}.json`,
    {
      cache: "no-store",
    }
  );

  const { data: championDetailObj } = await res.json();

  const data: ChampionDetail = championDetailObj[id];

  return { version, data };
};

export const getChampionRotation = async () => {
  try {
    const res = await fetch(PATH.ROTATION_URL, {
      method: "GET",
      headers: {
        "X-Riot-Token": process.env.RIOT_API_KEY || "",
      },
    });
    if (!res.ok) {
      throw new Error("챔피언 로테이션을 받아오는데 실패하였습니다.");
    }
    const { freeChampionIds }: { freeChampionIds: number[] } = await res.json();

    return freeChampionIds;
  } catch {
    throw new Error("챔피언 로테이션을 받아오는데 실패하였습니다.");
  }
};
