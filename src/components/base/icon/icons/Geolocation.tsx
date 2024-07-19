import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from "@mui/material";
import { FC } from "react";

const SvgIcon = styled(MuiSvgIcon, {
  name: "Geolocation",
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

export const Geolocation: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2.8125C6.00839 2.8125 3.5625 5.29431 3.5625 8.38163C3.5625 9.9384 4.18517 11.6625 5.20406 12.9938C6.22558 14.3287 7.57762 15.1875 9 15.1875C10.4224 15.1875 11.7744 14.3287 12.796 12.9938C13.8148 11.6625 14.4375 9.9384 14.4375 8.38163C14.4375 5.29431 11.9916 2.8125 9 2.8125ZM2.4375 8.38163C2.4375 4.69613 5.36419 1.6875 9 1.6875C12.6358 1.6875 15.5625 4.69613 15.5625 8.38163C15.5625 10.2113 14.8421 12.1714 13.6894 13.6775C12.5393 15.1803 10.8913 16.3125 9 16.3125C7.10866 16.3125 5.46071 15.1803 4.31065 13.6775C3.15797 12.1714 2.4375 10.2113 2.4375 8.38163Z"
        fill={props.fill}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.5625 7.875C6.5625 6.5288 7.65383 5.4375 9 5.4375C10.3462 5.4375 11.4375 6.5288 11.4375 7.875C11.4375 9.22117 10.3462 10.3125 9 10.3125C7.65383 10.3125 6.5625 9.22117 6.5625 7.875ZM9 6.5625C8.27513 6.5625 7.6875 7.15013 7.6875 7.875C7.6875 8.59987 8.27513 9.1875 9 9.1875C9.72487 9.1875 10.3125 8.59987 10.3125 7.875C10.3125 7.15013 9.72487 6.5625 9 6.5625Z"
        fill={props.fill}
      />
    </SvgIcon>
  );
};