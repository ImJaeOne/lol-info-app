import { NAV_ITEMS } from "@/constants/navItems";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex w-full bg-gray-800 text-white font-bold p-4">
      {NAV_ITEMS.map(({ label, url }) => (
        <Link
          key={url}
          href={url}
          className="flex flex-1 items-center justify-center "
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
