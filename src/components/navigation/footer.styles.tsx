import {
  List as MUIList,
  styled,
  Divider,
  lighten,
  Container,
} from "@mui/material";

export const FooterDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: lighten(theme.palette.common.black, 0.2),
}));

export const StyledContainer = styled(Container)(({ theme }) => ({
  width: "100%",
  padding: "0 0.9375em",
  [theme.breakpoints.up("sm")]: {
    padding: "0 0.9375em",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "89.375em",
  },
}));

import {
  Heading as HeadingBase,
  TypographyProps,
} from "@/components/base/typography";

export const List = styled(MUIList)(() => ({
  display: "flex",
  padding: 0,
}));

export const Heading = (props: TypographyProps) => {
  const HeadingStyled = styled(HeadingBase)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: "0.75em",
  }));
  return (
    <HeadingStyled
      sx={(theme) => ({
        fontSize: theme.typography["body_x1.25"],
      })}
      {...props}
    />
  );
};
