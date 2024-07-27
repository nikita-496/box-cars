import { useTheme } from "@mui/material";

import {
  ZoomInCardMedia,
  ZoomInCardMediaProps,
} from "@/components/base/elements/ZoomInCardMedia";
import { Card, CardProps } from "@/components/designSystem/card/Card";

export const PopularCardStyled = (props: CardProps) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        maxWidth: "44.375em",
        display: "flex",
        flexDirection: "row",
        background: theme.palette.grey[900],
        color: theme.palette.common.white,
        border: "none",
      }}
      {...props}
    />
  );
};

export const ZoomInCardMediaStyled = (props: ZoomInCardMediaProps) => {
  return (
    <ZoomInCardMedia
      styleRoot={{ borderBottomRightRadius: 0, borderTopRightRadius: 0 }}
      {...props}
    />
  );
};
