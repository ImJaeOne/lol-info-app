import { Suspense } from "react";
import Loading from "./loading";
import ChampionList from "@/components/champion/ChampionList";

const ChampionPage = async () => {
  return (
    <main className="w-[90%]">
      <h1 className="text-4xl text-red-700 mb-4">챔피언 목록</h1>
      <Suspense fallback={<Loading />}>
        <ChampionList />
      </Suspense>
    </main>
  );
};

export default ChampionPage;
