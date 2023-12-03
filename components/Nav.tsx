import Link from "next/link";
import navlinks from "../data/navlink";

const Nav = () => {
  return (
    <nav>
      {navlinks.map((nav) => (
        <Link key={nav.title} className={`mr-5`} href={nav.link}>
          {nav.title}
        </Link>
      ))}
    </nav>
  );
};
export default Nav;
