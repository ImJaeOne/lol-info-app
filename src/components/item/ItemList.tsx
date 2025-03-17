import { getItemList } from "@/services/server/itemService";
import ItemCard from "./ItemCard";

const ItemList = async () => {
  const { data: itemList, version } = await getItemList();
  const itemListArr = Object.entries(itemList);
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
      {itemListArr?.map(([key, detail]) => (
        <ItemCard key={key} detail={detail} version={version} />
      ))}
    </div>
  );
};

export default ItemList;
