import GithubIcon from "@/assets/icons/GithubIcon";
import IconLinkedIn from "@/assets/icons/LinkedIcon";
import IconMedium from "@/assets/icons/MediumIcon";
import { ReactNode } from "react";

export interface IToolbarLinkItemProps {
  href: string;
  icon: ReactNode;
  ariaLabel: string;
}

export const toolbarLinks: IToolbarLinkItemProps[] = [
  {
    href: "https://github.com/armancodes",
    ariaLabel: "github profile",
    icon: (
      <GithubIcon className="[&_path]:fill-text-primary group-hover:[&_path]:fill-primary h-6 w-6 transition-all duration-100 ease-in" />
    ),
  },
  {
    href: "https://www.linkedin.com/in/armancodes/",
    ariaLabel: "linkedin profile",
    icon: (
      <IconLinkedIn className="[&_path]:stroke-text-primary group-hover:[&_path]:stroke-primary h-6 w-6 transition-all duration-100 ease-in" />
    ),
  },
  {
    href: "https://armancodes.medium.com/",
    ariaLabel: "medium profile",
    icon: (
      <IconMedium
        viewBox="0 0 48 48"
        className="[&_path]:fill-text-primary group-hover:[&_path]:fill-primary h-7 w-7 transition-all duration-100 ease-in"
      />
    ),
  },
];
