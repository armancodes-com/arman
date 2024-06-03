import { SVGProps } from "react";
import * as React from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.4124 21C17.6591 21 21.9124 16.7467 21.9124 11.5C21.9124 6.25329 17.6591 2 12.4124 2C7.16565 2 2.91235 6.25329 2.91235 11.5C2.91235 16.7467 7.16565 21 12.4124 21Z"
      stroke="#282C33"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.9124 22L20.9124 20"
      stroke="#282C33"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SearchIcon;
