import SectionHeader from "@/components/ui/SectionHeader";
import WorkExperienceList from "./WorkExperienceList";
import Section from "@/components/ui/Section";

const WorkExperienceSection = () => {
  return (
    <Section type="common">
      <SectionHeader
        title="work"
        description="With over 4 years as a backend engineer, I specialize in backend services, microservices architecture, and comprehensive backend development strategies. Skilled in API design, database optimization, and meticulous documentation. Committed to delivering scalable solutions and staying updated with industry trends."
      />

      <WorkExperienceList />
    </Section>
  );
};

export default WorkExperienceSection;
