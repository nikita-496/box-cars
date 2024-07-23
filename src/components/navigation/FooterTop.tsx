import { FC } from "react";

import { Typography } from "@/components/base/typography";
import {
  ContentGrid,
  FormGrid,
  JoinButton,
  JoinForm,
  JoinGrid,
  JoinHeading,
  JoinTextField,
} from "@/components/navigation/footerTop.styles";

export const FooterTop: FC = () => {
  return (
    <JoinGrid container>
      <ContentGrid item md={5}>
        <JoinHeading variant="h6">Join BoxCar</JoinHeading>
        <Typography variant="body_x0.9375_sm">
          Receive pricing updates, shopping tips & more!
        </Typography>
      </ContentGrid>
      <FormGrid item xxs={12} md={7}>
        <JoinForm>
          <JoinTextField label="" placeholder="Your e-mail address" />
          <JoinButton color="blueDark">Sign Up</JoinButton>
        </JoinForm>
      </FormGrid>
    </JoinGrid>
  );
};
