import SearchIcon from "@/assets/icons/SearchIcon";
import { twMerge } from "tailwind-merge";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasSearchIcon?: boolean;
}

const Input: React.FC<IInputProps> = ({
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
          className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 stroke-2 [&_path]:stroke-primary "
          viewBox="0 0 24 24"
        />
      )}
      <input
        type={type}
        className={twMerge(
          "w-full rounded-80 border border-border-articles bg-transparent px-4 py-2 text-caption2 leading-7 text-text-primary outline-primary disabled:cursor-not-allowed disabled:border disabled:border-gray-500 disabled:bg-gray-100 dark:disabled:border-gray-950 dark:disabled:bg-gray-600 dark:disabled:text-white",
          hasSearchIcon && "pl-12",
          className,
        )}
        {...props}
      />
    </div>
  );
};

Input.displayName = "Input";

export default Input;
