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
    <article className="group flex h-full items-center gap-x-6">
      <figure className="relative h-[50px] w-[50px] overflow-hidden rounded-full border-primary transition-all duration-150 ease-linear group-hover:border-2 md:h-[80px] md:w-[80px]">
        <Image
          src={image}
          alt="company name"
          fill
          className="h-full w-full object-cover object-center"
        />
      </figure>

      <div className="flex flex-[6] flex-col justify-between gap-y-2 sm:flex-row">
        <p className="text-caption2 font-light md:text-caption1">
          <span className="group-hover:font-bold group-hover:text-primary md:font-medium">
            {role} at {companyName}
          </span>
          <span className="hidden text-text-primary sm:inline-block"> - </span>
          <span className="inline-block w-full text-text-secondary sm:w-fit">
            {" "}
            {location} · {jobType}
          </span>
        </p>

        <span className="inline-flex w-full max-w-28 text-caption2 font-light text-text-primary group-hover:font-bold sm:m-0 sm:justify-end md:max-w-40 md:text-caption1 md:font-normal">
          {startDate} - {endData}
        </span>
      </div>
    </article>
  );
};

export default Company;
