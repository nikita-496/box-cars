import type { TypographyProps as MUITypographyProps } from "@mui/material";
import type { FC } from "react";

import { Typography as MUITypography } from "@mui/material";

export type TypographyProps = MUITypographyProps;

export const Typography: FC<TypographyProps> = ({ ...rest }) => {
  return <MUITypography {...rest} />;
};
