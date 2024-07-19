import {
  IconButton as MUIIconButton,
  IconButtonProps as MUIIconButtonProps,
  styled,
} from "@mui/material";

export type IconButtonProps = MUIIconButtonProps;

export const IconButton = styled(({ ...rest }: IconButtonProps) => (
  <MUIIconButton {...rest} />
))(() => ({
  "&:focus": {
    outline: 0,
    border: 0,
  },
}));
