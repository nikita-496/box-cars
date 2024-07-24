import {
  Grid,
  styled,
  useTheme,
  List as MUIList,
  ListItem as MUIListItem,
  Container,
} from "@mui/material";

import {
  Heading as BaseHeading,
  Typography as BaseTypography,
  TypographyProps,
} from "@/components/base/typography";
import { Tabs, TabsProps } from "@/components/designSystem/tabs/Tabs";

import heroImage from "../../assets/hero-home.jpg";

const TypographyNavLinktyled = styled(BaseTypography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
}));

export const Hero = styled("section")(({ theme }) => ({
  padding: "7.5em 0",
  backgroundImage: `url(${heroImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "unset",
  [theme.breakpoints.up("sm")]: {
    height: "100vh",
  },
  position: "relative",
}));

export const HeroContainer = styled(Container)(({ theme }) => ({
  padding: "0 0.75em",
  margin: "0 auto",
  marginTop: "3em",
  [theme.breakpoints.up("xs")]: {
    maxWidth: "33.75em",
  },
  [theme.breakpoints.up("sm")]: {
    maxWidth: "50em",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "65em",
  },
}));

export const ContentGrid = styled(Grid)(({ theme }) => ({
  display: "block",
  padding: "0 15px",
  [theme.breakpoints.up("sm")]: {
    padding: 0,
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

export const Heading = (props: TypographyProps) => {
  return (
    <BaseHeading
      sx={(theme) => ({
        textAlign: "center",
        fontSize: "2.875rem",
        lineHeight: 1.261,
        marginBottom: "0.6em",
        [theme.breakpoints.up("sm")]: {
          fontSize: theme.typography["h_x4.375"],
          lineHeight: 0.7715,
        },
      })}
      {...props}
    />
  );
};

export const Typography = styled(BaseTypography)(() => ({
  textAlign: "center",
  marginBottom: "1.875em",
}));

export const TopTypography = styled(Typography)(({ theme }) => ({
  marginBottom: "0.75em",
  [theme.breakpoints.up("lg")]: {
    marginBottom: "1.875em",
  },
}));

export const SubTypography = (props: TypographyProps) => {
  return <Typography variant="body_x0.9375_m" {...props} component={"p"} />;
};

export const SearchFormTabs = ({ tabItems, content, ...props }: TabsProps) => {
  const theme = useTheme();
  return (
    <Tabs
      tabItems={tabItems}
      content={content}
      styleTab={{
        color: theme.palette.common.white,
        "&.Mui-selected": {
          color: "inherit",
        },
      }}
      sx={{
        width: "100%",
        marginBottom: "3.75em",
      }}
      styleTabs={{
        "& .MuiTabs-flexContainer": {
          justifyContent: "center",
          gap: "1.63em",
          marginBottom: "1.375em",
        },
        "& .MuiTabs-indicator": {
          height: "2px",
          bottom: "28px",
        },
        "& .MuiTabs-indicatorSpan": {
          backgroundColor: theme.palette.common.white,
        },
      }}
      styleContent={{
        p: 0,
        "& .MuiBox-root form .MuiBox-root": {
          width: "100%",
        },

        "& .MuiBox-root form .MuiBox-root .MuiInputBase-root": {
          [theme.breakpoints.up("md")]: {
            width: "25%",
          },
        },
      }}
      {...props}
    />
  );
};

export const List = styled(MUIList)(() => ({
  display: "flex",
  gap: "0.7em",
  overflowX: "auto",
}));

export const ListItem = styled(MUIListItem)(() => ({
  background: `rgba(255, 255, 255, 0.2)`,
  borderRadius: 50,
  padding: "0 1.875em",
}));

export const TypographyNavLink = (props: TypographyProps) => {
  const theme = useTheme();
  return (
    <TypographyNavLinktyled
      color={theme.palette.common.white}
      variant="body_x0.9375_m"
      lineHeight={2.934}
      {...props}
    />
  );
};
