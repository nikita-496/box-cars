import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from "@mui/material";
import { FC } from "react";

const SvgIcon = styled(MuiSvgIcon, {
  name: "LookingForCar",
  shouldForwardProp: (prop) => prop !== "fill",
})<SvgIconProps>(() => ({
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "0.3px",
  xmlns: "http://www.w3.org/2000/svg",
}));

SvgIcon.defaultProps = {
  viewBox: "0 0 110 110",
  focusable: "false",
  "aria-hidden": "true",
};

export const LookingForCar: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M43.1686 14.8242C36.3829 14.8242 30.2324 18.8167 27.4699 25.0145L16.292 50.093C9.59105 50.5534 4.29688 56.1314 4.29688 62.9492V75.8398C4.29688 81.7725 9.10637 86.582 15.0391 86.582H17.9835C17.9994 85.7553 18.0204 84.9288 18.0469 84.1023C17.3476 82.6768 16.9533 81.0745 16.9533 79.3796L16.7578 71.7578C16.7578 66.1212 17.9046 60.9441 22.0885 60.1012C24.0773 59.7006 25.7424 58.3456 26.5573 56.4876L40.3605 25.0145C43.1228 18.8167 49.2733 14.8242 56.0592 14.8242H43.1686Z"
        fill={props.fill}
      ></path>
      <path
        d="M94.9609 86.582C100.894 86.582 105.703 81.7725 105.703 75.8398V62.9492C105.703 55.8299 99.9318 50.0586 92.8125 50.0586L79.5736 24.2505C76.6474 18.4688 70.7184 14.8242 64.2383 14.8242H43.1686C36.3829 14.8242 30.2324 18.8167 27.4699 25.0145L16.292 50.093C9.59105 50.5534 4.29688 56.1314 4.29688 62.9492V75.8398C4.29688 81.7725 9.10637 86.582 15.0391 86.582"
        stroke="#405FF2"
        strokeWidth="5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M38.0269 95.1758C42.7731 95.1758 46.6207 91.3282 46.6207 86.582C46.6207 81.8358 42.7731 77.9883 38.0269 77.9883C33.2807 77.9883 29.4332 81.8358 29.4332 86.582C29.4332 91.3282 33.2807 95.1758 38.0269 95.1758Z"
        stroke="#405FF2"
        strokeWidth="5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M63.1641 86.582H49.8433"
        stroke="#405FF2"
        strokeWidth="5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M71.9727 95.1758C76.7189 95.1758 80.5664 91.3282 80.5664 86.582C80.5664 81.8358 76.7189 77.9883 71.9727 77.9883C67.2265 77.9883 63.3789 81.8358 63.3789 86.582C63.3789 91.3282 67.2265 95.1758 71.9727 95.1758Z"
        stroke="#405FF2"
        strokeWidth="5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M51.5608 66.8164L63.5304 55.2099C65.9362 52.8587 64.2729 48.7712 60.9101 48.7712H49.9475C46.5786 48.7712 44.9182 44.6705 47.3367 42.3234L59.7328 30.293"
        stroke="#FF5CF3"
        strokeWidth="5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </SvgIcon>
  );
};
