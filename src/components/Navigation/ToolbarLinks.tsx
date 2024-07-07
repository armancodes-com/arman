import { IToolbarLinkItemProps } from "@/constants/toolbarlinks.constants";
import Link from "next/link";

interface IToolbarLinksProps {
  links: IToolbarLinkItemProps[];
}

const ToolbarLinks: React.FC<IToolbarLinksProps> = ({ links }) => {
  return (
    <div className="absolute top-14 hidden h-full xl:-left-28 xl:block">
      <aside
        className="sticky top-36 flex flex-col gap-y-8 rounded-40 border border-primary px-3 py-2"
        data-testid="toolbar-lins-wrapper"
      >
        {links?.map((link) => (
          <div
            key={link.href}
            className="group flex h-8 w-8 items-center justify-center"
          >
            <Link href={link?.href} target="_blank">
              {link?.icon}
              <span aria-label={link.ariaLabel} className="sr-only">
                {link.ariaLabel}
              </span>
            </Link>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default ToolbarLinks;
