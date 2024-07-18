import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "@/components/navigation/Footer";
import { Header } from "@/components/navigation/Header";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
