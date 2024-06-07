"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import IconArrowDownCircle from "@/assets/icons/ArrowDownCircle";
import { Alexandria } from "next/font/google";
import Link from "next/link";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  preload: true,
});

interface ISeriesLinkItemProps {
  children: ReactNode | string;
  href?: string;
}

const SeriesLinkItem: React.FC<ISeriesLinkItemProps> = ({ children, href }) => {
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
        className={`${alexandria.className} text-text-link-2 cursor-not-allowed text-caption2 transition-all duration-150 ease-linear`}
      >
        {children}
      </li>
    );
  }
};

const ArticleSeries = () => {
  const [isSeriesBoxOpen, setIsSeriesBoxOpen] = useState(false);
  const [listHeight, setListHeight] = useState(0);
  const listRef = useRef<HTMLUListElement | null>(null);

  const handleOpenSeriesBox = () => {
    setIsSeriesBoxOpen(!isSeriesBoxOpen);
  };

  useEffect(() => {
    if (listRef.current) {
      setListHeight(listRef.current.scrollHeight);
    }
  }, [isSeriesBoxOpen]);

  return (
    <div className="rounded-10 bg-tertiary-bg-2 px-2 py-4 transition-all delay-150 duration-150 ease-linear md:pl-6 md:pr-8">
      <div
        className={`flex justify-between ${isSeriesBoxOpen && "border-b border-[#9269BA] pb-6 pt-4"} cursor-pointer transition-all delay-150 duration-150 ease-linear`}
        onClick={handleOpenSeriesBox}
      >
        <div className="flex flex-col space-y-6">
          <span
            className={`${alexandria.className} text-caption2 font-medium capitalize text-[#9269BA] md:text-body2`}
          >
            series
          </span>
          <span
            className={`${alexandria.className} text-caption2 font-medium md:text-caption1`}
          >
            Build-Time Syntax Highlighting... |{" "}
            <span className="text-[#9269BA]">2 of 10</span>
          </span>
        </div>

        <div className="flex justify-center md:items-center">
          <IconArrowDownCircle
            viewBox="0 0 54 54"
            className={`h-8 w-8 cursor-pointer transition-all duration-150 ease-linear md:h-12 md:w-12 [&_path]:stroke-[#9269BA] ${isSeriesBoxOpen ? "rotate-180" : "rotate-0"}`}
          />
        </div>
      </div>

      {/* list items links */}
      <ul
        ref={listRef}
        style={{
          maxHeight: isSeriesBoxOpen ? `${listHeight}px` : "0",
        }}
        className={`space-y-6 overflow-hidden pt-6 transition-all duration-500 ease-linear ${
          isSeriesBoxOpen ? "opacity-100 delay-150" : "opacity-0"
        }`}
      >
        <SeriesLinkItem href="/articles">
          Build-Time Syntax Highlighting Build-Time Syntax Highlighting
        </SeriesLinkItem>

        <SeriesLinkItem>
          Build-Time Syntax Highlighting Build-Time Syntax Highlighting
        </SeriesLinkItem>

        <SeriesLinkItem href="/articles">
          Build-Time Syntax Highlighting Build-Time Syntax Highlighting
        </SeriesLinkItem>

        <SeriesLinkItem>
          Build-Time Syntax Highlighting Build-Time Syntax Highlighting
        </SeriesLinkItem>
      </ul>
    </div>
  );
};

export default ArticleSeries;
