import { ReactNode } from "react";

const Tag = ({ children }: { children: string | ReactNode }) => {
  return (
    <span className="rounded-2xl bg-text-link px-4 py-1 text-center text-body2 font-light text-white transition-all duration-150 ease-linear hover:bg-[#7D6E8B]">
      {children}
    </span>
  );
};

export default Tag;
