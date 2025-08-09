import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import "./App.css";
import { ThemeProvider } from "./components/ui/theme-provider";
import { routeTree } from "./routeTree.gen.ts";

const router = createRouter({
  routeTree,
});

function App() {
  return (
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
