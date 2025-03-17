import { getItemList } from "@/services/server/itemService";
import ItemCard from "./ItemCard";

const ItemList = async () => {
  const { data: itemList, version } = await getItemList();
  const itemListArr = Object.entries(itemList);
  return (
    <div>
      {itemListArr?.map(([key, detail]) => (
        <ItemCard key={key} detail={detail} version={version} />
      ))}
    </div>
  );
};

export default ItemList;
