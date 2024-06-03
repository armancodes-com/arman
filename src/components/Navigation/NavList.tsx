import { NAVIGATION_LINKS } from "@/constants/Navigation.constants";
import NavLink from "./NavLink";

const NavList = () => {
  return (
    <ul className="order-2 flex w-full items-center justify-center gap-x-11 px-13 py-5 sm:w-max sm:p-0 md:py-6">
      {NAVIGATION_LINKS.map((link) => (
        <NavLink key={link.id} href={link.href}>
          {link.title}
        </NavLink>
      ))}
    </ul>
  );
};

export default NavList;
