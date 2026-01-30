"use client";

import { quantico } from "@/app/fonts";
import IconNotFoundDark from "@/assets/icons/NotFoundDark";
import IconNotFoundLight from "@/assets/icons/NotFoundLight";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface INotFoundLayoutProps {
  title: string;
  subTitle: string;
  buttonLink: string;
  buttonTitle: string;
}

const NotFoundLayout: React.FC<INotFoundLayoutProps> = ({
  buttonLink,
  buttonTitle,
  subTitle,
  title,
}) => {
  const { resolvedTheme } = useTheme();
  const [initialIcon, setInitialIcon] = useState<"light" | "dark">("light");

  useEffect(() => {
    setInitialIcon("dark");
  }, []);

  return (
    <div
      className={`flex ${quantico.className} flex-col items-center justify-center gap-y-5 px-4 pt-10 md:gap-y-16 md:pt-24`}
      data-testid="not-found-wrapper"
    >
      <div className="flex flex-col items-center gap-4 text-[#282C33] dark:text-white">
        <h1 className="text-3xl font-bold uppercase md:text-[65px]">{title}</h1>
        <p className="text-lg font-bold uppercase md:text-2xl">{subTitle}</p>
      </div>

      {resolvedTheme === "light" || initialIcon === "light" ? (
        <IconNotFoundDark className="h-80 w-80 md:h-auto md:w-auto" />
      ) : (
        <IconNotFoundLight className="h-80 w-80 md:h-auto md:w-auto" />
      )}

      <Link
        href={buttonLink}
        className="inline-flex w-full items-center justify-center"
      >
        <button className="rounded-80 border-primary text-body2 text-primary flex w-full items-center justify-center border px-4 py-2 font-medium capitalize md:w-[300px]">
          {buttonTitle}
        </button>
      </Link>
    </div>
  );
};

export default NotFoundLayout;
