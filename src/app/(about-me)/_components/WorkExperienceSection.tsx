import SectionHeader from "@/components/ui/SectionHeader";
import WorkExperienceList from "./WorkExperienceList";
import Section from "@/components/ui/Section";

const WorkExperienceSection = () => {
  return (
    <Section type="common">
      <SectionHeader
        title="work"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
        purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
        rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed"
      />

      <WorkExperienceList />
    </Section>
  );
};

export default WorkExperienceSection;
