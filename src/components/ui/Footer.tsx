/* eslint-disable no-irregular-whitespace */
"use client";

import GithubIcon from "@/assets/icons/GithubIcon";
import IconReact from "@/assets/icons/ReactIcon";
import { useTheme } from "next-themes";
import { Alexandria } from "next/font/google";
import Image from "next/image";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  preload: true,
});

const Footer = () => {
  const { resolvedTheme } = useTheme();

  return (
    <footer className="bg-bgColor px-4 py-5 md:px-0 md:py-8">
      <div className="mx-auto max-w-[800px] space-y-12">
        <div className="flex justify-between">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-4">
              <Image
                src={
                  resolvedTheme === "light"
                    ? "/images/sample-logo.svg"
                    : "/images/sample-logo-white.svg"
                }
                alt="logo"
                width={40}
                height={40}
              />

              <p className="text-body2 font-bold capitalize text-text-primary">
                Arman
              </p>
              <p
                className={`text-caption2 text-text-primary md:text-body2 ${alexandria.className}`}
              >
                lorem@gmail.com
              </p>
            </div>
            <span>back-end engineer</span>
          </div>
          {/* socials */}
          <div className="w-full max-w-[112px] space-y-4">
            <h2
              className={`${alexandria.className} text-center text-body2 font-semibold sm:text-start sm:text-title3 sm:font-bold`}
            >
              Media
            </h2>
            <div className="flex items-center justify-between p-1">
              <GithubIcon className="[&_path]:fill-gray-1" />
              <IconReact className="[&_path]:fill-gray-1" />
              <GithubIcon className="[&_path]:fill-gray-1" />
            </div>
          </div>
        </div>

        <div
          className={`text-xs leading-4 text-text-primary md:text-body2 ${alexandria.className} text-center`}
        >
          <span>© 2024 Arman. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
