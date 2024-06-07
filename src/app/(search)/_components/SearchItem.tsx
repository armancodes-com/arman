import Link from "next/link";

const SearchItem = () => {
  return (
    <article className="border-border-gray border-b pb-8">
      <header className="space-y-2">
        <Link
          href={"/articles"}
          className="hover:underline hover:underline-offset-4"
        >
          <h2 className="text-caption2 text-text-primary md:text-body2">
            Technical Debt, Organizational Debt |{" "}
            <span className="text-primary">article</span>
          </h2>
        </Link>

        <span className="text-xs font-light text-text-primary md:text-caption2">
          10.Oct 2023
        </span>
      </header>
    </article>
  );
};

export default SearchItem;
