import IconArrowRight from "@/assets/icons/ArrowRightIcon";
import { Alexandria, Fira_Code } from "next/font/google";
import Link from "next/link";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "600"],
});

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  preload: true,
});

interface IHeaderProps {
  title: string;
  linkText?: string;
  href?: string;
}

const Header: React.FC<IHeaderProps> = ({ title, linkText, href }) => {
  return (
    <header className="flex items-center justify-between">
      <div
        className={`${firaCode.className} text-body1 font-bold capitalize leading-4 text-primary md:text-title3`}
      >
        <h2 className="tracking-wide" data-testid="header-text">
          {title}
        </h2>
        <span className="relative inline-block w-full border border-primary bg-primary before:absolute before:-left-1 before:-top-[4px] before:h-2 before:w-2 before:rounded-full before:bg-primary after:absolute after:-right-1 after:-top-[4px] after:h-2 after:w-2 after:rounded-full after:bg-primary md:border-2 md:before:-top-[6px] md:before:h-3 md:before:w-3 md:after:-top-[6px] md:after:h-3 md:after:w-3"></span>
      </div>

      {linkText && href && (
        <Link
          href={href}
          className={`flex items-center gap-2 ${alexandria.className} group text-body2 text-primary`}
        >
          <span className="">{linkText}</span>
          <IconArrowRight
            viewBox="0 0 22 22"
            className="relative left-0 mt-1 h-6 w-6 transition-all duration-75 ease-linear group-hover:left-1 [&_path]:stroke-primary"
          />
        </Link>
      )}
    </header>
  );
};

export default Header;
