"use client";

import SearchIcon from "@/assets/icons/SearchIcon";
import MoonIcon from "@/assets/icons/MoonIcon";
import { useTheme } from "next-themes";
import Image from "next/image";
import NavLink from "./NavLink";

const Navigation = () => {
  const { resolvedTheme } = useTheme();

  return (
    <header className="relative top-0 z-20 pt-10.5 md:sticky">
      <nav className="mx-auto flex max-w-[800px] items-center justify-between border border-red-500">
        <div className="flex items-center gap-4">
          <Image
            src={
              resolvedTheme === "light"
                ? "/images/sample-logo.svg"
                : "/images/sample-logo-white.svg"
            }
            alt="logo"
            width={40}
            height={40}
          />

          <p className="text-caption1 font-bold capitalize text-dark-color dark:text-white">
            Arman
          </p>
        </div>

        <ul className="flex items-center gap-x-11">
          <NavLink href="/">home</NavLink>
          <NavLink href="/about-me">about me</NavLink>
          <NavLink href="/articles">articles</NavLink>
        </ul>

        <div className="flex items-center gap-x-12">
          <SearchIcon />
          <MoonIcon />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
