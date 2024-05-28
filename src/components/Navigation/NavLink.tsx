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
      className={`cursor-pointer text-caption1 ${path === href ? "font-bold text-primary2 dark:text-dark-primary" : "text-gray-1 dark:text-white"}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
