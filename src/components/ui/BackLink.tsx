import IconArrowLeftThin from "@/assets/icons/ArrowLeftThin";
import Link from "next/link";
import { ReactNode } from "react";

interface IBackLinkProps {
  href: string;
  children: ReactNode | string;
}

const BackLink: React.FC<IBackLinkProps> = ({ children, href }) => {
  return (
    <Link
      className="group flex w-max cursor-pointer items-center gap-2 text-body2 font-light text-gray-2"
      href={href}
    >
      <IconArrowLeftThin className="transition-all duration-100 ease-linear group-hover:-translate-x-1" />
      <span>{children}</span>
    </Link>
  );
};

export default BackLink;
