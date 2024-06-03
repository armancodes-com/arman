import GithubIcon from "@/assets/icons/GithubIcon";
import IconReact from "@/assets/icons/ReactIcon";
import Link from "next/link";

const ToolbarLinks = () => {
  return (
    <div className="absolute top-14 hidden h-full xl:-left-28 xl:block">
      <aside className="sticky top-36 flex flex-col gap-y-8 rounded-40 border border-primary px-3 py-2 ">
        <div className="group flex h-8 w-8 items-center justify-center">
          <Link href={"/"}>
            <GithubIcon className="transition-all duration-100 ease-in group-hover:[&_path]:fill-primary" />
          </Link>
        </div>
        <div className="group flex h-8 w-8 items-center justify-center">
          <Link href={"/"}>
            <IconReact className="transition-all duration-100 ease-in group-hover:[&_path]:fill-primary" />
          </Link>
        </div>
        <div className="group flex h-8 w-8 items-center justify-center">
          <Link href={"/"}>
            <IconReact className="transition-all duration-100 ease-in group-hover:[&_path]:fill-primary" />
          </Link>
        </div>
        <div className="group flex h-8 w-8 items-center justify-center">
          <Link href={"/"}>
            <GithubIcon className="transition-all duration-100 ease-in group-hover:[&_path]:fill-primary" />
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default ToolbarLinks;
