import { PATH } from "@/constants/path";
import { getItemList } from "@/services/itemService";
import Image from "next/image";
import React from "react";

const ItemPage = async () => {
  const { data: itemList, version } = await getItemList();
  const itemListArr = Object.entries(itemList);

  return (
    <main className="w-[90%]">
      <h1>아이템 목록</h1>
      <div className="flex flex-wrap gap-4 justify-between">
        {itemListArr?.map(([key, detail]) => {
          return (
            <div key={key} className="flex flex-col items-center justify-center p-4 border border-white bg-black w-[180px] h-[200px] rounded-md">
              <Image
                src={`${PATH.DDRAGON_URL}/cdn/${version}/img/item/${detail.image.full}`}
                width={80}
                height={80}
                alt={detail.name}
                priority
              />
              <span className="text-red-600">{detail.name}</span>
              <span className="text-gray-400">{detail.plaintext}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ItemPage;
