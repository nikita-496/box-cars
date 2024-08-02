import type { SxProps } from "@mui/material";
import type { FC, PropsWithChildren } from "react";

import { Box, Fade } from "@mui/material";

type TabPanelProps = {
  index: number;
  value: number;
  styleContent?: SxProps;
} & PropsWithChildren;

export const TabPanel: FC<TabPanelProps> = ({
  index,
  value,
  styleContent,
  children,
}) => {
  return (
    <Fade
      in={value === index}
      timeout={700}
      easing={{
        enter: "linear",
        exit: "linear",
      }}
    >
      <Box
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        sx={styleContent}
      >
        {value === index && <Box>{children}</Box>}
      </Box>
    </Fade>
  );
};
