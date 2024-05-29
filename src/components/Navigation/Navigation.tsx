"use client";

import SearchIcon from "@/assets/icons/SearchIcon";
import MoonIcon from "@/assets/icons/MoonIcon";
import { useTheme } from "next-themes";
import Image from "next/image";
import NavList from "./NavList";
import ThemeSwitcher from "../ThemeSwitcher";
import { useState } from "react";

const Navigation = () => {
  const { resolvedTheme } = useTheme();
  const [isThemeSwitcherOpen, setIsThemeSwitcherOpen] =
    useState<boolean>(false);

  const handleOpenThemeSwitcher = () => {
    setIsThemeSwitcherOpen(!isThemeSwitcherOpen);
  };

  return (
    <header className="relative top-0 z-20 pt-10.5 md:sticky">
      <nav className="mx-auto flex max-w-[800px] flex-wrap items-center justify-between border border-red-500">
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

        <NavList />

        <div className="flex items-center gap-x-12 sm:order-2">
          <SearchIcon />
          <div className="relative">
            <MoonIcon
              onClick={handleOpenThemeSwitcher}
              className="cursor-pointer transition-all duration-75 ease-in hover:-rotate-12"
            />
            <ThemeSwitcher
              isOpen={isThemeSwitcherOpen}
              onClickCLose={handleOpenThemeSwitcher}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
