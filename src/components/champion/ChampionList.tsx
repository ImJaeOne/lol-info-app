import { getChampionList } from "@/services/server/championService";
import ChampionCard from "./ChampionCard";

const ChampionList = async () => {
  const championList = await getChampionList();
  const championListArr = Object.entries(championList);

  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
      {championListArr?.map(([key, detail]) => (
        <ChampionCard key={key} detail={detail} />
      ))}
    </div>
  );
};

export default ChampionList;
