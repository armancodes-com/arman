import heroImage from "@/public/images/hero-img.webp";
import armanFirstImage from "@/public/images/arman-one.webp";
import armanSecondImage from "@/public/images/arman-two.jpeg";
import armanThirdImage from "@/public/images/arman-three.webp";
import armanBikeImage from "@/public/images/arman-bike.jpeg";
import WHITE_LOGO_SVG from "@/public/images/white-logo.svg";
import DARK_LOGO_SVG from "@/public/images/dark-logo.svg";

export const IS_PRODUCTION = process.env.NODE_ENV === "production";

export {
  heroImage,
  armanFirstImage,
  armanSecondImage,
  DARK_LOGO_SVG,
  WHITE_LOGO_SVG,
  armanThirdImage,
  armanBikeImage,
};
