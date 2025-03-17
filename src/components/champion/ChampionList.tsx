import { getChampionList } from "@/services/server/championService";
import ChampionCard from "./ChampionCard";

const ChampionList = async () => {
  const championList = await getChampionList();
  const championListArr = Object.entries(championList);

  return (
    <div className="flex flex-wrap gap-4 justify-between">
      {championListArr?.map(([key, detail]) => (
        <ChampionCard key={key} detail={detail} />
      ))}
    </div>
  );
};

export default ChampionList;
