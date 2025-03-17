import ChampionDetail from "@/components/champion/ChampionDetail";
import { getChampionDetail } from "@/services/server/championService";
import { Metadata } from "next";

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
  return <ChampionDetail championDetail={championDetail} version={version} />;
};

export default ChampionDetailPage;
