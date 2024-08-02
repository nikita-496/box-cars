import type { SvgIconProps } from "@mui/material";
import type { FC } from "react";

import { SvgIcon as MuiSvgIcon, styled } from "@mui/material";

const SvgIcon = styled(MuiSvgIcon, {
  name: "ArrowDown",
  shouldForwardProp: (prop) => prop !== "fill",
})<SvgIconProps>(() => ({
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "0.3px",
  width: "10px",
  height: "6px",
  xmlns: "http://www.w3.org/2000/svg",
}));

SvgIcon.defaultProps = {
  viewBox: "0 0 10 6",
  focusable: "false",
  "aria-hidden": "true",
};

export const ArrowDown: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M9.86941 0.529619C9.68892 0.338178 9.38702 0.331049 9.19653 0.511045L4.99976 4.48685L0.803467 0.511065C0.612983 0.330581 0.311545 0.338197 0.130592 0.529638C-0.0503606 0.720591 -0.0422749 1.02203 0.148697 1.20298L4.67261 5.4888C4.76404 5.57548 4.88214 5.61928 4.99976 5.61928C5.11737 5.61928 5.23594 5.57548 5.32738 5.4888L9.8513 1.20298C10.0423 1.02201 10.0504 0.720591 9.86941 0.529619Z"
        fill="#050B20"
      ></path>
    </SvgIcon>
  );
};
