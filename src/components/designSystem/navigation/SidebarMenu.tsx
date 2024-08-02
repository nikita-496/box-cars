import type { HeaderLink } from "@/core/types/components/header.type";
import type { FC, PropsWithChildren } from "react";

import { Divider, useTheme } from "@mui/material";

import { Icon } from "@/components/base/icon";
import {
  BoxHeader,
  Drawer,
  List,
  MenuItem,
  NavLink,
  TypographyNavLink,
  TypogrphyHeader,
} from "@/components/designSystem/navigation/sidebarMenu.styles";

type SidebarMenuProps = {
  navLinks: HeaderLink[];
  open: boolean;
  handleDrawerClose: () => void;
} & PropsWithChildren;

export const SidebarMenu: FC<SidebarMenuProps> = ({
  open,
  navLinks,
  handleDrawerClose,
}) => {
  const theme = useTheme();
  return (
    <Drawer open={open} anchor="left" onClose={handleDrawerClose}>
      <BoxHeader>
        <TypogrphyHeader variant="body_x1.25">Menu</TypogrphyHeader>
        <Divider />
      </BoxHeader>
      <List>
        {navLinks.map((link) => (
          <MenuItem key={link.url}>
            <NavLink to={link.url} activeBackground={theme.palette.grey[300]}>
              <TypographyNavLink variant="body_x1.125">
                {link.label}
              </TypographyNavLink>
              <Icon icon="ArrowForwardIos" fontSize="inherit" />
            </NavLink>
          </MenuItem>
        ))}
      </List>
    </Drawer>
  );
};
