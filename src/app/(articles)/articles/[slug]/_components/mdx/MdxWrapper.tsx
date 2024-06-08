import { useMDXComponent } from "next-contentlayer/hooks";
import ArticleImage from "../ArticleImage";
import Link from "next/link";

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
    />
  );
};

const components = {
  Image: ArticleImage,
  a: CustomLink,
  Link: CustomLink,
  // Alert: Alert,
  // Parallax: Parallax,
  // Weather: Weather,
  // WeatherList: WeatherList,
  // LinkPreview: LinkPreview,
};

const MdxWrapper = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code, { components });

  return <Component components={components} />;
};

export default MdxWrapper;
