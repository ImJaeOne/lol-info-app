import { ChampionDetail } from "@/types/Champion";
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

  const { data }: { data: ChampionDetail[] } = await res.json();

  return { data, version };
};
