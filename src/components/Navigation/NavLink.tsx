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
      className={`text-caption1 cursor-pointer transition-all duration-75 ease-linear ${path === href ? "text-primary font-bold" : "text-gray-1 hover:text-primary"}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
