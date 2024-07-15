import { theme } from "@/core/config/themes.config";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Stack } from "@mui/system";
import { FC } from "react";

import { Button } from "@/components/base/button";
import { ThemeIcon } from "@/components/designSystem/icon/ThemeIcon";

export const DesignSystem: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <h2>Design System</h2>
      <h3>Color tokens</h3>
      <Stack direction="row" gap={2} alignItems="center" mb={4}>
        <p>Common</p>
        <Stack direction="row" spacing={2}>
          <Stack alignItems="center">
            <Box sx={{ bgcolor: "common.white", width: 40, height: 20 }} />
          </Stack>
          <Stack alignItems="center">
            <Box sx={{ bgcolor: "common.black", width: 40, height: 20 }} />
          </Stack>
        </Stack>
      </Stack>
      <h3>Icons</h3>
      <ThemeIcon icon="ArrowBackIos" />
      <ThemeIcon icon="ArrowForwardIos" />
      <ThemeIcon icon="ArrowOutward" />
      <ThemeIcon icon="PersonOutlineRounded" />
      <ThemeIcon icon="SpecialFinancingOffers" fill="#EEF1FB" />
      <ThemeIcon icon="TrustedCarDealership" fill="#EEF1FB" />
      <ThemeIcon icon="TransparentPricing" fill="#EEF1FB" />
      <ThemeIcon icon="ExpertCarService" fill="#EEF1FB" />
      <ThemeIcon icon="Bookmark" fill="black" />
      <ThemeIcon icon="LookingForCar" fill="#CEE1F2" />
      <ThemeIcon icon="SellCar" fill="#CEE1F2" />
      <ThemeIcon icon="Calendar" />
      <ThemeIcon icon="Speedometer" fill="#405FF2" />
      <ThemeIcon icon="Gearbox" fill="#405FF2" />
      <ThemeIcon icon="GasolinePump" />
      <ThemeIcon icon="Label" />
      <ThemeIcon icon="Share" fill="black" />
      <ThemeIcon icon="Burger" />
      <ThemeIcon icon="Minus" />
      <h3>Base</h3>
      <h4>Button</h4>
      <Stack gap={2} direction="row">
        <Button>Default Button</Button>
        <Button color="blueDark" sx={{ borderRadius: 12.5 }}>
          Sign Up
        </Button>
        <Button
          variant="outlined"
          sx={(theme) => ({
            "&": {
              borderRadius: 7.5,
              backgroundColor: theme.palette.contrastLight.main,
              borderColor: theme.palette.contrastLight.dark,
              color: theme.palette.contrastLight.contrastText,
            },
            "&:hover": {
              transition: "0.5s",
              backgroundColor: theme.palette.contrastLight.dark,
              borderColor: theme.palette.contrastLight.main,
              color: theme.palette.contrastDark.contrastText,
            },
          })}
        >
          Light Outlined Button
        </Button>
        <Button
          variant="outlined"
          sx={(theme) => ({
            "&": {
              borderRadius: 7.5,
              backgroundColor: theme.palette.contrastDark.main,
              borderColor: theme.palette.contrastDark.dark,
              color: theme.palette.contrastDark.contrastText,
            },
            "&:hover": {
              transition: "0.5s",
              backgroundColor: theme.palette.contrastDark.dark,
              borderColor: theme.palette.contrastDark.main,
              color: theme.palette.contrastLight.contrastText,
            },
          })}
        >
          Dark Outlined Button
        </Button>
      </Stack>
    </ThemeProvider>
  );
};
