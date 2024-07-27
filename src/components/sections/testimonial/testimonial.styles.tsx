import { Box, darken, List, styled, useTheme } from "@mui/material";
import { yellow } from "@mui/material/colors";

import {
  Heading,
  HeadingProps,
  Typography,
  TypographyProps,
} from "@/components/base/typography";

export const StarList = styled(List)(() => ({
  display: "flex",
  gap: "0.5625em",
}));

export const SubHeadingSection = styled(Typography)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

export const RatingTypography = (props: TypographyProps) => {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        background: darken(yellow[600], 0.1),
        borderRadius: 50,
        color: theme.palette.common.white,
        padding: "0.001em 0.56em",
      }}
      variant="body_x0.875_m"
      fontWeight={500}
      {...props}
    />
  );
};

export const TestimonialRating = styled(Box)(() => ({
  display: "flex",
  gap: "0.5625em",
  alignItems: "center",
}));

export const TestimonialAuthor = (props: HeadingProps) => {
  const theme = useTheme();
  return (
    <Heading
      variant="h6"
      sx={{
        fontSize: theme.typography["body_x1.125"],
        fontWeight: theme.typography.fontWeightMedium,
      }}
      {...props}
    />
  );
};

export const TestimonialProfession = (props: TypographyProps) => {
  return <Typography variant="body_x0.875_m" {...props} />;
};

export const TestimonialText = (props: TypographyProps) => {
  return (
    <Typography
      sx={(theme) => ({
        fontSize: "1.625rem",
        lineHeight: 1.615,
        marginTop: "1.5em",
        [theme.breakpoints.up("md")]: {
          marginRight: "3.07692em",
        },
      })}
      fontWeight={500}
      {...props}
    />
  );
};

export const TestimonialImage = styled("img")(() => ({
  borderRadius: 10,
}));
