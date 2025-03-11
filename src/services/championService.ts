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

  return { data, version };
};

export const getChampionDetail = async (id: string) => {
  const version = await getRecentVersion();
  const res = await fetch(
    `${PATH.DDRAGON_URL}/cdn/${version}/data/ko_KR/champion/${id}.json`,
    {
      cache: "no-cache",
    }
  );

  const { data: championDetailObj } = await res.json();

  const data: ChampionDetail = championDetailObj[id];

  return { data, version };
};

export const getChampionRotation = async () => {
  const res = await fetch("/api/rotation");
  if (!res.ok) {
    throw new Error("챔피언 로테이션을 받아오는데 실패하였습니다.");
  }
  const data = await res.json();
  return data;
};
