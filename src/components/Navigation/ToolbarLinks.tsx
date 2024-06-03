import GithubIcon from "@/assets/icons/GithubIcon";
import IconReact from "@/assets/icons/ReactIcon";
import Link from "next/link";

const ToolbarLinks = () => {
  return (
    <aside className="left-112 xl:left-106 fixed top-36 z-20 hidden flex-col gap-y-8 rounded-40 border border-primary px-3 py-2 lg:left-36 lg:flex">
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
