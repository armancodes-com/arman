import { Alexandria } from "next/font/google";
import { ReactNode } from "react";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300"],
  preload: true,
});

const CustomHeadingWrapper: React.FC<{
  tooltip: boolean;
  children: ReactNode;
}> = ({ children, tooltip }) => {
  return (
    <div className="relative">
      {children}

      {tooltip && (
        <div
          className={`absolute -left-3 top-[120%] z-20 hidden whitespace-nowrap rounded-5 bg-gray-2 p-2 text-caption2 font-light text-white md:-left-12 lg:block ${alexandria.className}`}
        >
          copied
          <div className="absolute bottom-full left-3 -ml-1 rotate-180 !border-[5px] border-t border-transparent border-t-gray-2 md:left-8"></div>
        </div>
      )}
    </div>
  );
};

export default CustomHeadingWrapper;
