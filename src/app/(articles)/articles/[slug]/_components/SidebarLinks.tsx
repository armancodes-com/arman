const SidebarLink = () => {
  return (
    <li className="text-caption2 leading-9 text-text-primary">How It Works</li>
  );
};

const SidebarLinks = () => {
  return (
    <aside className="relative hidden w-full max-w-[172px] sm:block">
      <div className="sticky top-20 space-y-3">
        <header className="pb-2 pr-1">
          <h3 className="text-body2 leading-9 text-primary">On this blog</h3>
        </header>
        <ul className="pt-1">
          <SidebarLink />
          <li className="text-text-link text-caption2 leading-9">
            Why Is This a Big Deal?
          </li>
          <li className="text-text-link text-caption2 leading-9">
            Install Pretty Code
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarLinks;
