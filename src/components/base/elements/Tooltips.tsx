import {
  Tooltip as MUITooltip,
  TooltipProps as MUITooltipProps,
  tooltipClasses,
  styled,
} from "@mui/material";

export type TooltipProps = MUITooltipProps;

export const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MUITooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));
