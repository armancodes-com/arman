import Image, { ImageProps } from "next/image";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

type TPropsToOmitKeys = "placeholder" | "blurDataURL" | "onLoad";

type TStaticImageComponentProps = {
  src: string;
  containerClassName?: string;
  placeHolderType?: "blur" | "color";
  animationType?: "opacity" | "slide";
  animationSlideDir?: "left" | "right" | "top" | "bottom";
} & (
  | {
      placeHolderType: "blur";
      animationType?: never;
      animationSlideDir?: never;
    }
  | {
      placeHolderType: "color";
      animationType: "opacity" | "slide";
      animationSlideDir: "left" | "right" | "top" | "bottom";
    }
  | {
      placeHolderType: "color";
      animationType: "opacity";
      animationSlideDir?: never;
    }
  | {
      placeHolderType: "color";
      animationType: "slide";
      animationSlideDir: "left" | "right" | "top" | "bottom";
    }
);

export type TImageColorPlaceholderProps = {
  r: number;
  g: number;
  b: number;
  hex: string;
};

export type TGetPlaceholderDataProps = {
  blurImage: string;
  color: TImageColorPlaceholderProps;
};

type TStaticImageProps = Omit<ImageProps, TPropsToOmitKeys> &
  TStaticImageComponentProps;

const StaticImage: React.FC<TStaticImageProps> = async ({
  containerClassName,
  ...props
}) => {
  const imageSrc = `./public/images${props?.src}`;

  const buffer = await fs.readFile(`${imageSrc}`);
  const { base64, color } = await getPlaiceholder(buffer);

  if (props?.placeHolderType === "blur" && base64) {
    return (
      <figure className={`relative ${containerClassName}`}>
        <Image
          {...props}
          src={imageSrc.replace(
            "./public/images",
            process.env.NODE_ENV === "production" ? "/arman/images" : "/images",
          )}
          placeholder="blur"
          blurDataURL={base64}
        />
      </figure>
    );
  }

  if (
    props?.placeHolderType === "color" &&
    props?.animationType === "opacity" &&
    color
  ) {
    return (
      <figure className={`relative ${containerClassName}`}>
        <span
          style={{
            backgroundColor: color.hex,
          }}
          className={`absolute h-full w-full ${
            !color ? "visible opacity-100" : "invisible opacity-0"
          } left-0 top-0 z-10 inline-block rounded transition-all duration-150 ease-in`}
        ></span>
        <Image
          {...props}
          src={imageSrc.replace("./public/images", "/images")}
        />
      </figure>
    );
  }
};

export default StaticImage;
