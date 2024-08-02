import type { TypographyProps, ListItemProps } from "@mui/material";

import {
  Box,
  ListItem as MUIListItem,
  Grid as MUIGrid,
  styled,
  useTheme,
  Grid,
} from "@mui/material";

import type { NavLinkProps } from "@/components/base/navLink";

import { NavLink as BaseNavLink } from "@/components/base/navLink";
import { Typography as BaseTypogrphy } from "@/components/base/typography";
import { Heading, List } from "@/components/navigation/footer.styles";

const LinksListItemStyled = styled(MUIListItem)(() => ({
  padding: 0,
  "&:not(:last-child)": {
    marginBottom: "0.5em",
  },
}));

const TypographyStyled = styled(BaseTypogrphy)(() => ({
  lineHeight: "2.16em",
}));

export const BoxWrapper = styled(Box)(() => ({
  padding: "3.38em 0 1.25em 0em",
}));

export const GridDownload = styled(Grid)(() => ({
  gap: "0.8em",
  paddingTop: "0.625em",
  marginBottom: "1.375em",
}));

export const GridItem = styled(MUIGrid)(() => ({
  marginBottom: "1.88em",
}));

export const LinksGridItem = styled(GridItem)(() => ({
  padding: "0 0.75em",
}));

export const SocialHeading = styled(Heading)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  marginBottom: "1.05em",
}));

export const SocialList = styled(List)(() => ({
  lineHeight: "40px",
}));

export const LinksList = styled(List)(() => ({
  flexDirection: "column",
}));

export const ListItem = styled(MUIListItem)(() => ({
  padding: 0,
  display: "block",
  width: "auto",
}));

export const LinksListItem = (props: ListItemProps) => {
  return (
    <LinksListItemStyled
      sx={(theme) => ({
        fontSize: theme.typography["body_x0.9375_m"],
        fontWeight: theme.typography.fontWeightRegular,
      })}
      {...props}
    />
  );
};

export const SocialListItem = styled(ListItem)(() => ({
  "&:not(:first-child)": {
    paddingLeft: "2em",
  },
}));

export const NavLink = (props: NavLinkProps) => {
  const theme = useTheme();
  const defaultColor = theme.palette.common.white;
  return (
    <BaseNavLink
      color={defaultColor}
      activeColor={defaultColor}
      {...props}
      style={{ fontSize: "inherit", fontWeight: "inherit" }}
    />
  );
};

export const NavLinkDownload = styled(NavLink)(({ theme }) => ({
  display: "flex",
  gap: "0.8em",
  backgroundColor: theme.palette.grey[900],
  width: "10.6em",
  padding: "0.38em 1.3em 0.63em",
  alignItems: "center",
  borderRadius: 16,
}));

export const TypographyLabel = (props: TypographyProps) => {
  return (
    <TypographyStyled
      sx={(theme) => ({
        fontSize: theme.typography.label,
      })}
      {...props}
    />
  );
};

export const TypographyTitle = (props: TypographyProps) => {
  return (
    <BaseTypogrphy
      sx={(theme) => ({
        fontSize: theme.typography["body_x0.9375_sm"],
        lineHeight: "1.07em",
      })}
      {...props}
    />
  );
};
