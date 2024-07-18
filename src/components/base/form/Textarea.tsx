import { TextField, TextFieldProps, useTheme } from "@mui/material";
import { FC } from "react";
type TextareaProps = TextFieldProps;

export const Textarea: FC<TextareaProps> = ({
  placeholder = "type...",
  label = "Textarea",
  variant = "standard",
  sx,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <TextField
      placeholder={placeholder}
      label={label}
      variant={variant}
      multiline
      InputLabelProps={{ shrink: true }}
      inputProps={{
        sx: {
          "&": {
            border: `2px solid ${theme.palette.grey[400]}`,
            borderRadius: 4,
          },
          "&:focus, &:hover": {
            borderColor: theme.palette.common.black,
          },
        },
        style: {
          maxHeight: "13.52em",
          height: "13.52em",
          overflow: "auto",
        },
      }}
      sx={{
        "& .MuiInputBase-root": {
          fontSize: theme.typography["body_x0.9375_m"],
          fontFamily: '"DM Sans", sans-serif',
          paddingTop: 0,
          margin: 0,
          "&:before, &:after, &:hover:not(Mui-disabled, .Mui-error):before": {
            border: "none",
          },
        },
        ".MuiInputBase-inputMultiline": {
          padding: "2em 1.34em 0.5em",
        },
        "& .MuiInputLabel-standard": {
          fontFamily: "'DM Sans', sans-serif",
          color: theme.palette.grey[800],
          left: "1.3em",
          top: "1em",
          "&.Mui-focused": {
            color: "common.black",
          },
        },
        ...sx,
      }}
      {...rest}
    />
  );
};
