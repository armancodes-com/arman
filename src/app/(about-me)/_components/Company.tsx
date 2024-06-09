import { ICompanyInfoProps } from "@/constants/Companies.constants";
import Image from "next/image";

const Company: React.FC<ICompanyInfoProps> = ({
  companyName,
  endData,
  image,
  location,
  role,
  startDate,
}) => {
  return (
    <article className="group flex flex-wrap items-center justify-between transition-all duration-100 ease-in">
      <div className="flex items-center gap-x-4 md:gap-x-6">
        <figure className="relative h-[50px] w-[50px] overflow-hidden rounded-full border-primary transition-all duration-150 ease-linear group-hover:border-2 md:h-[80px] md:w-[80px]">
          <Image
            src={image}
            alt="company name"
            fill
            className="h-full w-full object-cover object-center"
          />
        </figure>

        <p className="text-caption2 font-light md:text-caption1">
          <span className="group-hover:font-bold group-hover:text-primary md:font-medium">
            {role} at {companyName}
          </span>
          <span className="text-text-secondary"> - {location}</span>
        </p>
      </div>
      <span className="ml-[4rem] inline-flex w-full max-w-28 text-left text-caption2 font-light text-text-primary group-hover:font-bold sm:m-0 md:max-w-40 md:justify-end md:text-caption1 md:font-normal">
        {startDate} - {endData}
      </span>
    </article>
  );
};

export default Company;
