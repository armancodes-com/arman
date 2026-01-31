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
      rel="noopener noreferrer"
      className="group rounded-80 border-primary flex w-full min-w-[200px] items-center justify-between border-2 px-6 py-4 transition-all duration-200 ease-linear"
    >
      <div className="flex items-center gap-2">
        {icon}
        <span
          className={`text-caption1 font-light ${alexandria.className} group-hover:text-primary tracking-wide capitalize`}
        >
          {children}
        </span>
        <span className="sr-only"> (opens in a new tab)</span>
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
