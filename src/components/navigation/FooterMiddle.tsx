import { Box, Grid } from "@mui/material";
import { FC } from "react";
import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import { Heading } from "@/components/navigation/footer.styles";
import {
  BoxWrapper,
  SocialListItem,
  LinksListItem,
  NavLink,
  SocialHeading,
  TypographyLabel,
  TypographyTitle,
  NavLinkDownload,
  LinksList,
  GridItem,
  GridDownload,
  LinksGridItem,
  SocialList,
} from "@/components/navigation/footerMiddle.styles";

const usefulNavLinks = [
  { label: "About Us", url: "#" },
  { label: "Careers", url: "#" },
  { label: "Blog", url: "#" },
  { label: "FAQs", url: "#" },
  { label: "Finance", url: "#" },
  { label: "Contact Us", url: "#" },
];

const quickNavLinks = [
  { label: "Get in Touch", url: "#" },
  { label: "Help center", url: "#" },
  { label: "Live chat", url: "#" },
  { label: "How it works", url: "#" },
];

const ourBrandsNavLinks = [
  { label: "Aston Martin", url: "#" },
  { label: "Audi", url: "#" },
  { label: "Bentley", url: "#" },
  { label: "BMW", url: "#" },
  { label: "Bugatti", url: "#" },
];

const vehiclesTypeNavLinks = [
  { label: "Aston Martin", url: "#" },
  { label: "Audi", url: "#" },
  { label: "Bentley", url: "#" },
  { label: "BMW", url: "#" },
  { label: "Bugatti", url: "#" },
];

const socialNavLinks = [
  { icon: <FaFacebookF style={{ verticalAlign: "middle" }} />, url: "#" },
  { icon: <FaTwitter style={{ verticalAlign: "middle" }} />, url: "#" },
  { icon: <FaInstagram style={{ verticalAlign: "middle" }} />, url: "#" },
  { icon: <FaLinkedinIn style={{ verticalAlign: "middle" }} />, url: "#" },
];

export const FooterMiddle: FC = () => {
  return (
    <BoxWrapper>
      <Grid container>
        <Grid container item md={9}>
          <LinksGridItem item xxs={12} sm={6} md={3}>
            <Heading variant="h4">Useful Links</Heading>
            <LinksList>
              {usefulNavLinks.map((navLink) => (
                <LinksListItem key={navLink.url}>
                  <NavLink to={navLink.url}>{navLink.label}</NavLink>
                </LinksListItem>
              ))}
            </LinksList>
          </LinksGridItem>
          <LinksGridItem item xxs={12} sm={6} md={3}>
            <Heading variant="h4">Qucik Links</Heading>
            <LinksList>
              {quickNavLinks.map((navLink) => (
                <LinksListItem key={navLink.url}>
                  <NavLink to={navLink.url}>{navLink.label}</NavLink>
                </LinksListItem>
              ))}
            </LinksList>
          </LinksGridItem>
          <LinksGridItem item xxs={12} sm={6} md={3}>
            <Heading variant="h4">Our Brands</Heading>
            <LinksList>
              {ourBrandsNavLinks.map((navLink) => (
                <LinksListItem key={navLink.url}>
                  <NavLink to={navLink.url}>{navLink.label}</NavLink>
                </LinksListItem>
              ))}
            </LinksList>
          </LinksGridItem>
          <LinksGridItem item xxs={12} sm={6} md={3}>
            <Heading variant="h4">Vehicles Type</Heading>
            <LinksList>
              {vehiclesTypeNavLinks.map((navLink) => (
                <LinksListItem key={navLink.url}>
                  <NavLink to={navLink.url}>{navLink.label}</NavLink>
                </LinksListItem>
              ))}
            </LinksList>
          </LinksGridItem>
        </Grid>
        <GridItem item xxs={12} sm={6} md={3}>
          <Heading variant="h4">Downloads</Heading>
          <GridDownload container>
            <Grid item>
              <NavLinkDownload to="#">
                <FaApple fontSize="1.8em" />
                <Box>
                  <TypographyLabel>Download on the</TypographyLabel>
                  <TypographyTitle variant="h6">Apple Store</TypographyTitle>
                </Box>
              </NavLinkDownload>
            </Grid>
            <Grid item>
              <NavLinkDownload to="#">
                <FaGooglePlay fontSize="1.6em" />
                <Box>
                  <TypographyLabel>Get in on</TypographyLabel>
                  <TypographyTitle variant="h6">Google Play</TypographyTitle>
                </Box>
              </NavLinkDownload>
            </Grid>
          </GridDownload>
          <Grid item>
            <SocialHeading variant="h6">Connect With Us</SocialHeading>
            <SocialList>
              {socialNavLinks.map((navLink) => (
                <SocialListItem key={navLink.url}>
                  <NavLink to={navLink.url}>{navLink.icon}</NavLink>
                </SocialListItem>
              ))}
            </SocialList>
          </Grid>
        </GridItem>
      </Grid>
    </BoxWrapper>
  );
};
