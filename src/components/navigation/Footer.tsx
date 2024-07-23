import { FC } from "react";

import { FooterBottom } from "@/components/navigation/FooterBottom";
import { FooterMiddle } from "@/components/navigation/FooterMiddle";
import { FooterTop } from "@/components/navigation/FooterTop";
import {
  FooterDivider,
  StyledContainer,
} from "@/components/navigation/footer.styles";

export const Footer: FC = () => {
  return (
    <footer>
      <StyledContainer>
        <FooterTop />
        <FooterDivider />
        <FooterMiddle />
        <FooterDivider />
        <FooterBottom />
      </StyledContainer>
    </footer>
  );
};
