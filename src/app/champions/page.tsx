import ChampionCard from "@/components/home/ChampionCard";
import { getChampionList } from "@/services/championService";

const ChampionPage = async () => {
  const { data: championList, version } = await getChampionList();
  const championListArr = Object.entries(championList);

  return (
    <main className="w-[90%]">
      <h1>챔피언 목록</h1>
      <div className="flex flex-wrap gap-4 justify-between">
        {championListArr?.map(([key, detail]) => (
          <ChampionCard key={key} detail={detail} version={version} />
        ))}
      </div>
    </main>
  );
};

export default ChampionPage;
