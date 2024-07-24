import { expect, test } from "@playwright/test";
import { FRONTEND_URL } from "../config";

test("Should return the error when the title is empty", async ({ page }) => {
    await page.goto(`${FRONTEND_URL}/create-income`);

    // await page.getByTestId("txtBoxTitle").fill("");
    await page.getByTestId("btnSubmit").click();
    await expect(page.getByTestId("lblErrorTitle")).toBeVisible();
});
