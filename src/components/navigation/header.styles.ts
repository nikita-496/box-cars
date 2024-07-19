import {
  AppBar as MUIAppBar,
  List as MUIList,
  ListItem as MUIListItem,
  styled,
  Toolbar as MUIToolbar,
  Box,
  Grid,
  AppBarProps as MUIAppBarProps,
} from "@mui/material";

import { NavLink as BaseNavLink } from "@/components/base/navLink";
import { Typography as BaseTypography } from "@/components/base/typography";

type AppBarProps = { open?: boolean } & MUIAppBarProps;

export const AppBar = styled(MUIAppBar)<AppBarProps>(({ theme, open }) => ({
  backgroundColor: "transparent",
  padding: "1.75em 0 0",
  transition: theme.transitions.create("transform", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transform: "translate3d(80vw,0,0)",
    [theme.breakpoints.up("xs")]: {
      transform: "translate3d(440px,0,0)",
    },
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Toolbar = styled(MUIToolbar)(({ theme }) => ({
  padding: 0,
  [theme.breakpoints.up("sm")]: {
    padding: 0,
  },
}));

export const GridContainer = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",
  maxWidth: "1829px",
  width: "100%",
  margin: "0 auto",
  padding: "0 1.88em",
}));

export const FlexGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  [theme.breakpoints.up("lg")]: {
    justifyContent: "start",
  },
  [theme.breakpoints.up("xl")]: {
    justifyContent: "end",
  },
}));

export const List = styled(MUIList)(({ theme }) => ({
  padding: 0,
  display: "none",
  margin: "0 1.94em",
  [theme.breakpoints.up("lg")]: {
    display: "flex",
  },
}));

export const ListItem = styled(MUIListItem)(() => ({
  padding: 0,
  margin: "0 1.125em",
  display: "block",
}));

export const NavLink = styled(BaseNavLink)(({ theme }) => ({
  color: theme.palette.common.white,
  "&:hover": {
    color: "inherit",
  },
}));

export const Typography = styled(BaseTypography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular,
}));

export const BoxIcon = styled(Box)(() => ({
  display: "inline-block",
  marginRight: "0.56em",
  verticalAlign: "middle",
  fontSize: "1rem",
}));
