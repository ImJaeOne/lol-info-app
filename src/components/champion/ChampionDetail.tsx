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
  return (
    <div className=" flex flex-col w-[60%]">
      <span className="text-4xl font-bold mb-4 text-red-700">
        {championDetail.name}
      </span>
      <span className="text-2xl text-gray-600 mb-4">
        {championDetail.title}
      </span>
      <div className="flex w-full justify-center mb-4">
        <Image
          src={`${PATH.DDRAGON_URL}/cdn/${version}/img/champion/${championDetail.image.full}`}
          width={150}
          height={150}
          alt={championDetail.name}
          priority
        />
      </div>
      <span className="text-red-600 mb-4">{championDetail.lore}</span>
      <div>
        <span className="text-gray-600 text-xl">스탯</span>
        <ul className="text-gray-500">
          <li>공격력: {championDetail.info.attack}</li>
          <li>방어력: {championDetail.info.defense}</li>
          <li>마법력: {championDetail.info.magic}</li>
          <li>난이도: {championDetail.info.difficulty}</li>
        </ul>
      </div>
    </div>
  );
};

export default ChampionDetail;
