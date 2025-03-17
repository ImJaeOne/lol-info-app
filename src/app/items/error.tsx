"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ reset }: { reset: () => void }) {
  const { refresh } = useRouter();

  return (
    <div className="w-full h-[calc(100vh-56px)] flex justify-center items-center">
      <div className=" flex flex-col text-3xl text-red-500 p-8 bg-gray-900 rounded-xl shadow-lg border-4 border-red-500">
        <p className="text-lg text-white mb-6">아이템을 불러올 수 없습니다!</p>
        <button
          onClick={() =>
            startTransition(() => {
              refresh();
              reset();
            })
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
