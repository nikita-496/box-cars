import { Grid, ListItem as MUIListItem, styled, useTheme } from "@mui/material";

import {
  NavLink as BaseNavLink,
  NavLinkProps,
} from "@/components/base/navLink";
import { Typography as BaseTypography } from "@/components/base/typography";

export const GridWrapper = styled(Grid)(() => ({
  padding: "1.815em 0",
}));
export const GridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  "&:last-child": {
    marginTop: "0.63em",
  },
  [theme.breakpoints.up("md")]: {
    "&:first-child": {
      justifyContent: "end",
      order: "1",
    },
    "&:last-child": {
      justifyContent: "start",
      marginTop: "0em",
      order: "0",
    },
  },
}));

const NavLinkStyled = styled(BaseNavLink)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular,
}));

export const NavLink = (props: NavLinkProps) => {
  const theme = useTheme();
  return <NavLinkStyled color={theme.palette.common.white} {...props} />;
};
export const ListItem = styled(MUIListItem)(() => ({
  padding: 0,
  width: "auto",
  "&:first-child:before": {
    content: "''",
    position: "absolute",
    top: "50%",
    right: "-13px",
    width: "4px",
    transform: "translateY(-50%)",
    height: "4px",
    background: "#fff",
    borderRadius: "50%",
  },
  "&:last-child": {
    marginLeft: "1.57em",
  },
}));

export const Typography = styled(BaseTypography)(() => ({
  display: "inline-block",
}));
