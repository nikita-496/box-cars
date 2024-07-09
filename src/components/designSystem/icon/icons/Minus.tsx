import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from "@mui/material";
import { FC } from "react";

const SvgIcon = styled(MuiSvgIcon, {
  name: "Minus",
  shouldForwardProp: (prop) => prop !== "fill",
})<SvgIconProps>(() => ({
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "0.1px",
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
