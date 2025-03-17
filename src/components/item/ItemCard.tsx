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
    <div className="relative flex flex-col items-center justify-center p-4 border border-white bg-black w-[180px] h-[200px] rounded-md group cursor-pointer">
      <Image
        src={`${PATH.DDRAGON_URL}/cdn/${version}/img/item/${detail.image.full}`}
        width={80}
        height={80}
        alt={detail.name}
      />
      <span className="text-red-600 line-clamp-1">{detail.name}</span>
      <span className="text-gray-400 w-full text-center line-clamp-2">
        {detail.plaintext}
      </span>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[110%] w-[200px] p-2 bg-black text-white text-sm border border-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-[1]">
        {detail.plaintext}
      </div>
    </div>
  );
};

export default ItemCard;
