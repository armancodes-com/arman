import { ReactNode } from "react";
import Link from "next/link";
import { alexandria } from "@/app/fonts";

interface ISeriesLinkItemProps {
  children: ReactNode | string;
  href?: string;
}

const ArticleSeriesLink: React.FC<ISeriesLinkItemProps> = ({
  children,
  href,
}) => {
  if (href) {
    return (
      <li
        className={`${alexandria.className} text-caption2 hover:text-primary underline underline-offset-4 transition-all duration-150 ease-linear`}
      >
        <Link href={href}>{children}</Link>
      </li>
    );
  }

  if (!href) {
    return (
      <li
        className={`${alexandria.className} text-caption2 text-text-link-2 cursor-not-allowed transition-all duration-150 ease-linear`}
      >
        {children}
      </li>
    );
  }
};

export default ArticleSeriesLink;
