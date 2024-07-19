import {
  TextField as MUITextField,
  TextFieldProps as MUITextFieldProps,
  useTheme,
} from "@mui/material";
import { FC } from "react";

export type TextFieldProps = MUITextFieldProps;

export const TextField: FC<TextFieldProps> = ({
  placeholder = "type...",
  label = "Input Text",
  variant = "standard",
  sx,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <MUITextField
      placeholder={placeholder}
      label={label}
      variant={variant}
      InputLabelProps={{ shrink: true }}
      inputProps={{
        sx: {
          "&": {
            border: `2px solid ${theme.palette.grey[400]}`,
            borderRadius: 4,
            padding: "1.8em 1em 0.5em",
          },
          "&:focus, &:hover": {
            borderColor: theme.palette.common.black,
          },
        },
      }}
      sx={{
        "& .MuiInputBase-root": {
          fontSize: theme.typography["body_x0.9375_m"],
          fontFamily: '"DM Sans", sans-serif',
          "&:before, &:after, &:hover:not(Mui-disabled, .Mui-error):before": {
            border: "none",
          },
        },
        "& .MuiInputLabel-standard": {
          color: theme.palette.grey[800],
          left: "1em",
          top: "1.7em",
          "&.Mui-focused": {
            color: "common.black",
          },
        },
        ...sx,
      }}
      {...rest}
    ></MUITextField>
  );
};