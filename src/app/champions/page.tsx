import ChampionCard from "@/components/champion/ChampionCard";
import { getChampionList } from "@/services/championService";

const ChampionPage = async () => {
  const championList  = await getChampionList();
  const championListArr = Object.entries(championList);

  return (
    <main className="w-[90%]">
      <h1>챔피언 목록</h1>
      <div className="flex flex-wrap gap-4 justify-between">
        {championListArr?.map(([key, detail]) => (
          <ChampionCard key={key} detail={detail} />
        ))}
      </div>
    </main>
  );
};

export default ChampionPage;
