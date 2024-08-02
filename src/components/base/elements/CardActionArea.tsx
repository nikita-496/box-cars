import type { CardActionAreaProps as MUICardActionAreaProps } from "@mui/material";

import { CardActionArea as MUICardActionArea, styled } from "@mui/material";

export type CardActionAreaProps = MUICardActionAreaProps;

export const CardActionArea = styled(
  ({ disableRipple = true, ...rest }: CardActionAreaProps) => (
    <MUICardActionArea disableRipple={disableRipple} {...rest} />
  ),
)(() => ({
  ".MuiCardActionArea-focusHighlight": {
    background: "transparent",
  },
}));
