import SectionHeader from "@/components/ui/SectionHeader";
import WorkExperienceList from "./WorkExperienceList";
import Section from "@/components/ui/Section";
import { ABOUT_ME_WORK_EXPERIENCE_DESCRIPTION } from "@/constants/Content.constants";

const WorkExperienceSection = () => {
  return (
    <Section type="common">
      <SectionHeader
        title="work"
        description={ABOUT_ME_WORK_EXPERIENCE_DESCRIPTION}
      />

      <WorkExperienceList />
    </Section>
  );
};

export default WorkExperienceSection;
