import { styled, useTheme } from "@mui/material";

import type { NavLinkProps } from "@/components/base/navLink";
import type { TabsProps } from "@/components/designSystem/tabs/Tabs";

import { ListItem } from "@/components/base/elements";
import { NavLink } from "@/components/base/navLink";
import { Tabs } from "@/components/designSystem/tabs/Tabs";

export const TabsStyled = ({ tabItems, content, ...props }: TabsProps) => {
  return (
    <Tabs
      tabItems={tabItems}
      content={content}
      styleContent={{ padding: "2.125em 0 0" }}
      {...props}
    />
  );
};

export const ShopNavLink = (props: NavLinkProps) => {
  const theme = useTheme();
  const color = theme.palette.common.black;
  return (
    <NavLink
      style={{
        paddingBottom: "0.4375em",
      }}
      color={color}
      activeColor={color}
      {...props}
    />
  );
};

export const ShopNavLinkListItem = styled(ListItem)(() => ({
  marginBottom: "0.5em",
}));
