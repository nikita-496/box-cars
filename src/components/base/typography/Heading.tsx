import { Typography, TypographyProps } from "@mui/material";
import { FC } from "react";

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
