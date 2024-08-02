import type { ButtonProps as MUIButtonProps } from "@mui/material";
import type { FC } from "react";

import { Button as MUIButton } from "@mui/material";

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
