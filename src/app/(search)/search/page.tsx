/* eslint-disable no-irregular-whitespace */
import IconArrowLeftThin from "@/assets/icons/ArrowLeftThin";
import Section from "@/components/ui/Section";
import Link from "next/link";
import SearchItemList from "../_components/SearchItemList";
import SearchInput from "../_components/SearchInput";

const Page = () => {
  return (
    <main className="min-h-svh px-4 pt-6 md:px-0 md:pt-11">
      <Link
        className="group flex w-max cursor-pointer items-center gap-2 text-body2 font-light text-gray-2"
        href={"/"}
      >
        <IconArrowLeftThin className="transition-all duration-100 ease-linear group-hover:-translate-x-1" />
        <span>back</span>
      </Link>

      <SearchInput />

      <Section type="common" className="!px-0">
        <header className="mb-10 mt-6 md:mb-12 md:mt-16">
          <span className="text-caption2 text-gray-2">
            Found 6 results for 'tec'
          </span>
        </header>

        <SearchItemList />
      </Section>
    </main>
  );
};

export default Page;
