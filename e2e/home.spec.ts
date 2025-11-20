import { test, expect } from "@playwright/test";

test("homepage renders hero and contact link", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: /smart, stable platforms/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /browse projects/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Book a discovery call/i })).toBeVisible();
});

