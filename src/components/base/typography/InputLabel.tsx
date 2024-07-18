import {
  InputLabel as MUIInputLabel,
  InputLabelProps as MUIInputLabelProps,
  useTheme,
} from "@mui/material";
import { FC } from "react";
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
