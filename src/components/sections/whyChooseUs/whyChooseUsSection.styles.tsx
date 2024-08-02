import { styled } from "@mui/material";

import type { TypographyProps } from "@/components/base/typography";

import { Typography } from "@/components/base/typography";
import { GridItemColumn } from "@/components/sections/sections.styles";

export const Title = (props: TypographyProps) => {
  return (
    <Typography
      variant="body_x1.25"
      lineHeight={1.35}
      fontWeight={500}
      sx={{
        marginBottom: "0.85em",
      }}
      {...props}
    />
  );
};

export const Text = (props: TypographyProps) => {
  return <Typography variant="body_x0.9375_m" {...props} />;
};

export const WhyChooseUsGrid = styled(GridItemColumn)(() => ({
  marginBottom: "3.5em",
}));
