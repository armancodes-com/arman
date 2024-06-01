import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface INavLinkProps {
  children: ReactNode;
  href: string;
}

const NavLink: React.FC<INavLinkProps> = ({ children, href }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`cursor-pointer text-caption1 transition-all duration-75 ease-linear ${path === href ? "text-primary font-bold" : "hover:text-primary text-gray-1"}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
