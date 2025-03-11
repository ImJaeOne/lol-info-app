import { PATH } from "@/constants/path";
import { getChampionDetail } from "@/services/championService";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = params.id;
  const { data: championDetail } = await getChampionDetail(id);
  const [[_, championDetailArr]] = Object.entries(championDetail);

  return {
    title: `${championDetailArr.name} - My Riot App`,
  };
};

const ChampionDetailPage = async ({ params }: Props) => {
  const id = params.id;
  const { data: championDetail, version } = await getChampionDetail(id);
  const [[_, championDetailArr]] = Object.entries(championDetail);
  return (
    <div className="text-red-700 flex flex-col w-[60%]">
      <span>{championDetailArr.name}</span>
      <span>{championDetailArr.title}</span>
      <Image
        src={`${PATH.DDRAGON_URL}/cdn/${version}/img/champion/${championDetailArr.image.full}`}
        width={80}
        height={80}
        alt={championDetailArr.name}
        priority
      />
      <span>{championDetailArr.lore}</span>
      <ul>
        <li>공격력: {championDetailArr.info.attack}</li>
        <li>방어력: {championDetailArr.info.defense}</li>
        <li>마법력: {championDetailArr.info.magic}</li>
        <li>난이도: {championDetailArr.info.difficulty}</li>
      </ul>
    </div>
  );
};

export default ChampionDetailPage;
