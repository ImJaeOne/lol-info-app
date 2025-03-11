import { PATH } from "@/constants/path";

export const getRecentVersion = async () => {
  const res = await fetch(`${PATH.DDRAGON_URL}/api/versions.json`);
  const data = await res.json();

  return data[0];
};
