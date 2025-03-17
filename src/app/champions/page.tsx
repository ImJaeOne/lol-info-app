import ChampionList from "@/components/champion/ChampionList";

const ChampionPage = async () => {
  return (
    <main className="w-[90%] mt-6">
      <h1 className="text-4xl text-red-700 mb-4">챔피언 목록</h1>
      <ChampionList />
    </main>
  );
};

export default ChampionPage;
