import * as React from "react";
import { SVGProps } from "react";
const IconLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2.88318C6.48 2.88318 2 7.36318 2 12.8832C2 18.4032 6.48 22.8832 12 22.8832C17.52 22.8832 22 18.4032 22 12.8832"
      stroke="#282C33"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 11.8832L21.2 3.68318"
      stroke="#282C33"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.9999 7.71318V2.88318H17.1699"
      stroke="#282C33"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default IconLink;
