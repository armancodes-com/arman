import Image from "next/image";
import { twMerge } from "tailwind-merge";

type TArticleImageProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  breakout?: boolean;
  rounded?: boolean;
  priority?: boolean;
  reset?: boolean;
};

const ArticleImage: React.FC<TArticleImageProps> = ({
  src,
  width,
  height,
  alt,
  caption,
  breakout,
  rounded,
  priority,
  reset,
}) => {
  return (
    <div
      className={twMerge(
        reset ? "" : "not-prose my-8 w-full",
        breakout ? "bg-tertiary" : "",
        (rounded || breakout) && "overflow-hidden rounded-md md:rounded-lg",
      )}
    >
      <figure
        className={twMerge("m-0 flex flex-col", breakout ? "gap-4" : "gap-2")}
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          priority={priority}
          className={twMerge(
            "h-auto w-full",
            breakout ? "bg-tertiary" : "",
            (rounded || breakout) &&
              "bg-tertiary overflow-hidden rounded-md md:rounded-lg",
          )}
        />
        {caption && (
          <figcaption
            className={twMerge(
              "text-tertiary mx-auto my-2 max-w-md text-center text-xs font-medium leading-tight",
              breakout && "mx-auto w-full max-w-[700px] px-6 ",
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
