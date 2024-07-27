import { Container } from "@/layouts/Layout.styles";
import { Box, Grid, styled } from "@mui/material";

import { Heading, TypographyProps } from "@/components/base/typography";

export const DarkSection = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
}));

export const HeadingSection = (props: TypographyProps) => {
  return (
    <Heading
      sx={(theme) => ({
        fontSize: theme.typography["h_x1.875"],
        lineHeight: 1.125,
        marginBottom: "0.4em",
        [theme.breakpoints.up("md")]: {
          fontSize: theme.typography["h_x2.5"],
        },
      })}
      {...props}
    />
  );
};

export const HeadingDarkSection = styled(HeadingSection)(({ theme }) => ({
  color: theme.palette.common.white,
}));

export const SectionContainer = styled(Container)(() => ({
  maxWidth: "90em",
}));

export const SectionLargeContainer = styled(Container)(({ theme }) => ({
  maxWidth: "108.125em",
  paddingTop: 0,
  paddingBottom: 0,
  [theme.breakpoints.up("sm")]: {
    maxWidth: "108.125em",
    paddingTop: 0,
    paddingBottom: 0,
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "108.125em",
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

export const Top = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "3.125em",
}));

export const GridItemColumn = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  [theme.breakpoints.up("md")]: {
    padding: "0 0.75em",
  },
}));
