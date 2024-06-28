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
        className={`${alexandria.className} text-caption2 underline underline-offset-4 transition-all duration-150 ease-linear hover:text-primary`}
      >
        {/* //TODO: update href */}
        <Link href={"/articles"}>{children}</Link>
      </li>
    );
  }

  if (!href) {
    return (
      <li
        className={`${alexandria.className} cursor-not-allowed text-caption2 text-text-link-2 transition-all duration-150 ease-linear`}
      >
        {children}
      </li>
    );
  }
};

export default ArticleSeriesLink;
