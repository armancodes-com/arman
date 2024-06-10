import LinkButton from "@/components/ui/LinkButton";
import { COMMUNICATION_LINKS_DATA } from "@/constants/CommunicationLinks.constants";

const ConnectLinksList = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-20 md:gap-y-6">
      {COMMUNICATION_LINKS_DATA.map((communicationItem) => (
        <LinkButton key={communicationItem.id} {...communicationItem}>
          {communicationItem.children}
        </LinkButton>
      ))}
    </div>
  );
};

export default ConnectLinksList;
