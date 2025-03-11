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

  const { data }: { data: Record<string, ChampionDetail> } = await res.json();

  return { data, version };
};
