import { createRootRoute, Outlet } from "@tanstack/react-router";
import Footer from "../pages/Runs/components/Footer";
import Header from "../pages/Runs/components/Header";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ),
});
