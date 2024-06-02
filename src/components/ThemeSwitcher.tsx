"use client";

import MoonIcon from "@/assets/icons/MoonIcon";
import SunIcon from "@/assets/icons/SunIcon";
import { useTheme } from "next-themes";
import { useEffect } from "react";

interface IThemeSwitcherProps {}

const ThemeSwitcher: React.FC<IThemeSwitcherProps> = () => {
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    if (window.localStorage) {
      const initialTheme = localStorage.getItem("theme");
      setTheme(initialTheme || "light");
    }
  }, [setTheme]);

  return (
    <div className="relative flex h-8 w-8 cursor-pointer items-center gap-2 overflow-hidden">
      <SunIcon
        className={`absolute top-1/2 -translate-y-1/2 transition-all duration-200 ease-in-out [&_path]:stroke-gray-1 ${resolvedTheme === "light" ? "-left-7" : "left-0"}
        `}
        onClick={() => setTheme("light")}
      />
      <MoonIcon
        className={`absolute top-1/2 -translate-y-1/2 transition-all  duration-200 ease-in-out [&_path]:stroke-gray-1 ${resolvedTheme === "dark" ? "left-9" : "left-1"}`}
        onClick={() => setTheme("dark")}
      />
    </div>
  );
};

export default ThemeSwitcher;
