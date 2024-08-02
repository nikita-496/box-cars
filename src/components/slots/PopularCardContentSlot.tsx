import type { FC } from "react";

import { Box, useTheme } from "@mui/material";

import { Icon } from "@/components/base/icon";
import { ArrowOutwardLink } from "@/components/navigation/ArrowOutwardLink";
import { NavLinkStyled } from "@/components/navigation/sectionLinks.styles";
import {
  CardContentBottomSmall,
  CardContentBottom,
  CardContentHeading,
  CardContentListColumn,
  CardContentListItemStart,
  CardContentText,
  CardContentSmallText,
  CardContent,
  CardContentHeadingMargin,
  CardContentListMargin,
} from "@/components/slots/cardContentSlot.styles";

export const PopularCardContentSlot: FC = () => {
  const theme = useTheme();
  return (
    <CardContent>
      <CardContentHeadingMargin>
        <CardContentHeading>
          <NavLinkStyled to="#" color={theme.palette.common.white}>
            Mercedes-Benz, C Class
          </NavLinkStyled>
        </CardContentHeading>
        <CardContentText>
          2023 C300e AMG Line Night Ed Premium Plus
        </CardContentText>
      </CardContentHeadingMargin>
      <CardContentListMargin>
        <CardContentListColumn>
          <CardContentListItemStart>
            <Icon icon="GasolinePump" size={1.25} fill="white" />
            <CardContentSmallText>72,925 miles</CardContentSmallText>
          </CardContentListItemStart>
          <CardContentListItemStart>
            <Icon icon="GasolinePump" size={1.25} fill="white" />
            <CardContentSmallText>Petrol</CardContentSmallText>
          </CardContentListItemStart>
          <CardContentListItemStart>
            <Icon icon="GasolinePump" size={1.25} fill="white" />
            <CardContentSmallText>Automatic</CardContentSmallText>
          </CardContentListItemStart>
        </CardContentListColumn>
      </CardContentListMargin>

      <Box>
        <CardContentSmallText>$789</CardContentSmallText>
        <CardContentBottom>
          <CardContentBottomSmall> $399</CardContentBottomSmall>
          <ArrowOutwardLink
            label="View Details"
            url="#"
            color={theme.palette.common.white}
          />
        </CardContentBottom>
      </Box>
    </CardContent>
  );
};
