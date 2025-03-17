export const getChampionRotationClient = async () => {
  const res = await fetch("/api/rotation");

  if (!res.ok) {
    throw new Error("챔피언 로테이션을 받아오는데 실패하였습니다.");
  }
  const data = await res.json();
  console.log(data);
  return data;
};
