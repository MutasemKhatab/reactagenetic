import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { TitleRow } from "../pages/Runs/components/TitleRow";

test("TitleRow refresh button is rendered", async () => {
  const screen = render(<TitleRow />);
  const refreshButton = await screen.getByRole("button", { name: /refresh/i });
  await expect.element(refreshButton).toBeInTheDocument();
});
