import {
  getChampionList,
  getChampionRotation,
} from "@/services/server/championService";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "@/constants/queryKey";
import { getChampionRotationClient } from "@/services/client/championService";

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

export const useRotationChampionListClientQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY.ROTATIONKEYLIST],
    queryFn: getChampionRotationClient,
  });
};
