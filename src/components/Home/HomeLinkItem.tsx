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
      <div className="relative w-[400px]">
        <Image
          src={imgSrc}
          alt={altText}
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 50vw"
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
  imgSrc: StaticImageData | string;
  altText: string;
  linkText: string;
};
