import { NAVIGATION_LINKS } from "@/constants/Navigation.constants";
import NavLink from "./NavLink";

const NavList = () => {
  return (
    <ul className="px-13 py-10 sm:p-0 order-2 flex w-full items-center justify-center gap-x-11 sm:w-max">
      {NAVIGATION_LINKS.map((link) => (
        <NavLink key={link.id} href={link.href}>
          {link.title}
        </NavLink>
      ))}
    </ul>
  );
};

export default NavList;
