import {
  Box,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
} from "@mui/material";
import { FC } from "react";

import { Icon } from "@/components/base/icon";
import { NavLink } from "@/components/base/navLink";
import { Typography } from "@/components/base/typography";

const StyledList = styled(List)(() => ({
  display: "flex",
}));

const StyledListItem = styled(ListItem)(() => ({
  flexDirection: "column",
}));

const StyledListItemIcon = styled(ListItemIcon)(() => ({
  justifyContent: "center",
}));

const CardContentBottom = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const CardContentSlot: FC = () => {
  const theme = useTheme();
  const themeColorText =
    theme.palette.mode === "dark"
      ? theme.palette.common.white
      : theme.palette.common.black;
  return (
    <CardContent>
      <Typography gutterBottom variant="body_x1.125_m" component="h6">
        <NavLink
          to="/"
          style={{
            color: themeColorText,
          }}
        >
          Lizard
        </NavLink>
      </Typography>
      <Typography variant="body_x0.875_m">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
      <Divider />
      <StyledList>
        <StyledListItem>
          <StyledListItemIcon>
            <Icon icon="GasolinePump" />
          </StyledListItemIcon>
          <ListItemText primary="miles" />
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <Icon icon="GasolinePump" />
          </StyledListItemIcon>
          <ListItemText primary="miles" />
        </StyledListItem>
        <StyledListItem>
          <StyledListItemIcon>
            <Icon icon="GasolinePump" />
          </StyledListItemIcon>
          <ListItemText primary="miles" />
        </StyledListItem>
      </StyledList>
      <Divider />
      <Box>
        <Typography variant="body_x0.875_m" sx={{ display: "block" }}>
          $789
        </Typography>
        <CardContentBottom>
          <Typography
            variant="body_x1.25"
            fontWeight="bold"
            lineHeight={1.5}
            component="small"
          >
            $399
          </Typography>

          <NavLink to="/" style={{ fontSize: "0.9375rem" }}>
            View Details
            <Icon
              icon="ArrowOutward"
              fontSize="inherit"
              fill={theme.palette.primary.main}
            />
          </NavLink>
        </CardContentBottom>
      </Box>
    </CardContent>
  );
};
