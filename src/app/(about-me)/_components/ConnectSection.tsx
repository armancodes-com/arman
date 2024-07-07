import Section from "@/components/ui/Section";
import ConnectLinksList from "./ConnectList";
import SectionHeader from "@/components/ui/SectionHeader";

const ConnectSection = () => {
  return (
    <Section type="common" data-testid="connect-section">
      <SectionHeader title="connect" />
      <ConnectLinksList />
    </Section>
  );
};

export default ConnectSection;
