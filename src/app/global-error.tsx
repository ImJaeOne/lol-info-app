"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function GlobalError({ reset }: { reset: () => void }) {
  const { refresh } = useRouter();

  return (
    <div className="w-full h-[calc(100vh-56px)] flex justify-center items-center">
      <div className=" flex flex-col text-3xl text-red-500 p-8 bg-gray-900 rounded-xl shadow-lg border-4 border-red-500">
        <p className="text-lg text-white mb-6">
          예상치 못한 에러가 발생했습니다!
        </p>
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
