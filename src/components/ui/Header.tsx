import { alexandria, firaCode } from "@/app/fonts";
import IconArrowRight from "@/assets/icons/ArrowRightIcon";
import Link from "next/link";

interface IHeaderProps {
  title: string;
  linkText?: string;
  href?: string;
}

const Header: React.FC<IHeaderProps> = ({ title, linkText, href }) => {
  return (
    <header className="flex items-center justify-between">
      <div
        className={`${firaCode.className} text-body1 text-primary md:text-title3 leading-4 font-bold capitalize`}
      >
        <h2 className="tracking-wide" data-testid="header-text">
          {title}
        </h2>
        <span className="border-primary bg-primary before:bg-primary after:bg-primary relative inline-block w-full border before:absolute before:-top-[4px] before:-left-1 before:h-2 before:w-2 before:rounded-full after:absolute after:-top-[4px] after:-right-1 after:h-2 after:w-2 after:rounded-full md:border-2 md:before:-top-[6px] md:before:h-3 md:before:w-3 md:after:-top-[6px] md:after:h-3 md:after:w-3"></span>
      </div>

      {linkText && href && (
        <Link
          href={href}
          className={`flex items-center gap-2 ${alexandria.className} group text-body2 text-primary`}
        >
          <span className="">{linkText}</span>
          <IconArrowRight
            viewBox="0 0 22 22"
            className="[&_path]:stroke-primary relative left-0 mt-1 h-6 w-6 transition-all duration-75 ease-linear group-hover:left-1"
          />
        </Link>
      )}
    </header>
  );
};

export default Header;
