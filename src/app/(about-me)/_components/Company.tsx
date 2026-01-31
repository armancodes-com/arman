import { ICompanyInfoProps } from "@/constants/Companies.constants";
import Image from "next/image";

const Company: React.FC<ICompanyInfoProps> = ({
  companyName,
  endData,
  image,
  location,
  role,
  jobType,
  startDate,
}) => {
  return (
    <article
      className="group flex h-full items-center gap-x-6"
      data-testid="company-component"
    >
      <figure className="border-primary relative h-[50px] w-[50px] overflow-hidden rounded-full transition-all duration-150 ease-linear group-hover:border-2 md:h-[80px] md:w-[80px]">
        <Image
          src={image}
          alt={`${companyName} logo`}
          fill
          className="h-full w-full object-cover object-center"
        />
      </figure>

      <div className="flex flex-[6] flex-col justify-between gap-y-2 sm:flex-row">
        <p className="text-caption2 md:text-caption1 font-light">
          <span className="group-hover:text-primary group-hover:font-bold md:font-medium">
            {role} at {companyName}
          </span>
          <span className="text-text-primary hidden sm:inline-block"> - </span>
          <span className="text-text-secondary inline-block w-full sm:w-fit">
            {" "}
            {location} · {jobType}
          </span>
        </p>

        <span className="text-caption2 text-text-primary md:text-caption1 inline-flex w-full max-w-28 font-light group-hover:font-bold sm:m-0 sm:justify-end md:max-w-40 md:font-normal">
          {startDate} - {endData}
        </span>
      </div>
    </article>
  );
};

export default Company;
