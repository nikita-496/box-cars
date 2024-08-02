import { Box, styled } from "@mui/material";

import type { TypographyProps } from "@/components/base/typography";

import { Typography } from "@/components/base/typography";
import { GridItemColumn } from "@/components/sections/sections.styles";

export const FactSectionStyled = styled("section")(() => ({
  padding: 0,
}));

export const FactCounter = styled(Box)(({ theme }) => ({
  padding: "3.4375em 0.9375em 1.8125em",
  [theme.breakpoints.up("lg")]: {
    padding: "3.4375em 9.75em 1.8125em",
  },
  borderBottom: `1px solid ${theme.palette.grey[400]}`,
}));

export const FactCounterGrid = styled(GridItemColumn)(() => ({
  marginBottom: "1.875em",
}));

export const FactCounterTypography = ({ sx, ...props }: TypographyProps) => {
  return (
    <Typography
      sx={{
        color: (theme) => theme.palette.common.black,
        textAlign: "center",
        ...sx,
      }}
      {...props}
    />
  );
};

export const FactCounterValue = (props: TypographyProps) => {
  return (
    <FactCounterTypography
      fontWeight={600}
      variant="h_x2.375"
      lineHeight={1.526}
      {...props}
    />
  );
};

export const FactCounterTitle = (props: TypographyProps) => {
  return (
    <FactCounterTypography
      sx={{ textTransform: "uppercase" }}
      variant="body_x0.9375_m"
      {...props}
    />
  );
};
