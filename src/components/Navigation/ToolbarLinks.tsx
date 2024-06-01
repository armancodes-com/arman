import GithubIcon from "@/assets/icons/GithubIcon";
import IconReact from "@/assets/icons/ReactIcon";
import Link from "next/link";

const ToolbarLinks = () => {
  return (
    <aside className="rounded-40 absolute -left-28 top-5 z-20 hidden flex-col gap-y-8 border border-primary px-3 py-2 lg:flex">
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
  );
};

export default ToolbarLinks;
