import {
  getChampionList,
  getChampionRotation,
} from "@/services/championService";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "@/constants/queryKey";

export const useChampionListQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY.CHAMPIONLIST],
    queryFn: getChampionList,
  });
};

export const useRotationChampionListQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY.ROTATIONKEYLIST],
    queryFn: getChampionRotation,
  });
};
