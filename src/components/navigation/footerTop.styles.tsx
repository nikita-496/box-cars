import { Grid, lighten, styled, Theme } from "@mui/material";

import { Button, ButtonProps } from "@/components/base/button";
import { TextField, TextFieldProps } from "@/components/base/form";
import { Heading, TypographyProps } from "@/components/base/typography";

export const JoinGrid = styled(Grid)(() => ({
  padding: "8.75em 0 3.75em",
}));

export const ContentGrid = styled(Grid)(({ theme }) => ({
  marginBottom: "1.88em",
  [theme.breakpoints.up("md")]: {
    marginBottom: 0,
  },
}));

const JoinHeadingStyled = styled(Heading)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
}));

const JoinTextFieldStyled = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-root": {
    color: theme.palette.common.white,
  },
}));

export const JoinHeading = (props: TypographyProps) => {
  return (
    <JoinHeadingStyled
      sx={(theme) => ({
        fontSize: theme.typography["h_x1.875"],
        lineHeight: 1.35,
      })}
      {...props}
    />
  );
};

export const FormGrid = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "end",
}));

export const JoinForm = styled("form")(({ theme }) => ({
  position: "relative",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    maxWidth: "567px",
  },
}));

export const JoinTextField = (props: TextFieldProps) => {
  return (
    <JoinTextFieldStyled
      inputProps={{
        sx: {
          "&": {
            borderColor: "black",
            bgcolor: (theme: Theme) => lighten(theme.palette.grey[900], 0.0344),
            borderRadius: 50,
            padding: "1.469em 2.4em",
          },
        },
      }}
      {...props}
    />
  );
};

export const JoinButton = (props: ButtonProps) => {
  return (
    <Button
      sx={{
        borderRadius: 12.5,
        fontSize: (theme) => theme.typography["body_x0.9375_sm"],
        padding: "0.867em 2em 0.668em",
        position: "absolute",
        right: "10px",
        top: "10px",
      }}
      {...props}
    />
  );
};
