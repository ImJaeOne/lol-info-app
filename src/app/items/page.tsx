import { Suspense } from "react";
import Loading from "./loading";
import ItemList from "@/components/item/ItemList";

const ItemPage = () => {
  return (
    <main className="w-[90%]">
      <h1 className="text-4xl text-red-700 mb-4">아이템 목록</h1>
      <Suspense fallback={<Loading />}>
        <div className="flex flex-wrap gap-4 justify-between">
          <ItemList />
        </div>
      </Suspense>
    </main>
  );
};

export default ItemPage;
