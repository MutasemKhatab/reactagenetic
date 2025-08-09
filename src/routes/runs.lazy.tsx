import { createLazyFileRoute } from "@tanstack/react-router";
import Runs from "../pages/Runs/Runs";

export const Route = createLazyFileRoute("/runs")({
  component: Runs,
});
