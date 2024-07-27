import { Grid } from "@mui/material";
import { FC } from "react";

import brandAudi from "@/assets/brand-audi.png";
import { ZoomInCardMedia } from "@/components/base/elements/ZoomInCardMedia";
import { NavLink } from "@/components/base/navLink";
import { ArrowOutwardLink } from "@/components/navigation/ArrowOutwardLink";
import {
  CardBrand,
  HeadingBrand,
} from "@/components/sections/barnd/barndSection.styles";
import {
  HeadingSection,
  SectionContainer,
  Top,
} from "@/components/sections/sections.styles";

const brandNavLinks = [
  { name: "Audi", image: brandAudi, url: "#" },
  { name: "Audi", image: brandAudi, url: "#" },
  { name: "Audi", image: brandAudi, url: "#" },
  { name: "Audi", image: brandAudi, url: "#" },
  { name: "Audi", image: brandAudi, url: "#" },
  { name: "Audi", image: brandAudi, url: "#" },
];

export const BrandSection: FC = () => {
  return (
    <section>
      <SectionContainer>
        <Top>
          <HeadingSection>Explore Our Premium Brands</HeadingSection>
          <ArrowOutwardLink label="Show All Brands" url="#" />
        </Top>
        <Grid container spacing={3} justifyContent="center">
          {brandNavLinks.map((brand) => (
            <Grid key={brand.image} item sm={6} md={2}>
              <NavLink to={brand.url}>
                <CardBrand
                  cardMediaSlot={
                    <ZoomInCardMedia media={brand.image} width="auto" />
                  }
                  cardContentSlot={<HeadingBrand>{brand.name}</HeadingBrand>}
                />
              </NavLink>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </section>
  );
};
