import {
  ListItem as MUIListItem,
  ListItemProps as MUIListItemProps,
} from "@mui/material";
import { styled } from "@mui/system";
import { FC } from "react";

export type ListItemProps = MUIListItemProps;

export const ListItem: FC<ListItemProps> = styled(MUIListItem)(() => ({
  padding: 0,
}));
