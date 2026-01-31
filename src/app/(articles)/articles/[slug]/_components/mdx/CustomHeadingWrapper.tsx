import { alexandria } from "@/app/fonts";
import { ReactNode } from "react";

const CustomHeadingWrapper: React.FC<{
  tooltip: boolean;
  children: ReactNode;
}> = ({ children, tooltip }) => {
  return (
    <div className="relative">
      {children}

      {tooltip && (
        <div
          className={`rounded-5 bg-gray-2 text-caption2 absolute top-[120%] -left-3 z-20 hidden p-2 font-light whitespace-nowrap text-white md:-left-12 lg:block ${alexandria.className}`}
        >
          copied
          <div className="border-t-gray-2 absolute bottom-full left-3 -ml-1 rotate-180 !border-[5px] border-t border-transparent md:left-8"></div>
        </div>
      )}
    </div>
  );
};

export default CustomHeadingWrapper;
