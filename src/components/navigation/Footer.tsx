import type { FC } from "react";

import {
  FooterDivider,
  FooterStyled,
  StyledContainer,
} from "@/components/navigation/footer.styles";
import { FooterBottom } from "@/components/navigation/FooterBottom";
import { FooterMiddle } from "@/components/navigation/FooterMiddle";
import { FooterTop } from "@/components/navigation/FooterTop";

export const Footer: FC = () => {
  return (
    <FooterStyled>
      <StyledContainer>
        <FooterTop />
        <FooterDivider />
        <FooterMiddle />
        <FooterDivider />
        <FooterBottom />
      </StyledContainer>
    </FooterStyled>
  );
};
