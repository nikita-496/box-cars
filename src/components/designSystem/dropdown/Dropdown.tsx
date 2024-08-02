import type { FC } from "react";

import { styled } from "@mui/material";
import { useState } from "react";

import { Menu, MenuItem } from "@/components/base/elements";
import { NavLink } from "@/components/base/navLink";
import { Typography } from "@/components/base/typography";

const StyledMenu = styled(Menu)(() => ({
  "& .MuiList-root": {
    borderRadius: 10,
    padding: "1.566em 1.25em",
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: 0,
  "&:not(:last-child)": {
    marginBottom: "0.625em",
  },
  "&:focus": {
    backgroundColor: "transparent",
  },
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
  },
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  fontSize: "0.9375em",
  color: theme.palette.common.black,
  textTransform: "capitalize",
  transition: "all 220ms linear 0ms",
  fontWeight: theme.typography.fontWeightRegular,
  width: "100%",
}));

export const Dropdown: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Typography
        onClick={handleClick}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        Menu
      </Typography>
      <StyledMenu open={open} anchorEl={anchorEl}>
        <StyledMenuItem onClick={handleClose}>
          <StyledNavLink to="/">Home</StyledNavLink>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <StyledNavLink to="/">Profile</StyledNavLink>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <StyledNavLink to="/"> My account</StyledNavLink>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <StyledNavLink to="/"> Logout</StyledNavLink>
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
};
