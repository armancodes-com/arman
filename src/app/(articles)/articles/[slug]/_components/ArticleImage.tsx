import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["500"],
  preload: true,
});

interface IArticleImageProps extends ImageProps {
  caption?: string;
  rounded?: boolean;
  reset?: boolean;
}

const ArticleImage: React.FC<IArticleImageProps> = ({
  src,
  width,
  height,
  alt,
  caption,
  rounded,
  priority,
  fill,
  reset,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        reset ? "" : "not-prose w-full",
        rounded && "overflow-hidden rounded-10",
      )}
    >
      <figure className={twMerge("m-0 flex flex-col", "gap-2")}>
        <Image
          {...props}
          src={src}
          width={width}
          height={height}
          alt={alt}
          priority={priority}
          fill={fill}
          className={twMerge(
            "h-auto w-full",
            rounded && "overflow-hidden rounded-10",
          )}
        />
        {caption && (
          <figcaption
            className={twMerge(
              "mx-auto my-2 max-w-md text-center text-xs font-medium leading-tight text-text-primary",
              "mx-auto w-full max-w-[700px] px-6 ",
              alexandria.className,
            )}
          >
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
};

export default ArticleImage;
