import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from "@mui/material";
import { FC } from "react";

const SvgIcon = styled(MuiSvgIcon, {
  name: "TransparentPricing",
  shouldForwardProp: (prop) => prop !== "fill",
})<SvgIconProps>(() => ({
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "0.3px",
  xmlns: "http://www.w3.org/2000/svg",
}));

SvgIcon.defaultProps = {
  viewBox: "0 0 60 60",
  focusable: "false",
  "aria-hidden": "true",
};

export const TransparentPricing: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_24_681)">
        <path
          d="M8.75576 36.7478L35.3054 10.198C37.136 8.36741 40.104 8.36741 41.9346 10.198L36.8955 5.15894C35.0649 3.32837 32.097 3.32837 30.2664 5.15894L3.71671 31.7087C1.88613 33.5393 1.88613 36.5073 3.71671 38.3378L8.75576 43.3768C6.92518 41.5462 6.92518 38.5783 8.75576 36.7478Z"
          fill={props.fill}
        ></path>
        <path
          d="M50.1537 18.4171C51.9843 20.2477 51.9843 23.2157 50.1537 25.0463L23.6039 51.5959C21.7734 53.4265 18.8054 53.4265 16.9748 51.5959L3.71671 38.3378C1.88613 36.5072 1.88613 33.5392 3.71671 31.7086L30.2664 5.15894C32.097 3.32836 35.0649 3.32836 36.8955 5.15894L43.5247 11.7881L52.9689 2.34387"
          stroke="#405FF2"
          strokeWidth="3"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M18.9633 31.0458C18.7631 32.4554 19.2051 33.9388 20.2894 35.0231C22.12 36.8537 25.088 36.8537 26.9186 35.0231C28.7492 33.1926 28.7492 30.2246 26.9186 28.394C25.088 26.5634 25.088 23.5954 26.9186 21.7648C28.7492 19.9342 31.7172 19.9342 33.5478 21.7648C34.6321 22.8491 35.0741 24.3325 34.8739 25.7421"
          stroke="#405FF2"
          strokeWidth="3"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M16.9749 38.3378L20.2894 35.0232"
          stroke="#405FF2"
          strokeWidth="3"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M33.5476 21.765L36.8621 18.4504"
          stroke="#405FF2"
          strokeWidth="3"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M43.5938 57.6562L57.6563 43.5937"
          stroke="#FF5CF4"
          strokeWidth="3"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_24_681">
          <rect width="60" height="60" fill="white"></rect>
        </clipPath>
      </defs>
    </SvgIcon>
  );
};