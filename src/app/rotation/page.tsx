"use client";

import { getChampionRotation } from "@/services/championService";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const RotationPage = () => {
  const { data } = useQuery({
    queryKey: ["rotation"],
    queryFn: getChampionRotation,
  });

  return <div>RotationPage</div>;
};

export default RotationPage;
