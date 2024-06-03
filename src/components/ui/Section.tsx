import { ReactNode } from "react";

interface ISectionProps {
  children: ReactNode;
}

const Section: React.FC<ISectionProps> = ({ children }) => {
  return <section className="mt-20 px-4 md:mt-60 md:px-0">{children}</section>;
};

export default Section;
