import { expect, test } from "vitest";
import switchTheme from "../pages/Runs/logic/switchTheme";

test("switchTheme toggles dark mode", () => {
  const setTheme = (value: boolean) => {
    document.documentElement.classList.toggle("dark", value);
  };

  // Initial state should not have dark class
  expect(document.documentElement.classList.contains("dark")).toBe(false);

  // Simulate a click event
  const event = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
  });

  // Call switchTheme to enable dark mode
  switchTheme(event, () => setTheme(true));
  expect(document.documentElement.classList.contains("dark")).toBe(true);

  // Call switchTheme again to disable dark mode
  switchTheme(event, () => setTheme(false));
  expect(document.documentElement.classList.contains("dark")).toBe(false);
});

test("switchTheme handles event correctly", () => {
  const setTheme = (value: boolean) => {
    document.documentElement.classList.toggle("dark", value);
  };

  // Create a mock event
  const event = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
  });

  // Call switchTheme with the mock event
  switchTheme(event, () => setTheme);

  // Ensure the event was prevented from default action
  expect(event.defaultPrevented).toBe(true);
});
