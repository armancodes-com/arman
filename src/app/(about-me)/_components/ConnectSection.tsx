import ConnectLinksList from "./ConnectList";
import SectionHeader from "@/components/ui/SectionHeader";

const ConnectSection = () => {
  return (
    <section className="mt-11 space-y-4 px-4 md:mt-20 md:space-y-10 md:p-0">
      <SectionHeader title="connect" />
      <ConnectLinksList />
    </section>
  );
};

export default ConnectSection;
