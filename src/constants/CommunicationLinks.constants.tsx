import IconEmail from "@/assets/icons/EmailIcon";
import IconLinkedIn from "@/assets/icons/LinkedIcon";
import { ReactNode } from "react";

export interface ICommunicationLinkProps {
  id?: string;
  href: string;
  children: string | ReactNode;
  icon: ReactNode;
  hasLinkIcon?: boolean;
}

export const COMMUNICATION_LINKS_DATA: ICommunicationLinkProps[] = [
  {
    id: "1",
    children: "Email",
    href: "mailto:me@armancodes.com",
    icon: (
      <IconEmail className="[&_path]:stroke-gray-1 group-hover:[&_path]:stroke-primary" />
    ),
    hasLinkIcon: true,
  },
  {
    id: "2",
    children: "LinkedIn",
    href: "https://www.linkedin.com/in/armancodes/",
    icon: (
      <IconLinkedIn
        viewBox="0 0 74 74"
        className="mb-1 h-5 w-5 [&_path]:stroke-gray-1 group-hover:[&_path]:stroke-primary"
      />
    ),
    hasLinkIcon: true,
  },
];
