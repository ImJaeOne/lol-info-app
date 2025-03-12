import { PATH } from "@/constants/path";
import { ItemDetail } from "@/types/Item";
import Image from "next/image";

const ItemCard = ({
  detail,
  version,
}: {
  detail: ItemDetail;
  version: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-white bg-black w-[180px] h-[200px] rounded-md">
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
};

export default ItemCard;
