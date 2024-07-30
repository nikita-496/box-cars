import { useAppDispatch } from "@/core/hooks/useAppDispatch";
import { fetchMakes, selectPremiumBrands } from "@/core/store/makes/makesSlice";
import { Grid } from "@mui/material";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";

import { ZoomInCardMedia } from "@/components/base/elements/ZoomInCardMedia";
import { NavLink } from "@/components/base/navLink";
import { ArrowOutwardLink } from "@/components/navigation/ArrowOutwardLink";
import {
  CardBrand,
  HeadingBrand,
} from "@/components/sections/premiumBrands/premiumBrands.styles";
import {
  HeadingSection,
  SectionContainer,
  Top,
} from "@/components/sections/sections.styles";

export const PremiumBrands: FC = () => {
  const dispatch = useAppDispatch();
  const premiumBrands = useSelector(selectPremiumBrands);

  useEffect(() => {
    dispatch(fetchMakes());
  }, [dispatch]);

  return (
    <section>
      <SectionContainer>
        <Top>
          <HeadingSection>Explore Our Premium Brands</HeadingSection>
          <ArrowOutwardLink label="Show All Brands" url="#" />
        </Top>
        <Grid container spacing={3} justifyContent="center">
          {premiumBrands.map((brand) => (
            <Grid key={brand.id} item sm={6} md={2}>
              <NavLink to="#">
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
