import SearchIcon from "@/assets/icons/SearchIcon";
import { twMerge } from "tailwind-merge";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasSearchIcon?: boolean;
}

const INPUT_BASE_STYLES =
  "w-full rounded-80 border border-border-articles bg-transparent px-4 py-2 text-caption2 leading-7 text-text-primary outline-primary";

const INPUT_DISABLED_STYLES =
  "disabled:cursor-not-allowed disabled:border disabled:border-gray-500 disabled:bg-gray-100";

const INPUT_DARK_DISABLED_STYLES =
  "dark:disabled:border-gray-950 dark:disabled:bg-gray-600 dark:disabled:text-white";

const INPUT_BASE_CLASSES = [
  INPUT_BASE_STYLES,
  INPUT_DISABLED_STYLES,
  INPUT_DARK_DISABLED_STYLES,
].join(" ");

const INPUT_WITH_ICON_PADDING_CLASSES = "pl-12";

const INPUT_ICON_CLASSES =
  "absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 stroke-2 [&_path]:stroke-primary";

const Input: React.FC<InputProps> = ({
  className,
  type = "text",
  hasSearchIcon = false,
  ...props
}) => {
  return (
    <div className="relative flex">
      {hasSearchIcon && (
        <SearchIcon
          data-testid="input-icon"
          className={INPUT_ICON_CLASSES}
          viewBox="0 0 24 24"
        />
      )}
      <input
        type={type}
        className={twMerge(
          INPUT_BASE_CLASSES,
          hasSearchIcon && INPUT_WITH_ICON_PADDING_CLASSES,
          className,
        )}
        {...props}
      />
    </div>
  );
};

Input.displayName = "Input";

export default Input;
