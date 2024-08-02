import type { FC } from "react";

import PopularCardImage from "@/assets/car-1.jpg";
import { CardWrapper } from "@/components/cards/card.styles";
import {
  PopularCardStyled,
  ZoomInCardMediaStyled,
} from "@/components/cards/popularCard.styles";
import { PopularCardContentSlot } from "@/components/slots/PopularCardContentSlot";
import { VehicleCardToolbarSlot } from "@/components/slots/VehicleCardToolbarSlot";
export const PopularCard: FC = () => {
  return (
    <CardWrapper>
      <PopularCardStyled
        cardMediaSlot={
          <ZoomInCardMediaStyled
            media={PopularCardImage}
            height={22.109}
            width={46.77}
            widthOperator="%"
          />
        }
        cardContentSlot={<PopularCardContentSlot />}
        cardToolbarSlot={<VehicleCardToolbarSlot />}
      />
      <PopularCardStyled
        cardMediaSlot={
          <ZoomInCardMediaStyled
            media={PopularCardImage}
            height={22.109}
            width={46.77}
            widthOperator="%"
          />
        }
        cardContentSlot={<PopularCardContentSlot />}
        cardToolbarSlot={<VehicleCardToolbarSlot />}
      />
    </CardWrapper>
  );
};
