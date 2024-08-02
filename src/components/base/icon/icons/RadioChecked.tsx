import type { SvgIconProps } from "@mui/material";
import type { FC } from "react";

import { SvgIcon as MuiSvgIcon, styled } from "@mui/material";

const SvgIcon = styled(MuiSvgIcon, {
  name: "RadioChecked",
  shouldForwardProp: (prop) => prop !== "fill",
})<SvgIconProps>(() => ({
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "0.3px",
  xmlns: "http://www.w3.org/2000/svg",
}));

SvgIcon.defaultProps = {
  viewBox: "0 0 24 24",
  focusable: "false",
  "aria-hidden": "true",
};

export const RadioChecked: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <g
        transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path d="M71 206 c-87 -48 -50 -186 49 -186 51 0 100 49 100 99 0 75 -83 124 -149 87z m79 -61 c26 -32 -13 -81 -47 -59 -10 6 -19 19 -21 28 -8 38 43 61 68 31z" />
      </g>
    </SvgIcon>
  );
};
