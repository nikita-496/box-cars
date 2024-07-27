import { Box, Grid, List, styled, useTheme } from "@mui/material";

import { ListItem } from "@/components/base/elements";
import { Typography } from "@/components/base/typography";
import {
  ArrowOutwardLink,
  ArrowOutwardLinkProps,
} from "@/components/navigation/ArrowOutwardLink";
import { HeadingSection } from "@/components/sections/sections.styles";

export const PricingHeading = styled(HeadingSection)(() => ({
  lineHeight: 1.375,
  marginBottom: "0.1em",
}));

export const PricingText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
}));

export const PricingSubHeading = styled(PricingText)(() => ({
  marginBottom: "2.875em",
}));

export const PricingListText = styled(PricingText)(() => ({
  fontWeight: 500,
}));

export const ImageStyled = styled("img")(() => ({
  borderTopLeftRadius: 16,
  borderBottomLeftRadius: 16,
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

export const ContentGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.grey[200],
}));

export const ContentInner = styled(Box)(({ theme }) => ({
  padding: "2.5em",
  [theme.breakpoints.up("sm")]: {
    padding: "4.375em",
  },
  [theme.breakpoints.up("xl")]: {
    padding: "6.5625em 8.125em 7.4375em",
  },
}));

export const ListStyled = styled(List)(() => ({
  padding: 0,
  marginBottom: "3.125em",
}));

export const ListItemStyled = styled(ListItem)(() => ({
  alignItems: "start",
  gap: "0.5em",
  marginBottom: "0.6875em",
}));

export const PricingNavLink = (props: ArrowOutwardLinkProps) => {
  const theme = useTheme();
  return (
    <ArrowOutwardLink
      style={{
        display: "inline-block",
        borderRadius: 12,
        fontSize: "0.9375rem",
        backgroundColor: theme.palette.primary.main,
        padding: "0.86667em 1.5333em 0.6667em",
      }}
      color={theme.palette.common.white}
      {...props}
    />
  );
};
