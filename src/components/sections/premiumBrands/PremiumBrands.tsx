import { useAppDispatch } from "@/core/hooks/useAppDispatch";
import { useAppSelector } from "@/core/hooks/useAppSelector";
import {
  fetchMakes,
  selectPremiumBrands,
  selectBrandsStatus,
} from "@/core/modules/makes";
import { Grid, Skeleton } from "@mui/material";
import { FC, useEffect } from "react";

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
  const premiumBrands = useAppSelector(selectPremiumBrands);
  const premiumBrandsStatus = useAppSelector(selectBrandsStatus);

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
              {premiumBrandsStatus === "pending" ? (
                <Skeleton variant="rounded" width={226} height={180} />
              ) : (
                <NavLink to="#">
                  <CardBrand
                    cardMediaSlot={
                      <ZoomInCardMedia media={brand.image} width="auto" />
                    }
                    cardContentSlot={<HeadingBrand>{brand.name}</HeadingBrand>}
                  />
                </NavLink>
              )}
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </section>
  );
};
