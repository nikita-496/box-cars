import { Typography } from "@mui/material";
import { FC, useState } from "react";

import { CustomAccordionDetails } from "@/components/designSystem/accordion/CustomAccordionDetails";
import { CustomAccordionSummary } from "@/components/designSystem/accordion/CustomAccordionSummary";
import { CustomAccordion } from "@/components/designSystem/accordion/CustomAccrodion";

type AccordionProps = {
  content: {
    id: string;
    title: string;
    text: string;
  }[];
};

export const ThemeControlledAccordion: FC<AccordionProps> = ({ content }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      return event;
    };
  return (
    <div>
      {content.map((item, index) => (
        <CustomAccordion
          key={item.id}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
        >
          <CustomAccordionSummary
            aria-controls={`panel${index + 1}bh-content`}
            id={`panel${index + 1}bh-header`}
          >
            <Typography variant="body_x1.125_m">{item.title}</Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <Typography variant="body_x0.9375_m">{item.text}</Typography>
          </CustomAccordionDetails>
        </CustomAccordion>
      ))}
    </div>
  );
};
