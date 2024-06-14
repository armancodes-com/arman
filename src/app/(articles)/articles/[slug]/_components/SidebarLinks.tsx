import SidebarLink from "./SidebarLink";

interface ISidebarLinksProps {
  links: { title: string; href: string }[];
}

const SidebarLinks: React.FC<ISidebarLinksProps> = ({ links }) => {
  return (
    <aside className="relative hidden w-full max-w-[172px] sm:block">
      <div className="sticky top-20 space-y-3">
        <header className="pb-2 pr-1">
          <h3 className="text-body2 leading-9 text-primary">On this blog</h3>
        </header>
        <ul className="pt-1">
          {links?.map((link) => (
            <SidebarLink href={`#${link?.href}`}>{link?.title}</SidebarLink>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarLinks;
