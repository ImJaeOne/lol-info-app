import RotationChampionList from "@/components/champion/RotationChampionList";
import { QUERY_KEY } from "@/constants/queryKey";
import {
  getChampionList,
  getChampionRotation,
} from "@/services/server/championService";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const RotationPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.ROTATIONKEYLIST],
    queryFn: () => getChampionRotation(),
  });

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.CHAMPIONLIST],
    queryFn: () => getChampionList(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="w-[90%]">
        <div>
          <h1 className="text-4xl font-extrabold text-red-500 mb-4">
            무료로 플레이할 수 있는 챔피언 20
          </h1>
          <RotationChampionList />
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default RotationPage;
