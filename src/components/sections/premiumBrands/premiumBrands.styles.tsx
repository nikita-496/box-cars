import { useTheme } from "@mui/material";

import { Heading, HeadingProps } from "@/components/base/typography";
import { Card, CardProps } from "@/components/designSystem/card/Card";

export const HeadingBrand = (props: HeadingProps) => {
  return (
    <Heading
      sx={(theme) => ({
        fontSize: theme.typography["body_x1.125"],
        fontWeight: theme.typography.fontWeightMedium,
        textAlign: "center",
      })}
      variant="h6"
      {...props}
    />
  );
};

export const CardBrand = (props: CardProps) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "auto",
        padding: "1.794em 2.5em",
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: theme.palette.primary.main,
        },
        [theme.breakpoints.up("md")]: {
          maxWidth: "8.3em",
        },
      }}
      {...props}
    />
  );
};
