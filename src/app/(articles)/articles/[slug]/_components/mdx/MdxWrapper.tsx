/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMDXComponent } from "next-contentlayer/hooks";
import ArticleImage from "../ArticleImage";
import Link from "next/link";
import { Alexandria } from "next/font/google";
import CustomHeading from "./CustomHeading";

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

const components = {
  Image: ArticleImage,
  a: CustomLink,
  Link: CustomLink,
  h1: (props: any) => (
    <CustomHeading as="h1" {...props}>
      {props?.children}
    </CustomHeading>
  ),
  h2: (props: any) => (
    <CustomHeading as="h2" {...props}>
      {props?.children}
    </CustomHeading>
  ),
  h3: (props: any) => (
    <CustomHeading as="h3" {...props}>
      {props?.children}
    </CustomHeading>
  ),
  h4: (props: any) => (
    <CustomHeading as="h4" {...props}>
      {props?.children}
    </CustomHeading>
  ),
  h5: (props: any) => (
    <CustomHeading as="h5" {...props}>
      {props?.children}
    </CustomHeading>
  ),
  h6: (props: any) => (
    <CustomHeading as="h6" {...props}>
      {props?.children}
    </CustomHeading>
  ),
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
