import { INavLinksProps } from "@/constants/Navigation.constants";
import NavLink from "./NavLink";

interface INavListProps {
  links: INavLinksProps[];
}

const NavList: React.FC<INavListProps> = ({ links }) => {
  return (
    <ul className="order-2 flex w-full items-center justify-center gap-x-11 py-5 sm:w-max sm:p-0 md:py-6 lg:px-13">
      {links.map((link) => (
        <li key={link.id}>
          <NavLink href={link.href}>{link.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
