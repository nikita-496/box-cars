import type { CardProps as MUICardProps } from "@mui/material";

import { Card as MUICard, styled } from "@mui/material";

export type CardWrapperProps = MUICardProps;

export const CardWrapper = styled(
  ({ elevation = 0, ...rest }: CardWrapperProps) => (
    <MUICard elevation={elevation} {...rest} />
  ),
)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: 16,
}));
