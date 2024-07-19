import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from "@mui/material";
import { FC } from "react";

const SvgIcon = styled(MuiSvgIcon, {
  name: "Search",
  shouldForwardProp: (prop) => prop !== "fill",
})<SvgIconProps>(() => ({
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "0.3px",
  xmlns: "http://www.w3.org/2000/svg",
}));

SvgIcon.defaultProps = {
  viewBox: "0 0 28 28",
  focusable: "false",
  "aria-hidden": "true",
};

export const Search: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_178_11721)">
        <path
          d="M11.541 23.0605C5.18315 23.0605 0.0107193 17.888 0.0107193 11.5302C0.0107193 5.17243 5.18315 0 11.541 0C17.8988 0 23.0712 5.17243 23.0712 11.5302C23.0712 17.888 17.8988 23.0605 11.541 23.0605ZM11.541 2.18583C6.38841 2.18583 2.19655 6.3777 2.19655 11.5302C2.19655 16.6828 6.38841 20.8746 11.541 20.8746C16.6935 20.8746 20.8854 16.6828 20.8854 11.5302C20.8854 6.3777 16.6935 2.18583 11.541 2.18583ZM27.6692 27.6799C28.096 27.253 28.096 26.561 27.6692 26.1342L22.7785 21.2434C22.3516 20.8166 21.6596 20.8166 21.2328 21.2434C20.806 21.6703 20.806 22.3623 21.2328 22.7891L26.1236 27.6799C26.337 27.8933 26.6167 27.9999 26.8964 27.9999C27.1762 27.9999 27.4558 27.8933 27.6692 27.6799Z"
          fill="#405FF2"
        />
      </g>
      <defs>
        <clipPath id="clip0_178_11721">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};