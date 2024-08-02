import type { SvgIconProps } from "@mui/material";
import type { FC } from "react";

import { SvgIcon as MuiSvgIcon, styled } from "@mui/material";

const SvgIcon = styled(MuiSvgIcon, {
  name: "ArrowForwardIos",
  shouldForwardProp: (prop) => prop !== "fill",
})<SvgIconProps>(() => ({
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "0.3px",
  xmlns: "http://www.w3.org/2000/svg",
}));

SvgIcon.defaultProps = {
  viewBox: "0 0 12 12",
  focusable: "false",
  "aria-hidden": "true",
};

export const ArrowForwardIos: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_2880_6407)">
        <path
          d="M9.42017 6.00011C9.42017 6.2151 9.33808 6.43013 9.17427 6.5941L4.01441 11.7538C3.68618 12.0821 3.15402 12.0821 2.82592 11.7538C2.49783 11.4257 2.49783 10.8937 2.82592 10.5654L7.39159 6.00011L2.82624 1.43461C2.49815 1.10652 2.49815 0.574382 2.82624 0.246315C3.15434 -0.0820709 3.68634 -0.0820709 4.01457 0.246315L9.17446 5.40596C9.33824 5.57001 9.42017 5.78505 9.42017 6.00011Z"
          fill={props.fill}
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2880_6407">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(12 12) rotate(-180)"
          ></rect>
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
