import Link from "next/link";
import navlinks from "../data/navlink";

const Nav = () => {
  return (
    <nav>
      {navlinks.map((nav) => {
        <Link key={nav.title} href={nav.link}>
          <a className={`mr-5`}>{nav.title}</a>
        </Link>;
      })}
    </nav>
  );
};
export default Nav;
