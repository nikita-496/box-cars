import type { FC } from "react";

import { Grid } from "@mui/material";

import pricingImage from "@/assets/pricing.jpg";
import { CheckCircleWhite } from "@/components/base/icon/CheckCircleWhite";
import {
  ContentInner,
  ContentGrid,
  ImageStyled,
  ListStyled,
  ListItemStyled,
  PricingHeading,
  PricingListText,
  PricingNavLink,
  PricingSubHeading,
} from "@/components/sections/pricing/pricingSection.styles";
import { SectionLargeContainer } from "@/components/sections/sections.styles";

export const PricingSection: FC = () => {
  return (
    <section>
      <SectionLargeContainer>
        <Grid container>
          <Grid item md={6}>
            <ImageStyled src={pricingImage} alt="sunset car in the mountains" />
          </Grid>
          <ContentGrid item md={6}>
            <ContentInner>
              <PricingHeading>
                Get A Fair Price For Your Car Sell To Us Today
              </PricingHeading>
              <PricingSubHeading>
                We are committed to providing our customers with exceptional
                service, competitive pricing, and a wide range of.
              </PricingSubHeading>
              <ListStyled>
                <ListItemStyled>
                  <CheckCircleWhite />
                  <PricingListText>
                    We are the UK’s largest provider, with more patrols in more
                    places
                  </PricingListText>
                </ListItemStyled>
                <ListItemStyled>
                  <CheckCircleWhite />
                  <PricingListText>
                    You get 24/7 roadside assistance
                  </PricingListText>
                </ListItemStyled>
                <ListItemStyled>
                  <CheckCircleWhite />
                  <PricingListText>
                    We fix 4 out of 5 cars at the roadside
                  </PricingListText>
                </ListItemStyled>
              </ListStyled>
              <PricingNavLink label="Get Started" url="#" />
            </ContentInner>
          </ContentGrid>
        </Grid>
      </SectionLargeContainer>
    </section>
  );
};
