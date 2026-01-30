import IconLink from "@/assets/icons/LinkIcon";
import { ICommunicationLinkProps } from "@/constants/CommunicationLinks.constants";
import { alexandria } from "@/app/fonts";
import Link from "next/link";

const LinkButton: React.FC<ICommunicationLinkProps> = ({
  hasLinkIcon = false,
  children,
  icon,
  href,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="group flex w-full min-w-[200px] items-center justify-between rounded-80 border-2 border-primary px-6 py-4 transition-all duration-200 ease-linear"
    >
      <div className="flex items-center gap-2">
        {icon}
        <span
          className={`text-caption1 font-light ${alexandria.className} capitalize tracking-wide group-hover:text-primary`}
        >
          {children}
        </span>
      </div>

      {hasLinkIcon && (
        <IconLink
          data-testid="LinkButton-icon"
          className="[&_path]:stroke-gray-1 group-hover:[&_path]:stroke-primary"
        />
      )}
    </Link>
  );
};

export default LinkButton;
