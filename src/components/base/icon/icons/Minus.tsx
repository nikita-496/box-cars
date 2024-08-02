import type { SvgIconProps } from "@mui/material";
import type { FC } from "react";

import { SvgIcon as MuiSvgIcon, styled } from "@mui/material";

const SvgIcon = styled(MuiSvgIcon, {
  name: "Minus",
  shouldForwardProp: (prop) => prop !== "fill",
})<SvgIconProps>(() => ({
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "0px",
  xmlns: "http://www.w3.org/2000/svg",
}));

SvgIcon.defaultProps = {
  viewBox: "0 0 16 2",
  focusable: "false",
  "aria-hidden": "true",
};

export const Minus: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <rect width="16" height="2" fill={props.fill}></rect>
    </SvgIcon>
  );
};
