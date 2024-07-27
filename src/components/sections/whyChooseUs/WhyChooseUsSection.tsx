import { Grid } from "@mui/material";
import { FC } from "react";

import { Icon } from "@/components/base/icon";
import { IconName } from "@/components/base/icon/Icon";
import {
  HeadingSection,
  SectionContainer,
  Top,
} from "@/components/sections/sections.styles";
import {
  Text,
  Title,
  WhyChooseUsGrid,
} from "@/components/sections/whyChooseUs/whyChooseUsSection.styles";

const items: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "SpecialFinancingOffers",
    title: "Special Financing Offers",
    text: "Our stress-free finance department that can find financial solutions to save you money.",
  },
  {
    icon: "TrustedCarDealership",
    title: "Special Financing Offers",
    text: "Our stress-free finance department that can find financial solutions to save you money.",
  },
  {
    icon: "TransparentPricing",
    title: "Special Financing Offers",
    text: "Our stress-free finance department that can find financial solutions to save you money.",
  },
  {
    icon: "ExpertCarService",
    title: "Special Financing Offers",
    text: "Our stress-free finance department that can find financial solutions to save you money.",
  },
];

export const WhyChooseUs: FC = () => {
  return (
    <section>
      <SectionContainer>
        <Top>
          <HeadingSection>Why Choose Us?</HeadingSection>
        </Top>
        <Grid container columnSpacing={3}>
          {items.map((item) => (
            <WhyChooseUsGrid key={item.title} item xxs={12} sm={6} md={3}>
              <Icon icon={item.icon} size={3.75} fill="" />
              <Title>{item.title}</Title>
              <Text>{item.text}</Text>
            </WhyChooseUsGrid>
          ))}
        </Grid>
      </SectionContainer>
    </section>
  );
};
