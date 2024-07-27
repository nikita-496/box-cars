import { createUuid } from "@/core/utils/createUuid";
import { FC } from "react";

import { VehicleCard } from "@/components/cards/VehicleCard";
import { ArrowOutwardLink } from "@/components/navigation/ArrowOutwardLink";
import { TabsStyled } from "@/components/sections/allVehicles/allVehiclesSection.styles";
import {
  HeadingSection,
  Top,
  SectionContainer,
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

export const AllVehiclesSection: FC = () => {
  return (
    <section>
      <SectionContainer>
        <Top>
          <HeadingSection>Explore All Vehicles</HeadingSection>
          <ArrowOutwardLink label="View All" url="#" />
        </Top>
        <TabsStyled
          tabItems={tabs}
          content={[<VehicleCard />, <VehicleCard />, <VehicleCard />]}
        />
      </SectionContainer>
    </section>
  );
};
