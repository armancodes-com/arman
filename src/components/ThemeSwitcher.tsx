import MoonIcon from "@/assets/icons/MoonIcon";
import SunIcon from "@/assets/icons/SunIcon";
import { useTheme } from "next-themes";

interface IThemeSwitcherProps {}

const ThemeSwitcher: React.FC<IThemeSwitcherProps> = () => {
  const { theme, setTheme } = useTheme();
  const isLightThemeActive = theme === "light";

  return (
    <div className="relative flex cursor-pointer items-center gap-2 overflow-hidden">
      <SunIcon
        className={`relative ${isLightThemeActive ? "-left-7" : "left-7"} transition-all duration-200 ease-in-out [&_path]:stroke-gray-1
        `}
        onClick={() => setTheme("light")}
      />

      <MoonIcon
        className={`relative [&_path]:stroke-gray-1 ${!isLightThemeActive ? "left-7" : "left-0"} transition-all duration-200 ease-in-out`}
        onClick={() => setTheme("dark")}
      />
    </div>
  );
};

export default ThemeSwitcher;
