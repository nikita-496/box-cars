import type { MenuItemProps as MUIMenuItemProps } from "@mui/material";

import { MenuItem as MUIMenuItem, styled } from "@mui/material";

export type MenuItemProps = MUIMenuItemProps;

export const MenuItem = styled(
  ({ disableRipple = true, ...rest }: MenuItemProps) => (
    <MUIMenuItem disableRipple={disableRipple} {...rest} />
  ),
)(() => ({}));
