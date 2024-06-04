import { companyLogo } from "@/constants";
import Image from "next/image";

const Company = () => {
  return (
    <article className="group flex flex-wrap items-center justify-between transition-all duration-100 ease-in">
      <div className="flex items-center gap-x-4 md:gap-x-6">
        <figure className="relative h-[50px] w-[50px] overflow-hidden rounded-full border-primary group-hover:border-2 md:h-[80px] md:w-[80px]">
          <Image
            src={companyLogo}
            alt="company name"
            fill
            className="h-full w-full object-cover object-center"
          />
        </figure>

        <p className="text-caption2 font-light md:text-caption1">
          <span className="group-hover:font-bold group-hover:text-primary md:font-medium">
            Lorem ipsum dolor
          </span>
          <span className="text-text-secondary"> - Lorem Office</span>
        </p>
      </div>
      <span className="ml-[4.1rem] text-caption2 font-light text-text-primary group-hover:font-bold sm:m-0 md:text-caption1 md:font-normal">
        2019 - 2020
      </span>
    </article>
  );
};

export default Company;
