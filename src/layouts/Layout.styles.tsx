import { Box, Container as MUIContainer, styled } from "@mui/material";

type MainProps = { open?: boolean };

export const LayoutBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.black,
}));
export const Main = styled("main")<MainProps>(({ theme, open }) => ({
  flex: "1 0 auto",
  transition: theme.transitions.create("transform", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transform: "translate3d(80vw,0,0)",
    [theme.breakpoints.up("xs")]: {
      transform: "translate3d(440px,0,0)",
    },
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Container = styled(MUIContainer)(({ theme }) => ({
  padding: "7.5em 0.9375em",
  margin: "0 auto",
  height: "100%",

  [theme.breakpoints.up("sm")]: {
    padding: "7.5em 0.9375em",
    maxWidth: "89.375em",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "7.5em 0.9375em",
    maxWidth: "89.375em",
  },
}));
