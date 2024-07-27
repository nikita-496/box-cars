import { Box, useTheme } from "@mui/material";
import { FC } from "react";

import { Icon } from "@/components/base/icon";
import { ArrowOutwardLink } from "@/components/navigation/ArrowOutwardLink";
import { NavLinkStyled } from "@/components/navigation/sectionLinks.styles";
import {
  CardContentBottomSmall,
  CardContentBottom,
  CardContentDevider,
  CardContentHeading,
  CardContentList,
  CardContentText,
  CardContentListItemColumn,
  CardContentSmallText,
  CardContent,
} from "@/components/slots/cardContentSlot.styles";

export const VehicleCardContentSlot: FC = () => {
  const theme = useTheme();
  return (
    <CardContent>
      <CardContentHeading>
        <NavLinkStyled to="#">Mercedes-Benz, C Class</NavLinkStyled>
      </CardContentHeading>
      <CardContentText>2023 C300e AMG Line Night Ed Premiu...</CardContentText>
      <CardContentDevider />
      <CardContentList>
        <CardContentListItemColumn>
          <Icon icon="GasolinePump" size={0.875} />
          <CardContentSmallText>72,925 miles</CardContentSmallText>
        </CardContentListItemColumn>
        <CardContentListItemColumn>
          <Icon icon="GasolinePump" size={0.875} />
          <CardContentSmallText>Petrol</CardContentSmallText>
        </CardContentListItemColumn>
        <CardContentListItemColumn>
          <Icon icon="GasolinePump" size={0.875} />
          <CardContentSmallText>Automatic</CardContentSmallText>
        </CardContentListItemColumn>
      </CardContentList>
      <CardContentDevider />
      <Box>
        <CardContentSmallText>$789</CardContentSmallText>
        <CardContentBottom>
          <CardContentBottomSmall> $399</CardContentBottomSmall>
          <ArrowOutwardLink
            label="View Details"
            url="#"
            color={theme.palette.primary.main}
          />
        </CardContentBottom>
      </Box>
    </CardContent>
  );
};
