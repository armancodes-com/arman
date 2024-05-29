import { useTheme } from "next-themes";

interface IThemeSwitcherProps {
  isOpen: boolean;
  onClickCLose: () => void;
}

const ThemeSwitcher: React.FC<IThemeSwitcherProps> = ({
  isOpen,
  onClickCLose,
}) => {
  const { theme, setTheme } = useTheme();

  return (
    <ul
      className={`p-2 ${isOpen ? "visible opacity-100" : "invisible opacity-0"} absolute -left-28 top-10 z-0 w-32 rounded-lg bg-white shadow-md transition-all duration-200 ease-in-out dark:bg-dark-color`}
    >
      <li
        className={`cursor-pointer py-2 pl-10 pr-4 capitalize text-gray-1 transition-all duration-150 ease-in hover:bg-purple-2 hover:text-gray-1 dark:text-white dark:hover:bg-gray-3 ${theme === "light" ? "font-bold" : "font-normal"}`}
        onClick={() => {
          setTheme("light");
          onClickCLose();
        }}
      >
        light
      </li>
      <li
        className={`cursor-pointer py-2 pl-10 pr-4 capitalize text-gray-1 transition-all duration-150 ease-in hover:bg-purple-2 hover:text-gray-1 dark:text-white dark:hover:bg-gray-3 ${theme === "dark" ? "font-bold" : "font-normal"}`}
        onClick={() => {
          setTheme("dark");
          onClickCLose();
        }}
      >
        dark
      </li>
    </ul>
  );
};

export default ThemeSwitcher;
