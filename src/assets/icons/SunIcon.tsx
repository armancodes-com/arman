import * as React from "react";
import { SVGProps } from "react";

const SunIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.9124 18.5C16.5023 18.5 19.4124 15.5899 19.4124 12C19.4124 8.41015 16.5023 5.5 12.9124 5.5C9.32259 5.5 6.41245 8.41015 6.41245 12C6.41245 15.5899 9.32259 18.5 12.9124 18.5Z"
      stroke="#282C33"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.0524 19.14L19.9224 19.01M19.9224 4.99L20.0524 4.86L19.9224 4.99ZM5.77245 19.14L5.90244 19.01L5.77245 19.14ZM12.9124 2.08V2V2.08ZM12.9124 22V21.92V22ZM2.99244 12H2.91245H2.99244ZM22.9124 12H22.8324H22.9124ZM5.90244 4.99L5.77245 4.86L5.90244 4.99Z"
      stroke="#282C33"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SunIcon;
