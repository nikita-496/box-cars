import type { SvgIconProps } from "@mui/material";
import type { FC } from "react";

import { SvgIcon as MuiSvgIcon, styled } from "@mui/material";

const SvgIcon = styled(MuiSvgIcon, {
  name: "CheckboxOutline",
  shouldForwardProp: (prop) => prop !== "fill",
})<SvgIconProps>(() => ({
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "0.3px",
  xmlns: "http://www.w3.org/2000/svg",
}));

SvgIcon.defaultProps = {
  viewBox: "0 0 512 512",
  focusable: "false",
  "aria-hidden": "true",
};

export const CheckboxOutline: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <rect
        width="384"
        height="384"
        x="64"
        y="64"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="14"
        rx="48"
        ry="48"
      />
    </SvgIcon>
  );
};
