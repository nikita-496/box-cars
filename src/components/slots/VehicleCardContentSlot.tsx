import { useAppDispatch } from "@/core/hooks/useAppDispatch";
import { ModelM } from "@/core/models/model.model";
import {
  fetchOneEngine,
  selectAllEngines,
} from "@/core/store/engines/enginesSlice";
import { selectOneMakes } from "@/core/store/makes/makesSlice";
import { fetchOneTrim, selectAllTrims } from "@/core/store/trims/trimsSlice";
import { RootState } from "@/core/types/store.type";
import { Box, useTheme } from "@mui/material";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";

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

type VehicleCardContentSlotProps = {
  model: ModelM;
};

export const VehicleCardContentSlot: FC<VehicleCardContentSlotProps> = ({
  model,
}) => {
  const theme = useTheme();
  const make = useSelector((state: RootState) =>
    selectOneMakes(state, model.make_id),
  );

  const engine = useSelector(selectAllEngines)[0];
  const trim = useSelector((state: RootState) => selectAllTrims(state))[0];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOneTrim(model.id));
    dispatch(
      fetchOneEngine({ makeModelId: model.id, makeModelTrimId: trim?.id }),
    );
  }, [dispatch, model.id, trim?.id]);

  return (
    <CardContent>
      <CardContentHeading>
        <NavLinkStyled to="#">
          {make?.name}, {model.name}
        </NavLinkStyled>
      </CardContentHeading>
      <CardContentText>
        {trim?.year} {trim?.name}
      </CardContentText>
      <CardContentDevider />
      <CardContentList>
        <CardContentListItemColumn>
          <Icon icon="GasolinePump" size={0.875} />
          <CardContentSmallText>72,925 miles</CardContentSmallText>
        </CardContentListItemColumn>
        <CardContentListItemColumn>
          <Icon icon="GasolinePump" size={0.875} />
          <CardContentSmallText>{engine?.engine_type}</CardContentSmallText>
        </CardContentListItemColumn>
        <CardContentListItemColumn>
          <Icon icon="GasolinePump" size={0.875} />
          <CardContentSmallText>Automatic</CardContentSmallText>
        </CardContentListItemColumn>
      </CardContentList>
      <CardContentDevider />
      <Box>
        <CardContentSmallText>${trim?.msrp}</CardContentSmallText>
        <CardContentBottom>
          <CardContentBottomSmall> ${trim?.invoice}</CardContentBottomSmall>
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
