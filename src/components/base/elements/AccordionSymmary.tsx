import type { AccordionSummaryProps as MUIAccordionSummaryProps } from "@mui/material";

import { AccordionSummary as MUIAccordionSummary, styled } from "@mui/material";

export type AccordionSummaryProps = MUIAccordionSummaryProps;

export const AccordionSummary = styled(({ ...rest }: AccordionSummaryProps) => (
  <MUIAccordionSummary {...rest} />
))(({ theme }) => ({
  padding: "2.5em 1.875em 0.8125em 2.5em",
  "&.Mui-expanded": { margin: 0 },
  "&.Mui-expanded:first-of-type": { margin: 0 },
  "& .MuiAccordionSummary-content": {
    margin: 0,
    fontWeight: theme.typography.fontWeightMedium,
  },
  "& .MuiAccordionSummary-content .Mui-expanded": { margin: 0 },
}));
