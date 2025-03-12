"use client";

import ChampionCard from "@/components/champion/ChampionCard";
import {
  getChampionList,
  getChampionRotation,
} from "@/services/championService";
import { ChampionsDetail } from "@/types/Champion";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const RotationPage = () => {
  const { data: rotationIdx } = useQuery({
    queryKey: ["rotation"],
    queryFn: getChampionRotation,
  });

  const { data: championList } = useQuery({
    queryKey: ["championList"],
    queryFn: getChampionList,
  });

  const championListArr = championList && Object.entries(championList);

  const rotationChampionList: [string, ChampionsDetail][] = rotationIdx?.map(
    (key: number) =>
      championListArr &&
      championListArr.find((champion) => champion[1].key === String(key))
  );

  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-between">
        {rotationChampionList?.map(([key, detail]) => (
          <ChampionCard key={key} detail={detail} />
        ))}
      </div>
    </div>
  );
};

export default RotationPage;
