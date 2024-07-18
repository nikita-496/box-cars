import { FC } from "react";

import {
  AccordionWrapper,
  AccordionDetails,
  AccordionSummary,
} from "@/components/base/elements";
import { Icon } from "@/components/base/icon";
import { Typography } from "@/components/base/typography";

type AccrodionProps = {
  title: string;
  body: string;
};

export const Accrodion: FC<AccrodionProps> = ({ title, body }) => {
  return (
    <AccordionWrapper>
      <AccordionSummary
        expandIcon={<Icon icon="Plus" fill="#222222" fontSize="inherit" />}
      >
        <Typography variant="body_x1.125">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body_x0.9375_m">{body}</Typography>
      </AccordionDetails>
    </AccordionWrapper>
  );
};
