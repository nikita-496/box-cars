import {
  MenuItem as MUIMenuItem,
  MenuItemProps as MUIMenuItemProps,
  styled,
} from "@mui/material";

export type MenuItemProps = MUIMenuItemProps;

export const MenuItem = styled(
  ({ disableRipple = true, ...rest }: MenuItemProps) => (
    <MUIMenuItem disableRipple={disableRipple} {...rest} />
  ),
)(() => ({}));
