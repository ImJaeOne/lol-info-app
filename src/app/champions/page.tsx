import { PATH } from "@/constants/path";
import { getChampionList } from "@/services/championService";
import Image from "next/image";

const ChampionPage = async () => {
  const { data: championList, version } = await getChampionList();
  const championListArr = Object.entries(championList);

  return (
    <main className="w-[80%]">
      <h1>챔피언 목록</h1>
      <div className="grid grid-cols-4 gap-4">
        {championListArr?.map(([key, info]) => (
          <div key={key} className="bg-white flex flex-col ">
            <Image
              src={`${PATH.DDRAGON_URL}/cdn/${version}/img/champion/${info.image.full}`}
              width={50}
              height={50}
              alt={key}
              priority
            />
            <span>{info.name}</span>
            <span>{info.title}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ChampionPage;
