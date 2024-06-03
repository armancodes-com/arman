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
      className={`cursor-pointer text-caption2 transition-all duration-75 ease-linear sm:text-caption1 ${path === href ? "font-bold text-primary" : "text-gray-1 hover:text-primary"}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
