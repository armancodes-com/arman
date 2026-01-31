import { ReactNode } from "react";

const Tag = ({ children }: { children: string | ReactNode }) => {
  return (
    <span className="bg-text-link text-body2 rounded-2xl px-4 py-1 text-center font-light text-white transition-all duration-150 ease-linear hover:bg-[#7D6E8B]">
      {children}
    </span>
  );
};

export default Tag;
