import { createUuid } from "@/core/utils/createUuid";
import { FC } from "react";

import { NavLink } from "@/components/base/navLink";
import { SearchForm } from "@/components/forms";
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
} from "@/pages/home/home.styles";

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
  );
};
