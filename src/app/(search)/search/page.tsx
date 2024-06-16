/* eslint-disable no-irregular-whitespace */
import { Metadata } from "next";

import Section from "@/components/ui/Section";
import SearchItemList from "../_components/SearchItemList";
import SearchInput from "../_components/SearchInput";
import BackLink from "@/components/ui/BackLink";

export const metadata: Metadata = {
  title: "Arman Ahmadi - Search",
  authors: { name: "Arman Ahmadi", url: "http://armancodes.com" },
};

const Page = () => {
  return (
    <main className="min-h-svh px-4 pt-6 md:px-0 md:pt-11">
      <BackLink href="/">back</BackLink>

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
