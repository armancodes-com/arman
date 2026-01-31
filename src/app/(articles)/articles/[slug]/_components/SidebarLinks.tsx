import SidebarLink from "./SidebarLink";

interface ISidebarLinksProps {
  links: { title: string; href: string }[];
}

const SidebarLinks: React.FC<ISidebarLinksProps> = ({ links }) => {
  return (
    <aside className="absolute top-0 -right-52 hidden h-full w-full max-w-[172px] sm:block">
      <div className="sticky top-20 space-y-3">
        <header className="pr-1 pb-2">
          <h3 className="text-body2 text-primary leading-9">On this blog</h3>
        </header>
        <ul className="pt-1">
          {links?.map((link) => (
            <SidebarLink href={`#${link?.href}`} key={link?.href}>
              {link?.title}
            </SidebarLink>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarLinks;
