import * as React from "react";
import { SVGProps } from "react";

const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={23}
    height={22}
    viewBox="0 0 23 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.94244 11.42C2.30244 16.57 6.67244 20.76 11.9024 20.99C15.5924 21.15 18.8924 19.43 20.8724 16.72C21.6924 15.61 21.2524 14.87 19.8824 15.12C19.2124 15.24 18.5224 15.29 17.8024 15.26C12.9124 15.06 8.91244 10.97 8.89244 6.14002C8.88244 4.84002 9.15244 3.61002 9.64244 2.49002C10.1824 1.25002 9.53244 0.660022 8.28244 1.19002C4.32244 2.86002 1.61244 6.85002 1.94244 11.42Z"
      stroke="#282C33"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default MoonIcon;
