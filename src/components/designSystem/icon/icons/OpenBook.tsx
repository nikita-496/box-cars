import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from "@mui/material";
import { FC } from "react";

const SvgIcon = styled(MuiSvgIcon, {
  name: "OpenBook",
  shouldForwardProp: (prop) => prop !== "fill",
})<SvgIconProps>(() => ({
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "0.3px",
  xmlns: "http://www.w3.org/2000/svg",
}));

SvgIcon.defaultProps = {
  viewBox: "0 0 22 22",
  focusable: "false",
  "aria-hidden": "true",
};

export const OpenBook: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_163_10323)">
        <mask
          id="mask0_163_10323"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="22"
          height="22"
        >
          <path d="M0 1.90735e-06H22V22H0V1.90735e-06Z" fill="white" />
        </mask>
        <g mask="url(#mask0_163_10323)">
          <path
            d="M4.50867 13.7089L7.77425 12.8787C8.15521 12.7818 8.42187 12.4388 8.42187 12.0458C8.42187 11.4853 7.89396 11.0748 7.35075 11.2129L4.08517 12.0431C3.70421 12.14 3.4375 12.4829 3.4375 12.876C3.4375 13.4365 3.96541 13.847 4.50867 13.7089Z"
            fill={props.fill}
          />
          <path
            d="M3.4375 6.00101C3.4375 6.56149 3.96541 6.97201 4.50867 6.83391L7.77425 6.00367C8.15517 5.90682 8.42187 5.56384 8.42187 5.17076C8.42187 4.61028 7.89396 4.19976 7.35071 4.33786L4.08512 5.1681C3.70421 5.26495 3.4375 5.60793 3.4375 6.00101Z"
            fill={props.fill}
          />
          <path
            d="M4.50867 10.2714L7.77425 9.44117C8.15521 9.34432 8.42187 9.00134 8.42187 8.60826C8.42187 8.04778 7.89396 7.63726 7.35075 7.77536L4.08517 8.6056C3.70421 8.70245 3.4375 9.04543 3.4375 9.43851C3.4375 9.99899 3.96541 10.4095 4.50867 10.2714Z"
            fill={props.fill}
          />
          <path
            d="M21.1406 19.421C21.1406 20.542 20.0848 21.363 18.9984 21.0868L11 19.0533L3.00162 21.0868C1.9152 21.363 0.859375 20.542 0.859375 19.421V5.3031C0.859375 4.12391 1.65941 3.09502 2.80225 2.80442L9.9226 0.994191C10.6296 0.814453 11.3704 0.814453 12.0774 0.994191L19.1977 2.80442C20.3406 3.09502 21.1406 4.12391 21.1406 5.3031V15.125"
            stroke="#050B20"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 4.25384V19.0532"
            stroke="#050B20"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.80383 15.1089L4.08512 15.5665C3.70416 15.6634 3.4375 16.0064 3.4375 16.3994C3.4375 16.9599 3.96541 17.3705 4.50862 17.2323L6.22733 16.7747C6.60829 16.6779 6.875 16.3349 6.875 15.9418C6.875 15.3813 6.34709 14.9708 5.80383 15.1089Z"
            fill="#050B20"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_163_10323">
          <rect width="22" height="22" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};