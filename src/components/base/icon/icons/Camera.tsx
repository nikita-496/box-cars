import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from "@mui/material";
import { FC } from "react";

const SvgIcon = styled(MuiSvgIcon, {
  name: "Camera",
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

export const Camera: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M9 6.75C8.33249 6.75 7.67997 6.94794 7.12495 7.31879C6.56994 7.68964 6.13735 8.21674 5.88191 8.83344C5.62646 9.45014 5.55963 10.1287 5.68985 10.7834C5.82008 11.4381 6.14151 12.0395 6.61352 12.5115C7.08552 12.9835 7.68689 13.3049 8.34157 13.4352C8.99626 13.5654 9.67486 13.4985 10.2916 13.2431C10.9083 12.9876 11.4354 12.5551 11.8062 12C12.1771 11.445 12.375 10.7925 12.375 10.125C12.375 9.22989 12.0194 8.37145 11.3865 7.73851C10.7536 7.10558 9.89511 6.75 9 6.75ZM9 12.375C8.55499 12.375 8.11998 12.243 7.74997 11.9958C7.37996 11.7486 7.09157 11.3972 6.92127 10.986C6.75098 10.5749 6.70642 10.1225 6.79323 9.68605C6.88005 9.24959 7.09434 8.84868 7.40901 8.53401C7.72368 8.21934 8.12459 8.00505 8.56105 7.91823C8.99751 7.83142 9.4499 7.87597 9.86104 8.04627C10.2722 8.21657 10.6236 8.50496 10.8708 8.87497C11.118 9.24498 11.25 9.67999 11.25 10.125C11.25 10.7217 11.0129 11.294 10.591 11.716C10.169 12.1379 9.59674 12.375 9 12.375Z"
        fill={props.fill}
      />
      <path
        d="M14.0625 6.75H13.5C13.3508 6.75 13.2077 6.80926 13.1023 6.91475C12.9968 7.02024 12.9375 7.16332 12.9375 7.3125C12.9375 7.46168 12.9968 7.60476 13.1023 7.71025C13.2077 7.81574 13.3508 7.875 13.5 7.875H14.0625C14.2117 7.875 14.3548 7.81574 14.4602 7.71025C14.5657 7.60476 14.625 7.46168 14.625 7.3125C14.625 7.16332 14.5657 7.02024 14.4602 6.91475C14.3548 6.80926 14.2117 6.75 14.0625 6.75Z"
        fill={props.fill}
      />
      <path
        d="M15.1875 4.5H12.1613L11.1881 2.55938C11.1414 2.46661 11.0699 2.3886 10.9815 2.33399C10.8931 2.27939 10.7914 2.25031 10.6875 2.25H7.3125C7.20862 2.25031 7.10687 2.27939 7.0185 2.33399C6.93014 2.3886 6.85862 2.46661 6.81187 2.55938L5.83875 4.5H2.8125C2.36495 4.5 1.93572 4.67779 1.61926 4.99426C1.30279 5.31072 1.125 5.73995 1.125 6.1875V14.0625C1.125 14.5101 1.30279 14.9393 1.61926 15.2557C1.93572 15.5722 2.36495 15.75 2.8125 15.75H15.1875C15.6351 15.75 16.0643 15.5722 16.3807 15.2557C16.6972 14.9393 16.875 14.5101 16.875 14.0625V6.1875C16.875 5.73995 16.6972 5.31072 16.3807 4.99426C16.0643 4.67779 15.6351 4.5 15.1875 4.5ZM15.75 14.0625C15.75 14.2117 15.6907 14.3548 15.5852 14.4602C15.4798 14.5657 15.3367 14.625 15.1875 14.625H2.8125C2.66332 14.625 2.52024 14.5657 2.41475 14.4602C2.30926 14.3548 2.25 14.2117 2.25 14.0625V6.1875C2.25 6.03832 2.30926 5.89524 2.41475 5.78975C2.52024 5.68426 2.66332 5.625 2.8125 5.625H6.1875C6.29138 5.62469 6.39313 5.59561 6.4815 5.54101C6.56986 5.4864 6.64138 5.40839 6.68813 5.31562L7.66125 3.375H10.3387L11.3119 5.31562C11.3586 5.40839 11.4301 5.4864 11.5185 5.54101C11.6069 5.59561 11.7086 5.62469 11.8125 5.625H15.1875C15.3367 5.625 15.4798 5.68426 15.5852 5.78975C15.6907 5.89524 15.75 6.03832 15.75 6.1875V14.0625Z"
        fill={props.fill}
      />
    </SvgIcon>
  );
};