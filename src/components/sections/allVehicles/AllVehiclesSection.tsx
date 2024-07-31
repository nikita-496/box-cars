import { useAppDispatch } from "@/core/hooks/useAppDispatch";
import { fetchModels } from "@/core/modules/models/fetchModels";
import { createUuid } from "@/core/utils/createUuid";
import { FC, useEffect } from "react";

import { VehicleInStock } from "@/components/cards/VehicleInStock";
import { VehicleNewCarsCard } from "@/components/cards/VehicleNewCarsCard";
import { VehicleUsedCarsCard } from "@/components/cards/VehicleUsedCarsCard";
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
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchModels());
  }, [dispatch]);

  return (
    <section>
      <SectionContainer>
        <Top>
          <HeadingSection>Explore All Vehicles</HeadingSection>
          <ArrowOutwardLink label="View All" url="#" />
        </Top>
        <TabsStyled
          tabItems={tabs}
          content={[
            <VehicleNewCarsCard />,
            <VehicleUsedCarsCard />,
            <VehicleInStock />,
          ]}
        />
      </SectionContainer>
    </section>
  );
};
