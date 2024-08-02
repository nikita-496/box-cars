import type { FC } from "react";

import { LayoutBox, Main } from "@/layouts/Layout.styles";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Logo } from "@/components/base/brand";
import { SidebarMenu } from "@/components/designSystem/navigation/SidebarMenu";
import { Footer } from "@/components/navigation/Footer";
import { Header } from "@/components/navigation/Header";

export const Layout: FC = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const handleDrawerClose = () => setOpenSideMenu(false);
  setOpenSideMenu;
  return (
    <LayoutBox>
      <Header
        logo={<Logo />}
        navLinks={[
          { label: "Inventory", url: "/inventories" },
          { label: "Blog", url: "/blogs" },
          { label: "Shop", url: "/shop" },
          { label: "About", url: "/about" },
          { label: "Contact", url: "/contact" },
          { label: "Team", url: "/team" },
          { label: "Terms", url: "/terms" },
          { label: "Dealer", url: "/dealer" },
        ]}
        openSideMenu={openSideMenu}
        setOpenSideMenu={setOpenSideMenu}
      />
      <SidebarMenu
        navLinks={[
          { label: "Inventory", url: "/inventories" },
          { label: "Blog", url: "/blogs" },
          { label: "Shop", url: "/shop" },
          { label: "About", url: "/about" },
          { label: "Contact", url: "/contact" },
          { label: "Team", url: "/team" },
          { label: "Terms", url: "/terms" },
          { label: "Dealer", url: "/dealer" },
        ]}
        open={openSideMenu}
        handleDrawerClose={handleDrawerClose}
      />
      <Main open={openSideMenu}>
        <Outlet />
      </Main>
      <Footer />
    </LayoutBox>
  );
};
