import type { SvgIconProps } from "@mui/material";
import type { FC } from "react";

import { SvgIcon as MuiSvgIcon, styled } from "@mui/material";

const SvgIcon = styled(MuiSvgIcon, {
  name: "Speedometer",
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

export const Speedometer: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_157_9927)">
        <path
          d="M18 10.6482C18 12.6227 17.3716 14.497 16.1827 16.0687C15.9482 16.379 15.5071 16.4391 15.1978 16.2052C14.8881 15.971 14.827 15.53 15.0612 15.2203C16.0638 13.895 16.5938 12.3139 16.5938 10.6482C16.5938 6.45117 13.1947 3.05859 9 3.05859C4.8024 3.05859 1.40625 6.45378 1.40625 10.6482C1.40625 12.3139 1.9362 13.895 2.93871 15.2203C3.17299 15.53 3.11188 15.971 2.8022 16.2052C2.49239 16.4395 2.05156 16.3784 1.81714 16.0687C0.628418 14.497 0 12.6227 0 10.6482C0 5.67361 4.02814 1.65234 9 1.65234C13.9746 1.65234 18 5.67636 18 10.6482ZM13.4551 6.41368C13.7296 6.6882 13.7296 7.13342 13.4551 7.40794L11.1632 9.69983C11.3519 10.0477 11.4593 10.4459 11.4593 10.8686C11.4593 12.2248 10.356 13.3279 9 13.3279C7.64388 13.3279 6.54071 12.2248 6.54071 10.8686C6.54071 9.51265 7.64388 8.40935 9 8.40935C9.42284 8.40935 9.82095 8.51674 10.1688 8.70543L12.4607 6.41354C12.7354 6.13902 13.1804 6.13902 13.4551 6.41368ZM10.053 10.8688C10.053 10.2881 9.58063 9.81573 9 9.81573C8.41937 9.81573 7.94696 10.2881 7.94696 10.8688C7.94696 11.4494 8.41937 11.9218 9 11.9218C9.58063 11.9218 10.053 11.4494 10.053 10.8688Z"
          fill={props.fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_157_9927">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
