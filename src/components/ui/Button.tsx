import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode | string;
};

const Button: React.FC<TButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={twMerge(
        "flex w-full items-center justify-center rounded-80 border border-primary px-4 py-2 text-body2 font-medium text-primary disabled:cursor-not-allowed disabled:border disabled:border-gray-500 disabled:bg-gray-100 disabled:text-gray-500 dark:disabled:border-gray-950 dark:disabled:bg-gray-600 dark:disabled:text-white",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
