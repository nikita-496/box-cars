import type { SvgIconProps } from "@mui/material";
import type { FC } from "react";

import { SvgIcon as MuiSvgIcon, styled } from "@mui/material";

const SvgIcon = styled(MuiSvgIcon, {
  name: "Calendar",
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

export const Calendar: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_157_9944)">
        <mask
          id="mask0_157_9944"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="18"
          height="18"
        >
          <path d="M0 1.90735e-06H18V18H0V1.90735e-06Z" fill={props.fill} />
        </mask>
        <g mask="url(#mask0_157_9944)">
          <path
            d="M8.30858 13.8516H9.69138M12.465 13.8516H13.8478M4.16014 13.8516H5.54294M8.30858 9.70313H9.69138M12.465 9.70313H13.8478M4.16014 9.70313H5.54294M0.703125 6.23436H17.3049M13.1564 4.16015V0.703127M4.85156 4.16015V0.703127M3.47674 17.2969H14.5312C16.0631 17.2969 17.3049 16.0551 17.3049 14.5232V4.85958C17.3049 3.32775 16.0631 2.08593 14.5312 2.08593H3.47674C1.94491 2.08593 0.703125 3.32775 0.703125 4.85958V14.5232C0.703125 16.0551 1.94491 17.2969 3.47674 17.2969Z"
            stroke="#405FF2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_157_9944">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
