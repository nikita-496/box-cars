import {
  CardActionArea as MUICardActionArea,
  CardActionAreaProps as MUICardActionAreaProps,
  styled,
} from "@mui/material";

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
