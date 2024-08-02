import type { SvgIconProps } from "@mui/material";
import type { FC } from "react";

import { SvgIcon as MuiSvgIcon, styled } from "@mui/material";

const SvgIcon = styled(MuiSvgIcon, {
  name: "Share",
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

export const Share: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_157_9998)">
        <path
          d="M10.2859 3.85696H8.14306C7.90635 3.85696 7.71447 4.04884 7.71447 4.28554C7.71447 4.52225 7.90635 4.71412 8.14306 4.71412H10.2859C10.5226 4.71412 10.7145 4.906 10.7145 5.14271V10.7142C10.7145 10.9509 10.5226 11.1428 10.2859 11.1428H1.71443C1.47773 11.1428 1.28585 10.9509 1.28585 10.7142V5.14268C1.28585 4.90598 1.47773 4.7141 1.71443 4.7141H3.8573C4.094 4.7141 4.28588 4.52222 4.28588 4.28552C4.28588 4.04881 4.094 3.85693 3.8573 3.85693H1.71443C1.00435 3.85693 0.428711 4.43257 0.428711 5.14266V10.7141C0.428711 11.4242 1.00435 11.9999 1.71443 11.9999H10.2859C10.996 11.9999 11.5716 11.4242 11.5716 10.7141V5.14268C11.5716 4.4326 10.996 3.85696 10.2859 3.85696Z"
          fill="black"
        />
        <path
          d="M8.44565 2.26836L6.30278 0.12549C6.13544 -0.04183 5.86413 -0.04183 5.69678 0.12549L3.55389 2.26836C3.38946 2.43861 3.39418 2.70992 3.56444 2.87435C3.73053 3.03477 3.99383 3.03477 4.15992 2.87435L5.57123 1.46305V8.57142C5.57123 8.80812 5.7631 9 5.99981 9C6.23651 9 6.42839 8.80812 6.42839 8.57142V1.46307L7.8397 2.87438C8.00996 3.03881 8.28127 3.03409 8.4457 2.86383C8.60606 2.69774 8.60606 2.43444 8.44565 2.26836Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_157_9998">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
