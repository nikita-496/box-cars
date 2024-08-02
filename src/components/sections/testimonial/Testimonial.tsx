import type { FC } from "react";

import { Grid } from "@mui/material";

import testimonial from "@/assets/test-1.jpg";
import { ListItem } from "@/components/base/elements";
import { StarYellow } from "@/components/base/icon/StarYellow";
import { Margin } from "@/components/base/layout";
import {
  HeadingSection,
  SectionContainer,
  Top,
} from "@/components/sections/sections.styles";
import {
  RatingTypography,
  StarList,
  SubHeadingSection,
  TestimonialAuthor,
  TestimonialImage,
  TestimonialProfession,
  TestimonialRating,
  TestimonialText,
} from "@/components/sections/testimonial/testimonial.styles";

export const Testimonial: FC = () => {
  return (
    <section>
      <SectionContainer>
        <Top>
          <HeadingSection>What our customers say</HeadingSection>
          <SubHeadingSection>
            Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews
          </SubHeadingSection>
        </Top>
        <Grid container>
          <Grid item xxs={12} lg={5}>
            <TestimonialImage src={testimonial} alt="testimonial" />
          </Grid>
          <Grid item xxs={12} lg={7}>
            <Margin
              sx={(theme) => ({
                [theme.breakpoints.up("md")]: {
                  marginTop: "6.8125em",
                  marginLeft: "7.5em",
                },
              })}
            >
              <TestimonialRating>
                <StarList>
                  <ListItem>
                    <StarYellow />
                  </ListItem>
                  <ListItem>
                    <StarYellow />
                  </ListItem>
                  <ListItem>
                    <StarYellow />
                  </ListItem>
                  <ListItem>
                    <StarYellow />
                  </ListItem>
                  <ListItem>
                    <StarYellow />
                  </ListItem>
                </StarList>
                <RatingTypography>4.8</RatingTypography>
              </TestimonialRating>
              <TestimonialAuthor>Ali TUFAN</TestimonialAuthor>
              <TestimonialProfession>Designer</TestimonialProfession>
              <TestimonialText>
                I'd suggest Macklin Motors Nissan Glasgow South to a friend
                because I had great service from my salesman Patrick and all of
                the team.
              </TestimonialText>
            </Margin>
          </Grid>
        </Grid>
      </SectionContainer>
    </section>
  );
};
