import { theme } from "@/core/config/themes.config";
import { Typography } from "@mui/material";
import { Box, Stack, ThemeProvider } from "@mui/system";
import { FC } from "react";

import { ThemeButton } from "@/components/designSystem/button/ThemeButton";
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
            <Typography variant="body2">white</Typography>
            <Box sx={{ bgcolor: "common.white", width: 40, height: 20 }} />
          </Stack>
          <Stack alignItems="center">
            <Typography variant="body2">black</Typography>
            <Box sx={{ bgcolor: "common.black", width: 40, height: 20 }} />
          </Stack>
        </Stack>
      </Stack>
      <h3>Buttons</h3>
      <Stack gap={2} alignItems="center" mb={2}>
        <ThemeButton endIcon={<ThemeIcon icon="ArrowOutward" />}>
          Contained Light
        </ThemeButton>
      </Stack>
      <Stack gap={2} alignItems="center" mb={2}>
        <ThemeButton color="blueDark">Contained Primary Dark</ThemeButton>
      </Stack>
      <Stack gap={2} alignItems="center" mb={2}>
        <ThemeButton color="blueLight" sx={{ borderRadius: 12.5 }}>
          Contained Primary Light Rounded
        </ThemeButton>
        <Stack gap={2} alignItems="center" mb={2}>
          <ThemeButton color="blueDark">Contained Primary Icon</ThemeButton>
        </Stack>
      </Stack>
      <Stack gap={2} alignItems="center" mb={2}>
        <ThemeButton variant="outlined" color="neutralLight">
          Oultined Neutral Light
        </ThemeButton>
        <ThemeButton
          variant="outlined"
          color="neutralLight"
          sx={{
            borderRadius: 12.5,
            padding: "0.82em 0em",
            "&:hover": {
              borderColor: "common.black",
              bgcolor: "common.black",
            },
            "& .MuiSvgIcon-root": {
              stroke: "black",
            },
            "& .MuiSvgIcon-root path": {
              fill: "black",
            },
            "&:hover .MuiSvgIcon-root": {
              stroke: "white",
            },
            "&:hover .MuiSvgIcon-root g path": {
              fill: "white",
            },
          }}
        >
          <ThemeIcon icon="ArrowForwardIos" />
        </ThemeButton>
      </Stack>
      <Stack
        gap={2}
        alignItems="center"
        sx={{ bgcolor: "common.black" }}
        mb={2}
      >
        <ThemeButton variant="outlined" color="neutralDark">
          Oultined Neutral Dark
        </ThemeButton>
        <ThemeButton
          variant="outlined"
          color="neutralLight"
          sx={{
            borderRadius: 12.5,
            padding: "0.82em 0em",
            borderColor: theme.palette.grey[400],
            "&:hover": {
              borderColor: theme.palette.grey[400],
              bgcolor: "grey.50",
            },
            "& .MuiSvgIcon-root": {
              stroke: "white",
            },
            "& .MuiSvgIcon-root path": {
              fill: "white",
            },
            "&:hover .MuiSvgIcon-root": {
              stroke: "black",
            },
            "&:hover .MuiSvgIcon-root g path": {
              fill: "black",
            },
          }}
        >
          <ThemeIcon icon="ArrowForwardIos" />
        </ThemeButton>
      </Stack>
      <Stack gap={2} alignItems="center">
        <ThemeButton
          variant="outlined"
          color="neutralLight"
          sx={{
            borderRadius: 12.5,
            padding: "0.82em 0em",
            borderColor: theme.palette.grey[400],
            "&.MuiButtonBase-root:hover": {
              borderColor: theme.palette.grey[400],
              bgcolor: "grey.50",
            },
          }}
        >
          <ThemeIcon icon="ArrowBackIos" />
        </ThemeButton>
        <ThemeButton
          variant="outlined"
          color="neutralLight"
          sx={{
            borderRadius: 12.5,
            padding: "0.82em 0em",
            borderColor: theme.palette.grey[400],
            "&.MuiButtonBase-root:hover": {
              borderColor: theme.palette.grey[400],
              bgcolor: "grey.50",
            },
          }}
        >
          <ThemeIcon icon="ArrowForwardIos" />
        </ThemeButton>
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
    </ThemeProvider>
  );
};
