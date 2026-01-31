"use client";

import MoonIcon from "@/assets/icons/MoonIcon";
import SunIcon from "@/assets/icons/SunIcon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const isLightThemeActive = resolvedTheme === "light";

  if (!isMounted) {
    return (
      <div className="relative flex h-8 w-8 cursor-pointer items-center gap-2 overflow-hidden"></div>
    );
  }

  return (
    <div className="relative flex h-8 w-8 cursor-pointer items-center gap-2 overflow-hidden">
      <SunIcon
        viewBox="0 0 24 24"
        className={`[&_path]:stroke-gray-1 absolute top-1/2 h-6 w-6 -translate-y-1/2 transition-all duration-200 ease-in-out ${
          isLightThemeActive ? "-left-7" : "left-0"
        }`}
        onClick={() => setTheme("light")}
      />
      <MoonIcon
        viewBox="0 0 24 24"
        className={`[&_path]:stroke-gray-1 absolute top-1/2 h-6 w-6 -translate-y-1/2 transition-all duration-200 ease-in-out ${
          !isLightThemeActive ? "left-9" : "left-1"
        }`}
        onClick={() => setTheme("dark")}
      />
    </div>
  );
};

export default ThemeSwitcher;
