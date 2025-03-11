"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";

const getChampionRotation = async () => {
  const res = await fetch("/api/rotation");
  if (!res.ok) {
    throw new Error("챔피언 로테이션을 받아오는데 실패하였습니다.");
  }
  const data = await res.json();
  return data;
};

const RotationPage = () => {
  const { data } = useQuery({
    queryKey: ["rotation"],
    queryFn: getChampionRotation,
  });

  return <div>RotationPage</div>;
};

export default RotationPage;
