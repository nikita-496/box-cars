import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from "@mui/material";
import { FC } from "react";

const SvgIcon = styled(MuiSvgIcon, {
  name: "Play",
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

export const Play: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_166_9884)">
        <path
          d="M11.9691 8.64822L8.23141 5.93124C8.09424 5.83181 7.91215 5.81683 7.76181 5.8941C7.61026 5.97077 7.51562 6.12651 7.51562 6.29482V11.727C7.51562 11.8971 7.61026 12.0522 7.76181 12.1289C7.8259 12.1612 7.89598 12.1774 7.96666 12.1774C8.0589 12.1774 8.15234 12.1481 8.23141 12.09L11.9691 9.37538C12.0871 9.28853 12.1559 9.15436 12.1559 9.0118C12.1565 8.86685 12.0859 8.73328 11.9691 8.64822Z"
          fill={props.fill}
        />
        <path
          d="M9.0003 0.0012207C4.02875 0.0012207 0 4.02997 0 9.00152C0 13.9713 4.02875 17.9988 9.0003 17.9988C13.9707 17.9988 18 13.9707 18 9.00152C18.0006 4.02997 13.9707 0.0012207 9.0003 0.0012207ZM9.0003 16.4972C4.86014 16.4972 1.50344 13.1423 1.50344 9.00152C1.50344 4.86256 4.86014 1.50347 9.0003 1.50347C13.1399 1.50347 16.496 4.86196 16.496 9.00152C16.4966 13.1423 13.1399 16.4972 9.0003 16.4972Z"
          fill={props.fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_166_9884">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
