import { ReactNode } from "react";

interface ISectionProps {
  children: ReactNode;
  hasEllipse?: boolean;
  type?: "primary" | "common";
  className?: string;
}

const Section: React.FC<ISectionProps> = ({
  children,
  hasEllipse = false,
  type = "common",
  className,
}) => {
  if (type === "primary") {
    return (
      <section
        className={`${hasEllipse ? "ellipse" : ""} relative mt-8 px-4 md:mt-24 md:px-0 ${className}`}
      >
        {children}
      </section>
    );
  }

  if (type === "common") {
    return (
      <section
        className={`mt-11 space-y-4 px-4 md:mt-20 md:space-y-10 md:p-0 ${className}`}
      >
        {children}
      </section>
    );
  }
};

export default Section;
