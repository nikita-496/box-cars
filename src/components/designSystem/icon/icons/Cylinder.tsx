import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from "@mui/material";
import { FC } from "react";

const SvgIcon = styled(MuiSvgIcon, {
  name: "Cylinder",
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

export const Cylinder: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_166_9774)">
        <path
          d="M10.4873 1.69507L16.3045 7.51227"
          stroke="#050B20"
          strokeMiterlimit="10"
        />
        <path
          d="M3.69149 17.4726C5.43899 17.4726 6.85563 16.0559 6.85563 14.3084C6.85563 12.5609 5.43899 11.1443 3.69149 11.1443C1.94398 11.1443 0.527344 12.5609 0.527344 14.3084C0.527344 16.0559 1.94398 17.4726 3.69149 17.4726Z"
          stroke="#050B20"
          strokeMiterlimit="10"
        />
        <path
          d="M11.9788 7.51245L6.37598 13.1153"
          stroke="#050B20"
          strokeMiterlimit="10"
        />
        <path
          d="M4.88477 11.6236L10.4876 6.02075"
          stroke="#050B20"
          strokeMiterlimit="10"
        />
        <path
          d="M3.69143 15.3631C4.27394 15.3631 4.74615 14.8909 4.74615 14.3084C4.74615 13.7259 4.27394 13.2537 3.69143 13.2537C3.10893 13.2537 2.63672 13.7259 2.63672 14.3084C2.63672 14.8909 3.10893 15.3631 3.69143 15.3631Z"
          stroke="#050B20"
          strokeMiterlimit="10"
        />
        <path
          d="M17.1561 5.13175L12.8683 0.844022C12.4461 0.421784 11.7612 0.421784 11.339 0.844022L7.23438 4.94862L7.38977 5.10401C10.3577 5.13179 12.8683 7.64236 12.8961 10.6103L13.0515 10.7657L17.1561 6.66112C17.5783 6.23885 17.5783 5.55399 17.1561 5.13175Z"
          stroke="#050B20"
          strokeMiterlimit="10"
        />
      </g>
      <defs>
        <clipPath id="clip0_166_9774">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
