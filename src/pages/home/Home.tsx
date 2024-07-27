import { createUuid } from "@/core/utils/createUuid";
import { FC } from "react";

import { NavLink } from "@/components/base/navLink";
import { SearchForm } from "@/components/forms";
import { AllVehiclesSection } from "@/components/sections/allVehicles/AllVehiclesSection";
import { BrandSection } from "@/components/sections/barnd/BrandSection";
import { Blog } from "@/components/sections/blog/Blog";
import { FactSection } from "@/components/sections/fact/FactSection";
import { PopularSection } from "@/components/sections/popular/PopularSection";
import { PricingSection } from "@/components/sections/pricing/PricingSection";
import { Shop } from "@/components/sections/shop/Shop";
import { Testimonial } from "@/components/sections/testimonial/Testimonial";
import { WhyChooseUs } from "@/components/sections/whyChooseUs/WhyChooseUsSection";
import {
  Hero,
  HeroContainer,
  ContentGrid,
  Heading,
  SearchFormTabs,
  SubTypography,
  List,
  ListItem,
  TypographyNavLink,
  TopTypography,
} from "@/pages/home/hero.styles";

const tabs = [
  {
    id: createUuid(),
    name: "All",
  },
  {
    id: createUuid(),
    name: "New",
  },
  {
    id: createUuid(),
    name: "Used",
  },
];

const carTypesNavLinks = [
  {
    label: "SUV",
    url: "suv",
  },
  {
    label: "Sedan",
    url: "sedan",
  },
  {
    label: "Hatchback",
    url: "hatchback",
  },
  {
    label: "Coupe",
    url: "coupe",
  },
  {
    label: "Hybrid",
    url: "hybrid",
  },
];

export const Home: FC = () => {
  return (
    <>
      <Hero>
        <HeroContainer>
          <ContentGrid container direction="column" alignItems="center">
            <TopTypography>
              Find cars for sale and for rent near you
            </TopTypography>
            <Heading>Find Your Perfect Car</Heading>
            <SearchFormTabs
              tabItems={tabs}
              content={[<SearchForm />, <SearchForm />, <SearchForm />]}
            />
            <SubTypography>Or Browse Featured Model</SubTypography>
            <List>
              {carTypesNavLinks.map((navLink) => (
                <ListItem key={navLink.url}>
                  <NavLink to={navLink.url}>
                    <TypographyNavLink>{navLink.label}</TypographyNavLink>
                  </NavLink>
                </ListItem>
              ))}
            </List>
          </ContentGrid>
        </HeroContainer>
      </Hero>
      <BrandSection />
      <AllVehiclesSection />
      <PricingSection />
      <FactSection />
      <WhyChooseUs />
      <PopularSection />
      <Shop />
      <Testimonial />
      <Blog />
    </>
  );
};
