import { ChampionDetail } from "@/types/Champion";
import { PATH } from "@/constants/path";

export const getRecentVersion = async () => {
  const res = await fetch(`${PATH.DDRAGON_URL}/api/versions.json`);
  const data = await res.json();

  return data[0];
};

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
