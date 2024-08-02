import {
  Divider,
  styled,
  Typography,
  List,
  Box,
  ListItem,
  CardContent as MUICardContent,
} from "@mui/material";

import type { MarginProps } from "@/components/base/layout";
import type { TypographyProps } from "@/components/base/typography";

import { Margin } from "@/components/base/layout";

export const CardContent = styled(MUICardContent)(() => ({
  padding: "0.9375em 1.6875em 0",
  "&:last-child": {
    paddingBottom: "0.6875em",
  },
}));

export const CardContentHeadingMargin = (props: MarginProps) => {
  return (
    <Margin
      sx={{
        marginTop: 0,
        marginBottom: "2.3125em",
      }}
      {...props}
    />
  );
};

export const CardContentListMargin = (props: MarginProps) => {
  return (
    <Margin
      sx={{
        marginTop: 0,
        marginBottom: "2.125em",
      }}
      {...props}
    />
  );
};

export const CardContentHeading = (props: TypographyProps) => {
  return <Typography variant="body_x1.125_m" component="h6" {...props} />;
};

export const CardContentText = (props: TypographyProps) => {
  return (
    <Typography
      sx={{
        display: "inline-block",
      }}
      variant="body_x0.875_m"
      {...props}
    />
  );
};

export const CardContentDevider = () => {
  return (
    <Divider
      sx={{
        marginBottom: "1.4286em",
      }}
    />
  );
};

export const CardContentList = styled(List)(() => ({
  display: "flex",
  gap: "0.8em",
}));

export const CardContentListColumn = styled(CardContentList)(() => ({
  flexDirection: "column",
}));

export const CardContentListItem = styled(ListItem)(() => ({
  display: "flex",
  gap: "0.625em",
  padding: 0,
}));

export const CardContentListItemColumn = styled(CardContentListItem)(() => ({
  flexDirection: "column",
  gap: 0,
}));

export const CardContentListItemStart = styled(CardContentListItem)(() => ({
  alignItems: "start",
}));

export const CardContentSmallText = (props: TypographyProps) => {
  return <Typography variant="body_x0.875" lineHeight={1.7} {...props} />;
};

export const CardContentBottomSmall = (props: TypographyProps) => {
  return (
    <Typography
      variant="body_x1.25"
      fontWeight="bold"
      lineHeight={1.5}
      component="small"
      {...props}
    />
  );
};

export const CardContentBottom = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
