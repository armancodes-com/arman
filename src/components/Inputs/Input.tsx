import SearchIcon from "@/assets/icons/SearchIcon";
import { twMerge } from "tailwind-merge";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hasSearchIcon?: boolean;
}

const Input: React.FC<IInputProps> = ({
  className,
  type = "text",
  inputMode,
  hasSearchIcon = false,
  ...props
}) => {
  return (
    <div className="relative flex">
      {hasSearchIcon && (
        <SearchIcon
          className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 stroke-2 [&_path]:stroke-primary "
          viewBox="0 0 24 24"
        />
      )}
      <input
        type={type}
        inputMode={inputMode || type === "number" ? "numeric" : "text"}
        className={twMerge(
          "w-full rounded-80 border border-border-articles bg-transparent px-4 py-2 text-caption2 capitalize leading-7 text-text-primary outline-primary",
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
