import RotationChampionList from "@/components/champion/RotationChampionList";
import { QUERY_KEY } from "@/constants/queryKey";
import {
  getChampionList,
  getChampionRotation,
} from "@/services/championService";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const RotationPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.ROTATIONKEYLIST],
    queryFn: async () => {
      console.log("rotation prefetch");
      return await getChampionRotation();
    },
  });

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.CHAMPIONLIST],
    queryFn: () => getChampionList(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>{/* <RotationChampionList /> */}</div>
    </HydrationBoundary>
  );
};

export default RotationPage;
