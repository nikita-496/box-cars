import { theme } from "@/core/config/themes.config";
import { createUuid } from "@/core/utils/createUuid";
import { Box, FormControl, FormControlLabel, RadioGroup } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/system";
import { FC } from "react";

import { ContentList } from "@/components/ContentList";
import { Logo } from "@/components/base/brand";
import { Button } from "@/components/base/button";
import { Tooltip } from "@/components/base/elements";
import { ZoomInCardMedia } from "@/components/base/elements/ZoomInCardMedia";
import {
  Checkbox,
  Radio,
  Switch,
  Textarea,
  TextField,
} from "@/components/base/form";
import { Icon } from "@/components/base/icon";
import { NavLink } from "@/components/base/navLink";
import { Heading, Typography } from "@/components/base/typography";
import { Accrodion } from "@/components/designSystem/accordion/Accrodion";
import { ControlledAccordion } from "@/components/designSystem/accordion/ControlledAccordion";
import { Card } from "@/components/designSystem/card/Card";
import { Dropdown } from "@/components/designSystem/dropdown/Dropdown";
import {
  Select,
  Checkmarks,
  RangeSlider,
} from "@/components/designSystem/form";
import { Table } from "@/components/designSystem/table/Table";
import { Tabs } from "@/components/designSystem/tabs/Tabs";
import { CardContentSlot } from "@/components/slots/CardContentSlot";
import { CardToolbarSlot } from "@/components/slots/CardToolbarSlot";

const accordionContent = [
  {
    id: createUuid(),
    title: "What methods of payments are supported?",
    body: "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec.",
  },
  {
    id: createUuid(),
    title: "What methods of payments are supported?",
    body: "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec.",
  },
  {
    id: createUuid(),
    title: "What methods of payments are supported?",
    body: "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec.",
  },
];

const tabs = [
  {
    id: createUuid(),
    name: "Item 1",
  },
  {
    id: createUuid(),
    name: "Item 2",
  },
  {
    id: createUuid(),
    name: "Item 3",
  },
];

const TabsContent1 = () => {
  return (
    <Typography variant="body_x0.9375_m">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iusto
      pariatur odit numquam voluptates tenetur quod reprehenderit nisi
      blanditiis similique animi architecto ullam explicabo ducimus est,
      sapiente dolor. Distinctio, inventore. Hic temporibus laboriosam neque
      dolores asperiores eum odio aut! Minima vitae qui sed tempora, quam,
      tempore quasi perspiciatis, omnis totam quisquam fuga blanditiis.
      Deleniti,
    </Typography>
  );
};

const TabsContent2 = () => {
  return (
    <Typography variant="body_x0.9375_m">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iusto
      pariatur odit numquam voluptates tenetur quod reprehenderit nisi
      blanditiis similique animi architecto ullam explicabo ducimus est,
      sapiente dolor. Distinctio, inventore. Hic temporibus laboriosam neque
      dolores asperiores eum odio aut! Minima vitae qui sed tempora, quam,
      tempore quasi perspiciatis, omnis totam quisquam fuga blanditiis.
      Deleniti, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
      iusto pariatur odit numquam voluptates tenetur quod reprehenderit nisi
      blanditiis similique animi architecto ullam explicabo ducimus est,
      sapiente dolor. Distinctio, inventore. Hic temporibus laboriosam neque
      dolores asperiores eum odio aut! Minima vitae qui sed tempora, quam,
      tempore quasi perspiciatis, omnis totam quisquam fuga blanditiis.
      Deleniti,
    </Typography>
  );
};

const TabsContent3 = () => {
  return (
    <Typography variant="body_x0.9375_m">
      Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec
      nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna
      lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum
      nulla vulputate magna. Morbi sed arcu proin quis tortor non risus.
    </Typography>
  );
};

export const DesignSystem: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <h3>Base</h3>
      <h4>Logo</h4>
      <Stack sx={{ bgcolor: "common.black" }}>
        <Logo />
      </Stack>
      <h4>Icons</h4>
      <Icon icon="ArrowBackIos" />
      <Icon icon="ArrowForwardIos" />
      <Icon icon="ArrowOutward" />
      <Icon icon="PersonOutlineRounded" />
      <Icon icon="SpecialFinancingOffers" fill="#EEF1FB" />
      <Icon icon="TrustedCarDealership" fill="#EEF1FB" />
      <Icon icon="TransparentPricing" fill="#EEF1FB" />
      <Icon icon="ExpertCarService" fill="#EEF1FB" />
      <Icon icon="Bookmark" fill="black" />
      <Icon icon="LookingForCar" fill="#CEE1F2" />
      <Icon icon="SellCar" fill="#CEE1F2" />
      <Icon icon="Calendar" />
      <Icon icon="Speedometer" fill="#405FF2" />
      <Icon icon="Gearbox" fill="#405FF2" />
      <Icon icon="GasolinePump" />
      <Icon icon="Label" />
      <Icon icon="Share" fill="black" />
      <Icon icon="Burger" />
      <Icon icon="Minus" />
      <h4>Typography</h4>
      <Stack gap={2} direction="row" alignItems="center">
        <Typography>Typography</Typography>
        <Heading>Typography</Heading>
      </Stack>
      <h4>Nav Link</h4>
      <Stack>
        <NavLink to="/">To Ho</NavLink>
      </Stack>
      <h4>Elements</h4>

      <h5>Tooltips</h5>
      <Stack direction="row" gap={2}>
        <Tooltip title="Top" placement="top" arrow>
          <div>
            <Button>Top</Button>
          </div>
        </Tooltip>
        <Tooltip title="Bottom" placement="bottom" arrow>
          <div>
            <Button>Bottom</Button>
          </div>
        </Tooltip>
        <Tooltip title="Left" placement="left" arrow>
          <div>
            <Button>Left</Button>
          </div>
        </Tooltip>
        <Tooltip title="Right" placement="right" arrow>
          <div>
            <Button>Right</Button>
          </div>
        </Tooltip>
      </Stack>
      <h5>Range Slider</h5>
      <RangeSlider />
      <h5>Table</h5>
      <Box mb={4}>
        <Table />
      </Box>

      <h4>Uncontrolled Accordion</h4>
      <Box mb={4}>
        <ContentList
          contentList={accordionContent}
          renderContent={(accordionItem) => (
            <Accrodion
              key={accordionItem.id}
              title={accordionItem.title}
              body={accordionItem.body}
            />
          )}
        />
      </Box>

      <h4>Controlled Accordion</h4>
      <ControlledAccordion />

      <h4>Tabs</h4>
      <h5>Horizontal Tab #1</h5>
      <Tabs
        tabItems={tabs}
        content={[<TabsContent1 />, <TabsContent2 />, <TabsContent3 />]}
        styleTabs={{
          borderBottom: "none",
          "& .MuiTabs-indicator": {
            display: "none",
          },
        }}
        styleTab={{
          padding: "0 1.88em",
          fontSize: theme.typography["body_x0.875_m"],
          "&.Mui-selected": {
            color: theme.palette.primary.dark,
            border: 1,
            borderRadius: 10,
            borderColor: theme.palette.grey[400],
            boxShadow: "0px 6px 15px 0px rgba(64, 79, 104, 0.05)",
          },
        }}
      />
      <h5>Horizontal Tab #2</h5>
      <Tabs
        tabItems={tabs}
        content={[<TabsContent1 />, <TabsContent2 />, <TabsContent3 />]}
        styleTab={{
          marginRight: "1.88em",
        }}
      />
      <h5>Vertical Tab</h5>
      <Tabs
        tabItems={tabs}
        orientation="vertical"
        variant="scrollable"
        content={[<TabsContent1 />, <TabsContent2 />, <TabsContent3 />]}
        sx={{
          display: "flex",
          alignItems: "start",
        }}
        styleTabs={{
          borderLeft: 1,
          borderColor: "divider",
          flex: 1,
          "& .MuiTabs-indicator": {
            left: 0,
          },
          "& .MuiTabs-indicatorSpan": {
            width: "1.2px",
          },
        }}
        styleContent={{
          padding: "0 0.75em",
          flex: 10,
        }}
        styleTab={{
          padding: "0 0.75em",
        }}
      />
      <h4>Forms</h4>
      <h5>Button</h5>
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
      <h5>Text Field</h5>
      <Stack>
        <TextField />
      </Stack>
      <h5>Text Area</h5>
      <Stack>
        <Textarea />
      </Stack>
      <Stack direction="row" gap={2}>
        <Stack>
          <h5>Radiobbox</h5>
          <RadioGroup defaultValue="item1" name="radio-buttons-group">
            <FormControlLabel label="Item1" value="item1" control={<Radio />} />
            <FormControlLabel label="Item2" value="item2" control={<Radio />} />
            <FormControlLabel label="Item3" value="item3" control={<Radio />} />
            <FormControlLabel label="item" value="item" control={<Radio />} />
          </RadioGroup>
        </Stack>
        <Stack>
          <h5>Checkbox</h5>
          <FormControlLabel label="item" value="item" control={<Checkbox />} />
          <FormControlLabel label="item" value="item" control={<Checkbox />} />
          <FormControlLabel label="item" value="item" control={<Checkbox />} />
          <FormControlLabel label="item" value="item" control={<Checkbox />} />
        </Stack>
        <Stack>
          <h5>Switch</h5>
          <Stack gap={2}>
            <FormControlLabel label="Item1" control={<Switch />} />
            <FormControlLabel label="Item1" control={<Switch />} />
          </Stack>
        </Stack>
      </Stack>
      <h5>Select</h5>
      <Stack gap={4} mb={8}>
        <FormControl fullWidth>
          <Checkmarks />
        </FormControl>
        <FormControl fullWidth>
          <Select menuItems={["Menu item 1", "Menu item 2", "Menu item 3"]} />
        </FormControl>
      </Stack>
      <h3>Design System</h3>
      <h4>Dropdown </h4>
      <Dropdown />
      <h4>Cards</h4>
      <Stack mb={2}>
        <ZoomInCardMedia
          width={300}
          widthOperator="px"
          media="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        />
      </Stack>
      <Stack mb={2}>
        <Card
          cardToolbarSlot={<CardToolbarSlot />}
          cardMediaSlot={
            <ZoomInCardMedia
              media="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              styleRoot={{
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }}
            />
          }
          cardContentSlot={<CardContentSlot />}
        />
      </Stack>
    </ThemeProvider>
  );
};
