import { PATH } from "@/constants/path";
import { getRecentVersion } from "./versionService";
import { ItemDetail } from "@/types/Item";

export const getItemList = async () => {
  const version = await getRecentVersion();
  const res = await fetch(
    `${PATH.DDRAGON_URL}/cdn/${version}/data/ko_KR/item.json`,
    {
      cache: "force-cache",
    }
  );

  const { data }: { data: ItemDetail[] } = await res.json();

  return { data, version };
};
