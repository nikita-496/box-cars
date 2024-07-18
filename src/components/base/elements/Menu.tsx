import {
  Menu as MUIMenu,
  MenuProps as MUIMenuProps,
  styled,
} from "@mui/material";

export type MenuProps = MUIMenuProps;

export const Menu = styled(({ elevation = 0, ...rest }: MenuProps) => (
  <MUIMenu elevation={elevation} {...rest} />
))(() => ({}));
