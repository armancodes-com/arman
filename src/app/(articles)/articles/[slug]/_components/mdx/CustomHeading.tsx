/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300"],
  preload: true,
});

interface ICustomHeadingProps {
  children: string | ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  id?: string;
}

const CustomHeadingWrapper: React.FC<{
  tooltip: boolean;
  children: ReactNode;
}> = ({ children, tooltip }) => {
  return (
    <div className="relative">
      {children}

      {tooltip && (
        <div
          className={`absolute -left-3 top-[120%] z-20 block whitespace-nowrap rounded-5 bg-gray-2 p-2 text-caption2 font-light text-white md:-left-12 ${alexandria.className}`}
        >
          copied
          <div className="absolute bottom-full left-3 -ml-1 rotate-180 !border-[5px] border-t border-transparent border-t-gray-2 md:left-8"></div>
        </div>
      )}
    </div>
  );
};

const CustomHeading: React.FC<ICustomHeadingProps> = ({
  children,
  as = "h1",
  id,
}) => {
  const [tooltip, showTooltip] = useState(false);
  const url = usePathname();

  const headingClass = `relative before:invisible md:left-0 left-4 before:absolute before:-left-6 before:cursor-pointer before:text-gray-2 before:opacity-0 before:transition-all before:duration-200 before:ease-linear before:content-['#'] md:mt-2 mt-0 hover:before:visible hover:before:opacity-100 scroll-mt-9 md:scroll-mt-25`;

  const baseUrlSection =
    typeof window !== "undefined" &&
    `${window.location.protocol}//${window.location.host}`;

  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(`${baseUrlSection}${url}#${id}`);
      showTooltip(true);
      setTimeout(() => showTooltip(false), 3000); // Tooltip disappears after 3 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  if (as === "h1") {
    return (
      <CustomHeadingWrapper tooltip={tooltip}>
        <h1
          className={headingClass}
          onClick={copyToClipboard}
          onKeyDown={copyToClipboard}
          id={id}
        >
          {children}
        </h1>
      </CustomHeadingWrapper>
    );
  }

  if (as === "h2") {
    return (
      <CustomHeadingWrapper tooltip={tooltip}>
        <h2
          className={headingClass}
          onClick={copyToClipboard}
          onKeyDown={copyToClipboard}
          id={id}
        >
          {children}
        </h2>
      </CustomHeadingWrapper>
    );
  }

  if (as === "h3") {
    return (
      <CustomHeadingWrapper tooltip={tooltip}>
        <h3
          className={`${headingClass}`}
          onClick={copyToClipboard}
          onKeyDown={copyToClipboard}
          id={id}
        >
          {children}
        </h3>
      </CustomHeadingWrapper>
    );
  }

  if (as === "h4") {
    return (
      <CustomHeadingWrapper tooltip={tooltip}>
        <h4
          className={headingClass}
          onClick={copyToClipboard}
          onKeyDown={copyToClipboard}
          id={id}
        >
          {children}
        </h4>
      </CustomHeadingWrapper>
    );
  }

  if (as === "h5") {
    return (
      <CustomHeadingWrapper tooltip={tooltip}>
        <h5
          className={headingClass}
          onClick={copyToClipboard}
          onKeyDown={copyToClipboard}
          id={id}
        >
          {children}
        </h5>
      </CustomHeadingWrapper>
    );
  }

  if (as === "h6") {
    return (
      <CustomHeadingWrapper tooltip={tooltip}>
        <h6
          className={headingClass}
          onClick={copyToClipboard}
          onKeyDown={copyToClipboard}
          id={id}
        >
          {children}
        </h6>
      </CustomHeadingWrapper>
    );
  }
};

export default CustomHeading;
