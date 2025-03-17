import ItemList from "@/components/item/ItemList";

const ItemPage = () => {
  return (
    <main className="w-[90%] mt-6">
      <h1 className="text-4xl text-red-700 mb-4">아이템 목록</h1>
      <div className="flex flex-wrap gap-4 justify-between">
        <ItemList />
      </div>
    </main>
  );
};

export default ItemPage;
