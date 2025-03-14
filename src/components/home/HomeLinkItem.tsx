import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const HomeLinkItem = ({
  href,
  imgSrc,
  altText,
  linkText,
}: HomeLinkItemProps) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center gap-4"
    >
      <div className="relative w-[400px] h-[300px]">
        <Image
          src={imgSrc}
          alt={altText}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
          priority
        />
      </div>
      <span className="text-yellow-400">{linkText}</span>
    </Link>
  );
};

export default HomeLinkItem;

type HomeLinkItemProps = {
  href: string;
  imgSrc: StaticImageData;
  altText: string;
  linkText: string;
};
