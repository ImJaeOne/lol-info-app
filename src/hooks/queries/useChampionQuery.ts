import { getChampionList, getChampionRotation } from "@/services/championService";
import { useQuery } from "@tanstack/react-query";

export const useChampionListQuery = () => {
    return useQuery({
        queryKey: ['championList'],
        queryFn: getChampionList
    })
}

export const useRotationChampionListQuery = () => {
    return useQuery({
        queryKey: ['rotationKeyList'],
        queryFn: getChampionRotation
    })
}