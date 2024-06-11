import GithubIcon from "@/assets/icons/GithubIcon";
import IconLinkedIn from "@/assets/icons/LinkedIcon";
import IconMedium from "@/assets/icons/MediumIcon";
import Link from "next/link";

const ToolbarLinks = () => {
  return (
    <div className="absolute top-14 hidden h-full xl:-left-28 xl:block">
      <aside className="sticky top-36 flex flex-col gap-y-8 rounded-40 border border-primary px-3 py-2 ">
        <div className="group flex h-8 w-8 items-center justify-center">
          <Link href={"https://github.com/armancodes"} target="_blank">
            <GithubIcon className="h-6 w-6 transition-all duration-100 ease-in [&_path]:fill-text-primary group-hover:[&_path]:fill-primary" />
            <span aria-label="github profile" className="sr-only">
              github profile
            </span>
          </Link>
        </div>
        <div className="group flex h-8 w-8 items-center justify-center">
          <Link
            href={"https://www.linkedin.com/in/armancodes/"}
            target="_blank"
          >
            <IconLinkedIn className="h-6 w-6 transition-all duration-100 ease-in [&_path]:stroke-text-primary group-hover:[&_path]:stroke-primary" />
            <span className="sr-only">linkedin profile</span>
          </Link>
        </div>
        <div className="group flex h-8 w-8 items-center justify-center">
          <Link href={"https://armancodes.medium.com/"} target="_blank">
            <IconMedium
              viewBox="0 0 48 48"
              className="h-7 w-7 transition-all duration-100 ease-in [&_path]:fill-text-primary group-hover:[&_path]:fill-primary"
            />
            <span className="sr-only">medium profile</span>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default ToolbarLinks;
