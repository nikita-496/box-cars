import type { InputLabelProps as MUIInputLabelProps } from "@mui/material";
import type { FC } from "react";

import { InputLabel as MUIInputLabel, useTheme } from "@mui/material";
export type InputLabelProps = MUIInputLabelProps;

export const InputLabel: FC<InputLabelProps> = ({
  shrink = true,
  sx,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <MUIInputLabel
      shrink={shrink}
      sx={{
        fontFamily: '"DM Sans", sans-serif',
        top: "20px",
        "&.Mui-focused": {
          color: theme.palette.common.black,
        },
        ...sx,
      }}
      {...rest}
    />
  );
};
