import type { TypographyProps } from "@mui/material";
import type { FC } from "react";

import { Typography } from "@mui/material";

export type HeadingProps = TypographyProps;

export const Heading: FC<HeadingProps> = ({
  fontSize = "1.875rem",
  fontWeight = "700",
  lineHeight = "1.1667",
  variant = "h2",
  ...rest
}) => {
  return (
    <Typography
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      variant={variant}
      {...rest}
    />
  );
};
