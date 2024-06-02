"use client";

import SearchIcon from "@/assets/icons/SearchIcon";
import { useTheme } from "next-themes";
import Image from "next/image";
import NavList from "./NavList";
import ThemeSwitcher from "../ThemeSwitcher";

const Navigation = () => {
  const { resolvedTheme } = useTheme();

  return (
    <header className="relative top-0 z-20 bg-bgColor pt-10.5 md:sticky">
      <nav className="mx-auto flex max-w-[800px] flex-wrap items-center justify-between">
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

          <p className="text-caption1 font-bold capitalize text-text-primary">
            Arman
          </p>
        </div>

        <NavList />

        <div className="flex items-center gap-x-12 sm:order-2">
          <SearchIcon className={`[&_path]:stroke-text-primary`} />
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
