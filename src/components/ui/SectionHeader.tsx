import { firaCode } from "@/app/fonts";

interface ISectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader: React.FC<ISectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <header
      className="space-y-4 md:space-y-10"
      data-testid="section-header-component"
    >
      <h2
        className={`${firaCode.className} text-body1 font-bold capitalize md:text-title3`}
      >
        {title}
      </h2>
      {description && (
        <p
          data-testid="section-header-description"
          className="text-body2 text-text-primary md:text-body1"
        >
          {description}
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
