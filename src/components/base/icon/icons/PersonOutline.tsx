import type { SvgIconProps } from "@mui/material";
import type { FC } from "react";

import { SvgIcon as MuiSvgIcon, styled } from "@mui/material";

const SvgIcon = styled(MuiSvgIcon, {
  name: "Label",
  shouldForwardProp: (prop) => prop !== "fill",
})<SvgIconProps>(() => ({
  fill: "PersonOutline",
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

export const PersonOutline: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <g opacity="0.8">
        <path
          d="M11.7137 8.34627C12.8655 7.50628 13.6155 6.14686 13.6155 4.61538C13.6155 2.07046 11.5451 0 9.00014 0C6.45521 0 4.38475 2.07046 4.38475 4.61538C4.38475 6.14686 5.13474 7.50628 6.28653 8.34627C3.42341 9.44191 1.38477 12.2179 1.38477 15.4615C1.38477 16.8613 2.52351 18 3.92322 18H14.0771C15.4768 18 16.6155 16.8613 16.6155 15.4615C16.6155 12.2179 14.5769 9.44191 11.7137 8.34627ZM5.76938 4.61538C5.76938 2.83395 7.2187 1.38463 9.00014 1.38463C10.7816 1.38463 12.2309 2.83395 12.2309 4.61538C12.2309 6.39682 10.7816 7.84617 9.00014 7.84617C7.2187 7.84617 5.76938 6.39682 5.76938 4.61538ZM14.0771 16.6154H3.92322C3.287 16.6154 2.76939 16.0978 2.76939 15.4615C2.76939 12.0258 5.56446 9.23073 9.00017 9.23073C12.4359 9.23073 15.2309 12.0258 15.2309 15.4615C15.2309 16.0978 14.7133 16.6154 14.0771 16.6154Z"
          fill={props.fill}
        />
      </g>
    </SvgIcon>
  );
};
