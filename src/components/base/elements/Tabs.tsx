import type { TabsProps as MUITabsProps } from "@mui/material";

import { Tabs as MUITabs, styled } from "@mui/material";

export type TabsProps = {
  value: number;
  onChange: (
    event: React.SyntheticEvent,
    newValue: number,
  ) => React.SyntheticEvent<Element, Event>;
} & MUITabsProps;

export const Tabs = styled(({ ...rest }: TabsProps) => (
  <MUITabs
    {...rest}
    aria-label="basic tabs example"
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))(({ theme }) => ({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: "1px",
    transition:
      "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out",
  },
  "& .MuiTabs-indicatorSpan": {
    width: "100%",
    backgroundColor: theme.palette.blueDark.main,
  },
}));
