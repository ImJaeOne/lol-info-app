"use client";

import {
  useChampionListQuery,
  useRotationChampionListQuery,
} from "@/hooks/queries/useChampionQuery";
import { ChampionsDetail } from "@/types/Champion";
import ChampionCard from "./ChampionCard";

const RotationChampionList = () => {
  const { data: rotationIdx } = useRotationChampionListQuery();
  const { data: championList } = useChampionListQuery();

  const championListArr = championList && Object.entries(championList);

  const rotationChampionList: [string, ChampionsDetail][] = rotationIdx?.map(
    (key: number) =>
      championListArr &&
      championListArr.find((champion) => champion[1].key === String(key))
  );
  return (
    <div className="flex flex-wrap gap-4 justify-between">
      {rotationChampionList?.map(([key, detail]) => (
        <ChampionCard key={key} detail={detail} />
      ))}
    </div>
  );
};

export default RotationChampionList;
