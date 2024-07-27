import { darken, useTheme } from "@mui/material";

import { Tabs, TabsProps } from "@/components/designSystem/tabs/Tabs";

export const TabStyled = ({ tabItems, content, ...props }: TabsProps) => {
  const theme = useTheme();
  const white = theme.palette.common.white;
  return (
    <Tabs
      tabItems={tabItems}
      content={content}
      styleTab={{
        color: white,
        "&.Mui-selected": {
          color: white,
        },
      }}
      styleTabs={{
        borderColor: darken(theme.palette.primary.light, 0.7),
      }}
      styleContent={{ padding: "2.125em 0 0" }}
      {...props}
    />
  );
};
