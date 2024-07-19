import { Box, styled } from "@mui/material";

type MainProps = { open?: boolean };

export const LayoutBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
}));
export const Main = styled("main")<MainProps>(({ theme, open }) => ({
  flex: "1 0 auto",
  background: "pink",

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
