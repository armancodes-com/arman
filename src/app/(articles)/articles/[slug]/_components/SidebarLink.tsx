"use client";

import useHash from "@/hooks/useHash";
import { scrollToSection } from "@/utils/scroll-into-view";
import Link from "next/link";
import { ReactNode, useEffect } from "react";

interface ISidebarLinkItemProps {
  children: ReactNode | string;
  href: string;
}

const SidebarLink: React.FC<ISidebarLinkItemProps> = ({ children, href }) => {
  const hash = useHash();

  useEffect(() => {
    const section = hash.replace("#", "");
    if (section) scrollToSection(section);
  }, [hash]);

  return (
    <li
      className={`text-caption2 capitalize leading-7 transition-all duration-200 ease-linear hover:text-text-primary ${hash === href ? "text-text-primary" : "text-text-link"}`}
    >
      <Link href={href} onClick={() => scrollToSection(href.split("#")[1])}>
        {children}
      </Link>
    </li>
  );
};

export default SidebarLink;
