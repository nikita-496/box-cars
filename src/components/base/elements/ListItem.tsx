import type { ListItemProps as MUIListItemProps } from "@mui/material";
import type { FC } from "react";

import { ListItem as MUIListItem } from "@mui/material";
import { styled } from "@mui/system";

export type ListItemProps = MUIListItemProps;

export const ListItem: FC<ListItemProps> = styled(MUIListItem)(() => ({
  padding: 0,
}));
