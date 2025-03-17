"use client";

import {
  useChampionListQuery,
  useRotationChampionListClientQuery,
} from "@/hooks/queries/useChampionQuery";
import { ChampionsDetail } from "@/types/Champion";
import ChampionCard from "./ChampionCard";

const RotationChampionList = () => {
  const { data: rotationIdx } = useRotationChampionListClientQuery();
  const { data: championList } = useChampionListQuery();

  const championListArr = championList && Object.entries(championList);

  const rotationChampionList: [string, ChampionsDetail][] = rotationIdx?.map(
    (key: number) =>
      championListArr &&
      championListArr.find((champion) => champion[1].key === String(key))
  );
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
      {rotationChampionList?.map(([key, detail]) => (
        <ChampionCard key={key} detail={detail} />
      ))}
    </div>
  );
};

export default RotationChampionList;
