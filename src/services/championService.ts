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
      cache: "no-cache",
    }
  );

  const { data: championDetailObj } = await res.json();

  const data: ChampionDetail = championDetailObj[id];

  return { version, data };
};

export const getChampionRotation = async () => {
  console.log("getChampionRotation 실행");
  try {
    const res = await fetch("/api/rotation");
    console.log("getChampionRotation 완료");

    if (!res.ok) {
      console.log("prefetch 실패");
      throw new Error("챔피언 로테이션을 받아오는데 실패하였습니다.");
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
  // const res = await fetch("http://localhost:3000/api/rotation");
};
