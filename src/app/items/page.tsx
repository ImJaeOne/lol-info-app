import { Suspense } from "react";
import Loading from "./loading";
import ItemList from "@/components/item/ItemList";

const ItemPage = () => {
  return (
    <main className="w-[90%]">
      <h1>아이템 목록</h1>
      <div className="flex flex-wrap gap-4 justify-between">
        <Suspense fallback={<Loading />}>
          <ItemList />
        </Suspense>
      </div>
    </main>
  );
};

export default ItemPage;
