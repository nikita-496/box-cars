import { createUuid } from "@/core/utils/createUuid";
import { FC } from "react";

import { PopularCard } from "@/components/cards/PopularCard";
import { ArrowOutwardLink } from "@/components/navigation/ArrowOutwardLink";
import { TabStyled } from "@/components/sections/popular/popularSection.styles";
import {
  DarkSection,
  HeadingDarkSection,
  SectionContainer,
  Top,
} from "@/components/sections/sections.styles";

const tabs = [
  {
    id: createUuid(),
    name: "New Cars",
  },
  {
    id: createUuid(),
    name: "Used Cars",
  },
  {
    id: createUuid(),
    name: "In Stock",
  },
];

export const PopularSection: FC = () => {
  return (
    <DarkSection>
      <SectionContainer>
        <Top>
          <HeadingDarkSection>Popular Makes</HeadingDarkSection>
          <ArrowOutwardLink label="View All" url="#" color="#fff" />
        </Top>
        <TabStyled
          tabItems={tabs}
          content={[<PopularCard />, <PopularCard />, <PopularCard />]}
        />
      </SectionContainer>
    </DarkSection>
  );
};
