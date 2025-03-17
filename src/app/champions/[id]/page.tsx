import ChampionDetail from "@/components/champion/ChampionDetail";
import { getChampionDetail } from "@/services/server/championService";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";

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
  return {
    title: `${championDetail.name} - My Riot App`,
  };
};

const ChampionDetailPage = async ({ params }: Props) => {
  const id = params.id;
  const { data: championDetail, version } = await getChampionDetail(id);
  return (
    <Suspense fallback={<Loading/>}>
      <ChampionDetail championDetail={championDetail} version={version} />
    </Suspense>
  );
};

export default ChampionDetailPage;
