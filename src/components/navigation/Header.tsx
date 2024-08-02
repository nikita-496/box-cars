import type { HeaderLink } from "@/core/types/components/header.type";
import type { FC, ReactNode } from "react";

import { Grid, useMediaQuery } from "@mui/material";

import { Icon } from "@/components/base/icon";
import { NavLink as BaseNavLink } from "@/components/base/navLink";
import { Hamburger } from "@/components/designSystem/navigation/Hamburger";
import {
  AppBar,
  BoxIcon,
  FlexGrid,
  GridContainer,
  List,
  ListItem,
  NavLink,
  Toolbar,
  Typography,
} from "@/components/navigation/header.styles";

export type HeaderProps = {
  logo: ReactNode;
  navLinks: HeaderLink[];
  openSideMenu: boolean;
  setOpenSideMenu: (open: boolean) => void;
};

export const Header: FC<HeaderProps> = ({
  logo,
  navLinks,
  openSideMenu,
  setOpenSideMenu,
}) => {
  const matches = useMediaQuery("(min-width:416px)");

  const handleDrawerOpen = () => setOpenSideMenu(true);

  return (
    <AppBar elevation={0} open={openSideMenu} position="absolute">
      <Toolbar>
        <GridContainer container>
          <Grid item xxs={1}>
            <BaseNavLink to="/">{logo}</BaseNavLink>
          </Grid>
          <FlexGrid item xxs={11}>
            <List>
              {navLinks.map((link) => (
                <ListItem key={link.url}>
                  <NavLink to={link.url}>
                    <Typography variant="body_x0.9375_m">
                      {link.label}
                    </Typography>
                  </NavLink>
                </ListItem>
              ))}
            </List>

            {matches && (
              <NavLink to="/login">
                <BoxIcon>
                  <Icon icon="PersonOutline" fontSize="inherit" fill="#ffff" />
                </BoxIcon>
                <Typography variant="body_x0.9375_m">Sign in</Typography>
              </NavLink>
            )}
            <Hamburger handleDrawerOpen={handleDrawerOpen} />
          </FlexGrid>
        </GridContainer>
      </Toolbar>
    </AppBar>
  );
};
