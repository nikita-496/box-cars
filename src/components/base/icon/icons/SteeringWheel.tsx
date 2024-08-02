import type { SvgIconProps } from "@mui/material";
import type { FC } from "react";

import { SvgIcon as MuiSvgIcon, styled } from "@mui/material";

const SvgIcon = styled(MuiSvgIcon, {
  name: "SteeringWheel",
  shouldForwardProp: (prop) => prop !== "fill",
})<SvgIconProps>(() => ({
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "0.3px",
  xmlns: "http://www.w3.org/2000/svg",
}));

SvgIcon.defaultProps = {
  viewBox: "0 0 18 18",
  focusable: "false",
  "aria-hidden": "true",
};

export const SteeringWheel: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_166_9818)">
        <mask
          id="mask0_166_9818"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="18"
          height="18"
        >
          <path d="M0 1.90735e-06H18V18H0V1.90735e-06Z" fill="white" />
        </mask>
        <g mask="url(#mask0_166_9818)">
          <path
            d="M16.875 8.61328C16.875 8.61328 13.0063 6.99609 8.96446 6.99609C4.92265 6.99609 1.05469 8.61328 1.05469 8.61328"
            stroke="#050B20"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.40943 16.5234C7.40943 12.2875 5.64613 11.2628 4.00806 11.25C2.58729 11.239 1.26074 11.9959 1.26074 11.9959"
            stroke="#050B20"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5908 16.5234C10.5908 12.2266 12.4052 11.2347 14.0627 11.25C15.4566 11.2629 16.7395 11.9959 16.7395 11.9959"
            stroke="#050B20"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.2926 16.1016C12.0402 16.8602 10.5711 17.2969 9 17.2969C4.4178 17.2969 0.703125 13.5822 0.703125 9C0.703125 4.41777 4.4178 0.703127 9 0.703127C13.5822 0.703127 17.2969 4.41777 17.2969 9C17.2969 10.7039 16.7715 12.2878 15.8906 13.6055"
            stroke="#050B20"
            stroke-width="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.27734 9.66797H10.6961"
            stroke="#050B20"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_166_9818">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
