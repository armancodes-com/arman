"use client";

import SearchIcon from "@/assets/icons/SearchIcon";
import { useTheme } from "next-themes";
import Image from "next/image";
import NavList from "./NavList";
import ThemeSwitcher from "../ThemeSwitcher";
import { DARK_LOGO_SVG, WHITE_LOGO_SVG } from "@/constants";
import { NAVIGATION_LINKS } from "@/constants/Navigation.constants";
import Link from "next/link";
import { isSearchSystemReleased } from "@/constants/FeatureFlag.constants";
import { useEffect, useState } from "react";

const Navigation = () => {
  const { resolvedTheme } = useTheme();
  const [logoImage, setLogoImage] = useState<string>(DARK_LOGO_SVG);

  useEffect(() => {
    setLogoImage(WHITE_LOGO_SVG);
  }, []);

  return (
    <header className="bg-bgColor relative top-0 z-20 px-4 py-2 md:sticky md:px-0 md:py-1">
      <nav className="mx-auto flex max-w-[800px] flex-wrap items-center justify-between">
        <Link href={"/"} className="flex items-center gap-4">
          {resolvedTheme === "light" ? (
            <Image
              src={logoImage || WHITE_LOGO_SVG}
              alt="logo"
              width={40}
              height={40}
            />
          ) : (
            <Image src={DARK_LOGO_SVG} alt="logo" width={40} height={40} />
          )}

          <p className="text-caption1 text-text-primary font-bold capitalize">
            Arman
          </p>
        </Link>

        <NavList links={NAVIGATION_LINKS} />

        <div className="flex items-center gap-x-12 sm:order-2">
          {isSearchSystemReleased && (
            <Link href={"/search"} className="cursor-pointer">
              <SearchIcon
                viewBox="0 0 24 24"
                className={`[&_path]:stroke-text-primary h-6 w-6 cursor-pointer`}
                aria-hidden="true"
              />
              <span className="sr-only">search</span>
            </Link>
          )}
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
