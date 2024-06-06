import { INavLinksProps } from "@/constants/Navigation.constants";
import NavLink from "./NavLink";

interface INavListProps {
  links: INavLinksProps[];
}

const NavList: React.FC<INavListProps> = ({ links }) => {
  return (
    <ul className="order-2 flex w-full items-center justify-center gap-x-11 px-13 py-5 sm:w-max sm:p-0 md:py-6">
      {links.map((link) => (
        <NavLink key={link.id} href={link.href}>
          {link.title}
        </NavLink>
      ))}
    </ul>
  );
};

export default NavList;
