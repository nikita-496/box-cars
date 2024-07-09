import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from "@mui/material";
import { FC } from "react";

const SvgIcon = styled(MuiSvgIcon, {
  name: "Home",
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

export const Home: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M14.5125 17.4375H3.48751C2.44689 17.4375 1.57501 16.5937 1.57501 15.525V7.0031C1.57501 6.4406 1.82814 5.90623 2.27814 5.5406L7.79064 0.984351C8.49376 0.393726 9.50626 0.393726 10.2094 0.984351L15.7219 5.51248C16.1719 5.8781 16.425 6.41248 16.425 6.97498V15.4969C16.425 16.5937 15.5531 17.4375 14.5125 17.4375ZM9.00001 1.68748C8.83126 1.68748 8.63439 1.74373 8.49376 1.85623L2.98126 6.41248C2.81251 6.5531 2.70001 6.7781 2.70001 7.0031V15.525C2.70001 15.9469 3.03751 16.3125 3.48751 16.3125H14.5125C14.9344 16.3125 15.3 15.975 15.3 15.525V7.0031C15.3 6.7781 15.1875 6.5531 15.0188 6.41248L9.50626 1.85623C9.36564 1.74373 9.16876 1.68748 9.00001 1.68748Z"
        fill="white"
      />
      <path
        d="M12.375 14.9625H5.625C5.31562 14.9625 5.0625 14.7094 5.0625 14.4C5.0625 14.0906 5.31562 13.8375 5.625 13.8375H12.375C12.6844 13.8375 12.9375 14.0906 12.9375 14.4C12.9375 14.7094 12.6844 14.9625 12.375 14.9625Z"
        fill="white"
      />
    </SvgIcon>
  );
};