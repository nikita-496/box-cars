import { FC } from "react";

import { List } from "@/components/navigation/footer.styles";
import {
  GridItem,
  GridWrapper,
  ListItem,
  NavLink,
  Typography,
} from "@/components/navigation/footerBottom.styles";

export const FooterBottom: FC = () => {
  return (
    <GridWrapper container>
      <GridItem item xxs={12} md={6}>
        <List>
          <ListItem>
            <NavLink to="/terms">
              <Typography>Terms & Conditions</Typography>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/terms">
              <Typography>Privacy Notice</Typography>
            </NavLink>
          </ListItem>
        </List>
      </GridItem>

      <GridItem item xxs={12} md={6}>
        &#169; &nbsp;
        <NavLink to="/copy">2024 Boxcars.com. All rights reserved.</NavLink>
      </GridItem>
    </GridWrapper>
  );
};
