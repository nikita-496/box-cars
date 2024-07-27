import { FC } from "react";

import { Icon } from "@/components/base/icon";
import {
  ButtonStyled,
  IconWrapper,
  TagStyled,
} from "@/components/slots/vehicleCardToolbarSlot.styles";

export const VehicleCardToolbarSlot: FC = () => {
  return (
    <>
      <TagStyled name="Low mileage" />
      <ButtonStyled>
        <IconWrapper>
          <Icon icon="Bookmark" fontSize="inherit" />
        </IconWrapper>
      </ButtonStyled>
    </>
  );
};
