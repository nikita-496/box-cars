import { Box } from "@mui/material";
import { BoxProps } from "@mui/system";
import { FC } from "react";

enum MarginType {
  SMALL = "0.75em",
  MEDIUM = "1.5em",
  LARGE = "3.5em",
  EXTRA_LARGE = "6em",
}

export type MarginProps = {
  mt?: MarginType;
  mb?: MarginType;
  mr?: MarginType;
  ml?: MarginType;
} & BoxProps;

export const Margin: FC<MarginProps> = ({
  mb = MarginType.SMALL,
  mt = MarginType.SMALL,
  mr,
  ml,
  children,
  sx,
  ...rest
}) => {
  return (
    <Box
      sx={{
        marginTop: mt,
        marginBottom: mb,
        marginRight: mr,
        marginLeft: ml,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
