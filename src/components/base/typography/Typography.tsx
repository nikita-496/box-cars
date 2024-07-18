import {
  Typography as MUITypography,
  TypographyProps as MUITypographyProps,
} from "@mui/material";
import { FC } from "react";

export type TypographyProps = MUITypographyProps;

export const Typography: FC<TypographyProps> = ({ ...rest }) => {
  return <MUITypography {...rest} />;
};
