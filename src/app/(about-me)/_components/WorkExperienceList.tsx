import { COMPANIES_DATA } from "@/constants/Companies.constants";
import Company from "./Company";

const WorkExperienceList = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      {COMPANIES_DATA.map((company) => (
        <Company key={company.id} {...company} />
      ))}
    </div>
  );
};

export default WorkExperienceList;
