import { useMDXComponent } from "next-contentlayer/hooks";
import ArticleImage from "../ArticleImage";
import Link from "next/link";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300"],
  preload: true,
});

interface CustomLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

const CustomLink: React.FC<CustomLinkProps> = (props) => {
  const href = props?.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link
        {...props}
        href={href}
        className="text-text-primary underline underline-offset-4"
      >
        {props.children}
      </Link>
    );
  }
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="font-normal text-text-primary underline underline-offset-4"
      {...props}
      aria-label="link"
    />
  );
};

// const FigCaption = (props) => {
//   console.log(props, "props");

//   return <figcaption>{props?.children}</figcaption>;
// };

const components = {
  Image: ArticleImage,
  a: CustomLink,
  Link: CustomLink,
  // figcation: (props) => <FigCaption {...props}>{props?.children}</FigCaption>,
  // div: (props) => <FigCaption {...props}>{props?.children}</FigCaption>,
};

const MdxWrapper = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code, { components });

  return (
    <div
      className={`prose prose-neutral animate-in text-caption2 leading-6 text-text-primary prose-p:font-light md:text-body2 ${alexandria.className} prose-headings:text-text-primary prose-h1:text-title2 prose-h2:text-title3 prose-h3:text-body1 prose-h4:text-body1 prose-h5:text-body2 prose-h6:text-body2 prose-blockquote:text-text-primary prose-figcaption:mx-auto prose-figcaption:max-w-md prose-figcaption:text-center prose-figcaption:text-caption2 prose-figcaption:text-gray-2 prose-strong:text-text-primary`}
      style={{ "--index": 3 } as React.CSSProperties}
    >
      <Component components={components} />
    </div>
  );
};

export default MdxWrapper;
