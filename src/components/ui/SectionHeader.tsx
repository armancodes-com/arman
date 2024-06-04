import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
});

interface ISectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader: React.FC<ISectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <header className="space-y-4 md:space-y-10">
      <h2
        className={`${firaCode.className} text-body1 font-bold capitalize md:text-title3`}
      >
        {title}
      </h2>
      {description && (
        <p className="text-body2 text-text-primary md:text-body1">
          {description}
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
