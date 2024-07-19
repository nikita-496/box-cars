import { DRAWER_PADDING, DRAWER_WIDTH } from "@/core/constants/styles";
import {
  Box,
  Drawer as MUIDrawer,
  List as MUIList,
  styled,
} from "@mui/material";

import { MenuItem as BaseMenuItem } from "@/components/base/elements";
import { NavLink as BaseNavLink } from "@/components/base/navLink";
import { Typography } from "@/components/base/typography";

export const Drawer = styled(MUIDrawer)(() => ({
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    maxWidth: `${DRAWER_WIDTH}px`,
    minWidth: "240px",
    width: "80%",
    padding: `0 ${DRAWER_PADDING}em ${DRAWER_PADDING}em`,
  },
}));
export const BoxHeader = styled(Box)(() => ({
  margin: "0 1.875em 1.875em 0",
}));

export const TypogrphyHeader = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  padding: "1.25em 0",
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.common.black,
}));

export const List = styled(MUIList)(() => ({
  padding: "0 1.88em 0 0",
}));

export const MenuItem = styled(BaseMenuItem)(() => ({
  padding: 0,
  fontSize: "0.6rem",
  "&:not(last-child)": {
    marginBottom: "1.05em",
  },
}));

export const NavLink = styled(BaseNavLink)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "1.57em 2.2em 1.57em 2.1em",
  borderRadius: 16,
}));

export const TypographyNavLink = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  fontWeight: theme.typography.fontWeightMedium,
  lineHeight: "1.112em",
}));
