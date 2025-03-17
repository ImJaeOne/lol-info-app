"use client";

import { useState } from "react";
import { PATH } from "@/constants/path";
import { type ChampionDetail } from "@/types/Champion";
import Image from "next/image";

const ChampionDetail = ({
  championDetail,
  version,
}: {
  championDetail: ChampionDetail;
  version: string;
}) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoadComplete = () => {
    setLoading(false);
  };

  return (
    <div className="relative w-auto h-[calc(100vh-56px)] p-10 flex items-end ">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        style={{
          backgroundImage: `url(${PATH.DDRAGON_URL}/cdn/img/champion/splash/${championDetail.id}_0.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)",
        }}
      ></div>

      <div className="relative w-[60%] p-6 flex gap-4 justify-between bg-black/40 backdrop-blur-md border border-gray-700 rounded-xl shadow-xl">
        <div className="flex flex-col gap-4">
          <span className="text-4xl font-extrabold text-red-500">
            {championDetail.name}
          </span>
          <span className="text-2xl text-gray-400 italic">
            {championDetail.title}
          </span>
          <span className="text-red-400 leading-relaxed">
            {championDetail.lore}
          </span>
          <div className="text-gray-300 text-xl font-semibold mt-4">스킬</div>
          <ul className="flex gap-4 ">
            {championDetail.spells.map((spell) => (
              <li key={spell.name} className="relative group flex ">
                <Image
                  onLoad={handleImageLoadComplete}
                  src={`${PATH.DDRAGON_URL}/cdn/${version}/img/spell/${spell.image.full}`}
                  width={48}
                  height={48}
                  alt={spell.name}
                  className="rounded-lg border border-gray-700 shadow-md transition-transform transform group-hover:scale-110 cursor-pointer"
                />
                <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs bg-black/70 text-gray-300 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {spell.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {loading && (
        <div className="absolute inset-0 bg-black/70 flex justify-center items-center text-white">
          로딩 중...
        </div>
      )}
    </div>
  );
};

export default ChampionDetail;
