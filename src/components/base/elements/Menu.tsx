import type { MenuProps as MUIMenuProps } from "@mui/material";

import { Menu as MUIMenu, styled } from "@mui/material";

export type MenuProps = MUIMenuProps;

export const Menu = styled(({ elevation = 0, ...rest }: MenuProps) => (
  <MUIMenu elevation={elevation} {...rest} />
))(() => ({}));
