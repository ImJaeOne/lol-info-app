import { PATH } from "@/constants/path";
import { ChampionDetail } from "@/types/Champion";
import Image from "next/image";
import React from "react";

const ChampionCard = ({
  detail,
  version,
}: {
  detail: ChampionDetail;
  version: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-white bg-black w-[180px] h-[180px] rounded-md">
      <Image
        src={`${PATH.DDRAGON_URL}/cdn/${version}/img/champion/${detail.image.full}`}
        width={80}
        height={80}
        alt={detail.name}
        priority
      />
      <span className='text-red-600'>{detail.name}</span>
      <span className='text-gray-400'>{detail.title}</span>
    </div>
  );
};

export default ChampionCard;
