import { test, expect } from "@playwright/test";

test("renders the Stage Fright non-gameplay PixiJS smoke screen", async ({ page }) => {
  const pageErrors = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/");
  await expect(page).toHaveTitle("Stage Fright — Bootstrap");
  await expect(page.getByRole("main", { name: "Stage Fright rendering preview" })).toBeVisible();

  const canvas = page.locator("#app canvas");
  await expect(canvas).toHaveCount(1);
  await expect(canvas).toBeVisible();
  await expect.poll(async () => canvas.evaluate((el) => el.width > 300 && el.height > 200)).toBe(true);

  // Validate actual rendered pixels, not merely existence of a blank canvas.
  await expect.poll(async () => {
    const screenshot = await canvas.screenshot({ animations: "disabled" });
    return await page.evaluate(async (encoded) => {
      const bytes = Uint8Array.from(atob(encoded), (char) => char.charCodeAt(0));
      const bitmap = await createImageBitmap(new Blob([bytes], { type: "image/png" }));
      const surface = document.createElement("canvas");
      surface.width = bitmap.width;
      surface.height = bitmap.height;
      const ctx = surface.getContext("2d", { willReadFrequently: true });
      if (!ctx) return false;
      ctx.drawImage(bitmap, 0, 0);
      const rgb = (x, y) => Array.from(ctx.getImageData(x, y, 1, 1).data).slice(0, 3);
      const edge = rgb(8, 8);
      const stagePanel = rgb(Math.floor(surface.width / 2) + 200, Math.floor(surface.height / 2));
      return edge.some((component, index) => component !== stagePanel[index]);
    }, screenshot.toString("base64"));
  }, { timeout: 15_000, intervals: [200, 400, 800] }).toBe(true);

  expect(pageErrors, "unexpected JavaScript runtime errors").toEqual([]);
});
