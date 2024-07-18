import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from "@mui/material";
import { FC } from "react";

export type ButtonProps = MUIButtonProps;

export const Button: FC<ButtonProps> = ({
  variant = "contained",
  children,
  disableRipple = true,
  disableElevation = true,
  ...rest
}) => {
  return (
    <MUIButton
      variant={variant}
      disableRipple={disableRipple}
      disableElevation={disableElevation}
      {...rest}
    >
      {children}
    </MUIButton>
  );
};
