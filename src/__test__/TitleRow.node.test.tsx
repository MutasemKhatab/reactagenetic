import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { TitleRow } from "../pages/Runs/components/TitleRow";

test("TitleRow refresh button is rendered", () => {
  const screen = render(<TitleRow />);
  const refreshButton = screen.getByRole("button", { name: /refresh/i });
  expect(document.body.contains(refreshButton)).toBe(true);
});
