import { Box, useTheme, styled, List } from "@mui/material";

import type { NavLinkProps } from "@/components/base/navLink";
import type { TypographyProps } from "@/components/base/typography";
import type { CardProps } from "@/components/designSystem/card/Card";
import type { TagProps } from "@/components/designSystem/tag/Tag";

import { ListItem } from "@/components/base/elements";
import { NavLink } from "@/components/base/navLink";
import { Typography } from "@/components/base/typography";
import { Card } from "@/components/designSystem/card/Card";
import { Tag } from "@/components/designSystem/tag/Tag";

export const BlogCardStyled = (props: CardProps) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        maxWidth: "auto",
        [theme.breakpoints.up("md")]: {
          maxWidth: "18em",
        },
        [theme.breakpoints.up("lg")]: {
          maxWidth: "26em",
        },
        border: "none",
      }}
      {...props}
    />
  );
};

export const BlogTagStyled = (props: TagProps) => {
  const theme = useTheme();
  return (
    <Tag
      sx={{
        position: "absolute",
        zIndex: 10,
        top: 20,
        left: 10,
        background: theme.palette.common.white,
        color: theme.palette.common.black,
        padding: "0.07em 0.9672em",
      }}
      {...props}
    />
  );
};

export const BlogMetaTypogarphy = (props: TypographyProps) => {
  return <Typography variant="body_x0.9375_sm" {...props} />;
};

export const BlogContnetStyled = styled(Box)(() => ({
  paddingTop: "1.375em",
}));

export const BlogContnetList = styled(List)(() => ({
  display: "flex",
  gap: "1.4em",
  padding: 0,
}));

export const BlogContnetListItem = styled(ListItem)(() => ({
  display: "block",
  width: "auto",
  padding: 0,
  "&.MuiListItem-root:first-child:before": {
    content: "''",
    position: "absolute",
    top: "11px",
    left: "67px",
    width: "5px",
    height: "5px",
    backgroundColor: "#e1e1e1",
    borderRadius: 50,
  },
}));

export const BlogContnetNavLink = (props: NavLinkProps) => {
  const theme = useTheme();
  const color = theme.palette.common.black;
  return (
    <NavLink
      color={color}
      activeColor={color}
      style={{
        fontSize: "1.25rem",
      }}
      {...props}
    />
  );
};
