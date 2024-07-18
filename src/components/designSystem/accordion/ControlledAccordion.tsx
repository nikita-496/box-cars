import { createUuid } from "@/core/utils/createUuid";
import { FC, useState } from "react";

import { ContentList } from "@/components/ContentList";
import {
  AccordionWrapper,
  AccordionDetails,
  AccordionSummary,
} from "@/components/base/elements";
import { Icon } from "@/components/base/icon";
import { Typography } from "@/components/base/typography";

const accordionContent = [
  {
    id: createUuid(),
    title: "What methods of payments are supported?",
    body: "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec.",
  },
  {
    id: createUuid(),
    title: "What methods of payments are supported?",
    body: "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec.",
  },
  {
    id: createUuid(),
    title: "What methods of payments are supported?",
    body: "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec.",
  },
];

export const ControlledAccordion: FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <ContentList
      contentList={accordionContent}
      renderContent={(content, index) => (
        <AccordionWrapper
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
          key={content.id}
        >
          <AccordionSummary
            aria-controls={`panel${index + 1}bh-content`}
            id={`panel${index + 1}bh-header`}
            expandIcon={<Icon icon="Plus" fill="#222222" fontSize="inherit" />}
          >
            <Typography variant="body_x1.125">{content.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body_x0.9375_m">{content.body}</Typography>
          </AccordionDetails>
        </AccordionWrapper>
      )}
    />
  );
};
