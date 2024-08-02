import type { SvgIconProps } from "@mui/material";
import type { FC } from "react";

import { SvgIcon as MuiSvgIcon, styled } from "@mui/material";

const SvgIcon = styled(MuiSvgIcon, {
  name: "Email",
  shouldForwardProp: (prop) => prop !== "fill",
})<SvgIconProps>(() => ({
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "0.3px",
  xmlns: "http://www.w3.org/2000/svg",
}));

SvgIcon.defaultProps = {
  viewBox: "0 0 26 26",
  focusable: "false",
  "aria-hidden": "true",
};

export const Email: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7585 14.5869C12.0338 14.5869 11.3112 14.3474 10.7067 13.8686L5.84791 9.95128C5.49799 9.66962 5.44383 9.1572 5.72441 8.80837C6.00716 8.46062 6.5185 8.40537 6.86733 8.68595L11.7218 12.5989C12.3317 13.0821 13.1908 13.0821 13.805 12.5946L18.6107 8.68812C18.9595 8.4032 19.4709 8.45737 19.7547 8.8062C20.0374 9.15395 19.9843 9.66528 19.6366 9.94912L14.8223 13.8621C14.2134 14.3453 13.4854 14.5869 12.7585 14.5869Z"
        fill={props.fill}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0473 21.6667C18.0495 21.6645 18.0581 21.6667 18.0646 21.6667C19.3007 21.6667 20.397 21.2247 21.2377 20.3851C22.2138 19.4134 22.75 18.0169 22.75 16.4537V9.01335C22.75 5.9876 20.7719 3.79169 18.0473 3.79169H7.41112C4.68654 3.79169 2.70837 5.9876 2.70837 9.01335V16.4537C2.70837 18.0169 3.24571 19.4134 4.22071 20.3851C5.06137 21.2247 6.15879 21.6667 7.39379 21.6667H18.0473ZM7.39054 23.2917C5.71896 23.2917 4.22612 22.685 3.07346 21.5367C1.78971 20.2562 1.08337 18.4514 1.08337 16.4537V9.01335C1.08337 5.1101 3.80362 2.16669 7.41112 2.16669H18.0473C21.6548 2.16669 24.375 5.1101 24.375 9.01335V16.4537C24.375 18.4514 23.6687 20.2562 22.385 21.5367C21.2334 22.6839 19.7395 23.2917 18.0646 23.2917H7.39054Z"
        fill="#050B20"
      ></path>
    </SvgIcon>
  );
};
