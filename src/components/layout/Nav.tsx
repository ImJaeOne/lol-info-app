import Link from "next/link";
import { NAV_ITEMS } from "@/constants/navItems";

const Nav = () => {
  return (
    <nav>
      {NAV_ITEMS.map(({ label, url }) => (
        <Link key={url} href={url}>
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
