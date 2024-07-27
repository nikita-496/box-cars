import { Grid } from "@mui/material";
import { FC } from "react";

import {
  FactCounter,
  FactCounterGrid,
  FactCounterTitle,
  FactCounterValue,
} from "@/components/sections/fact/factSection.styles";
import { SectionLargeContainer } from "@/components/sections/sections.styles";

const counters = [
  { value: "834M", title: "Cars for sale" },
  { value: "834M", title: "Cars for sale" },
  { value: "834M", title: "Cars for sale" },
  { value: "834M", title: "Cars for sale" },
];

export const FactSection: FC = () => {
  return (
    <section>
      <SectionLargeContainer>
        <FactCounter>
          <Grid container>
            {counters.map((counter) => (
              <FactCounterGrid key={counter.title} item xxs={12} xs={6} md={3}>
                <FactCounterValue>{counter.value}</FactCounterValue>
                <FactCounterTitle>{counter.title}</FactCounterTitle>
              </FactCounterGrid>
            ))}
          </Grid>
        </FactCounter>
      </SectionLargeContainer>
    </section>
  );
};
