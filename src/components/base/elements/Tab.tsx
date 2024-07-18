import { Tab as MUITab, TabProps as MUITabProps, styled } from "@mui/material";

type TabProps = MUITabProps;

export const Tab = styled(({ disableRipple = true, ...rest }: TabProps) => (
  <MUITab disableRipple={disableRipple} {...rest} />
))(({ theme }) => ({
  textTransform: "capitalize",
  fontSize: "1rem",
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.common.black,
  padding: 0,
  minWidth: 0,
  "&.Mui-selected": {
    color: theme.palette.common.black,
  },
}));
