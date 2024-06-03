import { ReactNode } from "react";

interface ISectionProps {
  children: ReactNode;
  hasEllipse?: boolean;
}

const Section: React.FC<ISectionProps> = ({ children, hasEllipse = false }) => {
  return (
    <section
      className={`${hasEllipse ? "ellipse" : ""} relative mt-20 px-4 md:mt-24 md:px-0`}
    >
      {children}
    </section>
  );
};

export default Section;
