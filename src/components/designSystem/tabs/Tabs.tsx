import type { SxProps } from "@mui/material";
import type { FC } from "react";
import type React from "react";

import { createUuid } from "@/core/utils/createUuid";
import { Box } from "@mui/material";
import { useState } from "react";

import { Tab, Tabs as TabBar } from "@/components/base/elements";
import { TabPanel } from "@/components/designSystem/tabs/TabPanel";

type Tab = {
  id: string;
  name: string;
};

export type TabsProps = {
  tabItems: Tab[];
  content: React.ReactNode[];
  variant?: "scrollable" | "standard" | "fullWidth";
  orientation?: "vertical" | "horizontal";
  styleTabs?: SxProps;
  styleTab?: SxProps;
  styleContent?: SxProps;
  sx?: SxProps;
};

export const Tabs: FC<TabsProps> = ({
  content,
  tabItems,
  variant = "standard",
  orientation = "horizontal",
  styleTabs,
  styleTab,
  styleContent = { p: 3 },
  sx = { width: "100%" },
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    return event;
  };
  const defaultStyleTab = { marginRight: "1.88em" };
  const defaultStyleTabs = { borderBottom: 1, borderColor: "divider" };
  return (
    <Box sx={sx}>
      <TabBar
        value={activeTab}
        onChange={handleChange}
        orientation={orientation}
        sx={{ ...defaultStyleTabs, ...styleTabs }}
        variant={variant}
      >
        {tabItems.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.name}
            sx={{ ...defaultStyleTab, ...styleTab }}
          />
        ))}
      </TabBar>

      {content.map((item, index) => (
        <TabPanel
          key={createUuid()}
          value={activeTab}
          index={index}
          styleContent={styleContent}
        >
          {item}
        </TabPanel>
      ))}
    </Box>
  );
};
