import { Box } from "@mui/material";
import { BoxProps } from "@mui/system";
import { FC } from "react";

enum MarginType {
  SMALL = "12px",
  MEDIUM = "24px",
  LARGE = "56px",
  EXTRA_LARGE = "96px",
}

export type MarginProps = {
  mt: MarginType;
  mb: MarginType;
} & BoxProps;

export const Margin: FC<MarginProps> = ({ mb, mt, children, sx, ...rest }) => {
  return (
    <Box sx={{ marginTop: mt, marginBottom: mb, ...sx }} {...rest}>
      {children}
    </Box>
  );
};
