import IconEmail from "@/assets/icons/EmailIcon";
import LinkButton from "@/components/ui/LinkButton";

const ConnectLinksList = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 md:gap-x-20 md:gap-y-6">
      <LinkButton
        href="/"
        icon={
          <IconEmail className="[&_path]:stroke-gray-1 group-hover:[&_path]:stroke-primary" />
        }
        hasLinkIcon
      >
        email
      </LinkButton>
      <LinkButton
        href="/"
        icon={
          <IconEmail className="[&_path]:stroke-gray-1 group-hover:[&_path]:stroke-primary" />
        }
        hasLinkIcon
      >
        email
      </LinkButton>
      <LinkButton
        href="/"
        icon={
          <IconEmail className="[&_path]:stroke-gray-1 group-hover:[&_path]:stroke-primary" />
        }
        hasLinkIcon
      >
        email
      </LinkButton>
      <LinkButton
        href="/"
        icon={
          <IconEmail className="[&_path]:stroke-gray-1 group-hover:[&_path]:stroke-primary" />
        }
        hasLinkIcon
      >
        email
      </LinkButton>
      <LinkButton
        href="/"
        icon={
          <IconEmail className="[&_path]:stroke-gray-1 group-hover:[&_path]:stroke-primary" />
        }
        hasLinkIcon
      >
        email
      </LinkButton>
      <LinkButton
        href="/"
        icon={
          <IconEmail className="[&_path]:stroke-gray-1 group-hover:[&_path]:stroke-primary" />
        }
        hasLinkIcon
      >
        email
      </LinkButton>
    </div>
  );
};

export default ConnectLinksList;
