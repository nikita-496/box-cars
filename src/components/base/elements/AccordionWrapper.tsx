import { Accordion, styled } from "@mui/material";

export const AccordionWrapper = styled(Accordion)(() => ({
  "&.Mui-expanded": { margin: "0" },
  "&.Mui-expanded:first-of-type": { margin: "0" },
  boxShadow: "none",
  border: "none",
  "&::before": {
    display: "none",
  },
}));
