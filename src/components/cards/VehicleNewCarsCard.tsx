import { selectAllModels } from "@/core/store/models/modelsSlice";
import { RootState } from "@/core/types/store.type";
import { FC } from "react";
import { useSelector } from "react-redux";

import VehicleCardImage from "@/assets/car-1.jpg";
import { ZoomInCardMedia } from "@/components/base/elements/ZoomInCardMedia";
import { CardWrapper } from "@/components/cards/card.styles";
import { VehicleCardStyled } from "@/components/cards/vehicleCard.styles";
import { VehicleCardContentSlot } from "@/components/slots/VehicleCardContentSlot";
import { VehicleCardToolbarSlot } from "@/components/slots/VehicleCardToolbarSlot";

export const VehicleNewCarsCard: FC = () => {
  const models = useSelector((state: RootState) => selectAllModels(state));

  return (
    <CardWrapper>
      {models.map((model) => (
        <VehicleCardStyled
          key={model.id}
          cardMediaSlot={
            <ZoomInCardMedia media={VehicleCardImage} height={22.109} />
          }
          cardContentSlot={<VehicleCardContentSlot model={model} />}
          cardToolbarSlot={<VehicleCardToolbarSlot />}
        />
      ))}
    </CardWrapper>
  );
};
