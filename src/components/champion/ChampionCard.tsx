import { PATH } from "@/constants/path";
import { ChampionsDetail } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChampionCard = ({
  detail,
}: {
  detail: ChampionsDetail;
}) => {
  return (
    <Link
      href={`/champions/${detail.id}`}
      className="flex flex-col items-center justify-center p-4 border border-white bg-black w-[180px] h-[180px] rounded-md"
    >
      <Image
        src={`${PATH.DDRAGON_URL}/cdn/${detail.version}/img/champion/${detail.image.full}`}
        width={80}
        height={80}
        alt={detail.name}
        priority
      />
      <span className="text-red-600">{detail.name}</span>
      <span className="text-gray-400">{detail.title}</span>
    </Link>
  );
};

export default ChampionCard;
