import { PATH } from "@/constants/path"
import { type ChampionDetail } from "@/types/Champion"
import Image from "next/image"

const ChampionDetail = ({championDetail, version}: {championDetail: ChampionDetail, version: string}) => {
  return (
    <div className="text-red-700 flex flex-col w-[60%]">
          <span>{championDetail.name}</span>
          <span>{championDetail.title}</span>
          <Image
            src={`${PATH.DDRAGON_URL}/cdn/${version}/img/champion/${championDetail.image.full}`}
            width={80}
            height={80}
            alt={championDetail.name}
            priority
          />
          <span>{championDetail.lore}</span>
          <ul>
            <li>공격력: {championDetail.info.attack}</li>
            <li>방어력: {championDetail.info.defense}</li>
            <li>마법력: {championDetail.info.magic}</li>
            <li>난이도: {championDetail.info.difficulty}</li>
          </ul>
        </div>
  )
}

export default ChampionDetail