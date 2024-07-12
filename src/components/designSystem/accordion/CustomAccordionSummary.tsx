import { AccordionSummary, styled } from "@mui/material";
import { Box } from "@mui/system";
import { PropsWithChildren } from "react";

import { ThemeIcon } from "@/components/designSystem/icon/ThemeIcon";

type CustomAccordionSummaryProps = {
  id: string;
  "aria-controls": string;
} & PropsWithChildren;

const CustomExpandIcon = () => (
  <Box
    sx={{
      ".Mui-expanded & > .collapsIconWrapper": {
        display: "none",
      },
      ".expandIconWrapper": {
        display: "none",
      },
      ".Mui-expanded & > .expandIconWrapper": {
        display: "block",
      },
    }}
  >
    <ThemeIcon
      icon="Minus"
      fill="#222222"
      fontSize="inherit"
      className="expandIconWrapper"
    />
    <ThemeIcon
      icon="Plus"
      fill="#222222"
      fontSize="inherit"
      className="collapsIconWrapper"
    />
  </Box>
);

export const CustomAccordionSummary = styled(
  (props: CustomAccordionSummaryProps) => (
    <AccordionSummary expandIcon={<CustomExpandIcon />} {...props}>
      {props.children}
    </AccordionSummary>
  ),
)({
  padding: "2.5em 1.875em 0.8125em 2.5em",
  "&.Mui-expanded": { margin: 0 },
  "&.Mui-expanded:first-of-type": { margin: 0 },
  "& .MuiAccordionSummary-content": { margin: 0 },
  "& .MuiAccordionSummary-content .Mui-expanded": { margin: 0 },
  "& .MuiAccordionSummary-expandIconWrapper": {
    transition: "none",
  },
});
