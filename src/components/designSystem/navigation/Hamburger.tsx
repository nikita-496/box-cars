import { Box, styled } from "@mui/material";
import { FC } from "react";

import { IconButton } from "@/components/base/button";
import { Icon } from "@/components/base/icon";

export type HamburgerProps = {
  handleDrawerOpen: () => void;
};

const StyledIconButton = styled(IconButton)(() => ({
  padding: 0,
  marginLeft: "0.84em",
}));

const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));

export const Hamburger: FC<HamburgerProps> = ({ handleDrawerOpen }) => {
  return (
    <StyledBoxWrapper>
      <StyledIconButton onClick={handleDrawerOpen}>
        <Icon icon="Burger" fill="#fff" />
      </StyledIconButton>
    </StyledBoxWrapper>
  );
};
