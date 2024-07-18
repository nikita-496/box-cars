import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from "@mui/material";
import { FC } from "react";

const SvgIcon = styled(MuiSvgIcon, {
  name: "Plus",
  shouldForwardProp: (prop) => prop !== "fill",
})<SvgIconProps>(() => ({
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "0px",
  xmlns: "http://www.w3.org/2000/svg",
}));

SvgIcon.defaultProps = {
  viewBox: "0 0 16 16",
  focusable: "false",
  "aria-hidden": "true",
};

export const Plus: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M0 7H16V9H0V7Z" fill={props.fill}></path>
      <path d="M7 16L7 8.74224e-08L9 0L9 16H7Z" fill={props.fill}></path>
    </SvgIcon>
  );
};
