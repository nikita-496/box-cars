import { createUuid } from "@/core/utils/createUuid";
import { Grid, List } from "@mui/material";
import { FC } from "react";

import { ArrowOutwardLink } from "@/components/navigation/ArrowOutwardLink";
import {
  HeadingSection,
  SectionContainer,
  Top,
} from "@/components/sections/sections.styles";
import {
  ShopNavLink,
  ShopNavLinkListItem,
  TabsStyled,
} from "@/components/sections/shop/shop.styles";

const tabs = [
  {
    id: createUuid(),
    name: "New Cars For Sale",
  },
  {
    id: createUuid(),
    name: "Used Cars For Sale",
  },
  {
    id: createUuid(),
    name: "Browse By Type",
  },
  {
    id: createUuid(),
    name: "Browse By Brand",
  },
];

const shopNavLinksList = [
  {
    label: "Used Abarth Cars",
    link: "#",
  },
  {
    label: "Used Alfa Romeo Cars",
    link: "#",
  },
  {
    label: "Used Audi Cars",
    link: "#",
  },
  {
    label: "Used Bentley Cars",
    link: "#",
  },
  {
    label: "Used Abarth Cars",
    link: "#",
  },
  {
    label: "Used Chevrolet Cars",
    link: "#",
  },
  {
    label: "Used Chrysler Cars",
    link: "#",
  },
  {
    label: "Used Citroen Cars",
    link: "#",
  },
  {
    label: "Used Cupra Cars",
    link: "#",
  },
  {
    label: "Used Dacia Cars",
    link: "#",
  },
  {
    label: "Used DS Cars",
    link: "#",
  },
  {
    label: "Used Fiat Cars",
    link: "#",
  },
];

const firstColumn = shopNavLinksList.slice(0, 6);
const secondColumn = shopNavLinksList.slice(6, 14);

const ShopContent = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xxs={12} md={2}>
        <List>
          {firstColumn.map((navLink) => (
            <ShopNavLinkListItem key={navLink.link}>
              <ShopNavLink to={navLink.link}>{navLink.label}</ShopNavLink>
            </ShopNavLinkListItem>
          ))}
        </List>
      </Grid>
      <Grid item xxs={12} md={2}>
        <List>
          {secondColumn.map((navLink) => (
            <ShopNavLinkListItem key={navLink.link}>
              <ShopNavLink to={navLink.link}>{navLink.label}</ShopNavLink>
            </ShopNavLinkListItem>
          ))}
        </List>
      </Grid>
      <Grid item xxs={12} md={2}>
        <List>
          {firstColumn.map((navLink) => (
            <ShopNavLinkListItem key={navLink.link}>
              <ShopNavLink to={navLink.link}>{navLink.label}</ShopNavLink>
            </ShopNavLinkListItem>
          ))}
        </List>
      </Grid>
      <Grid item xxs={12} md={2}>
        <List>
          {secondColumn.map((navLink) => (
            <ShopNavLinkListItem key={navLink.link}>
              <ShopNavLink to={navLink.link}>{navLink.label}</ShopNavLink>
            </ShopNavLinkListItem>
          ))}
        </List>
      </Grid>
      <Grid item xxs={12} md={2}>
        <List>
          {firstColumn.map((navLink) => (
            <ShopNavLinkListItem key={navLink.link}>
              <ShopNavLink to={navLink.link}>{navLink.label}</ShopNavLink>
            </ShopNavLinkListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export const Shop: FC = () => {
  return (
    <section>
      <SectionContainer>
        <Top>
          <HeadingSection>Shop BoxCar Your Way</HeadingSection>
          <ArrowOutwardLink label="View More" url="#" />
        </Top>
        <TabsStyled
          tabItems={tabs}
          content={[
            <ShopContent />,
            <ShopContent />,
            <ShopContent />,
            <ShopContent />,
          ]}
        />
      </SectionContainer>
    </section>
  );
};
