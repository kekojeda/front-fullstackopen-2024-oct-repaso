const { test, expect, beforeEach } = require("@playwright/test");
const { describe } = require("node:test");

describe("Note app", () => {
  beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173");
  });

  test("front page can be opened", async ({ page }) => {
    const locator = await page.getByText("Notes");
    await expect(locator).toBeVisible();
    await expect(page.getByText("HTML is easy")).toBeVisible();
  });

  test("login form can be opened", async ({ page }) => {
   
    await page.getByRole("button", { name: "log in" }).click();

    await page.getByTestId("username").fill("keko");
    await page.getByTestId("password").fill("123456");

    await page.getByRole("button", { name: "login" }).click();

    await expect(page.getByText("kekojeda logged-in")).toBeVisible();
  });
});
