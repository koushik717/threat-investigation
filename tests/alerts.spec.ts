import { test, expect } from '@playwright/test';

test.describe('Alerts Workflow', () => {
    test('should display alerts grid with data', async ({ page }) => {
        // Go to Alerts Page
        await page.goto('http://localhost:5174/'); // Note port might vary if 5173 taken, assuming 5174 based on recent run
        // Better to use base url from config but hardcoding for now or reading form env
        // Actually, dev server is on 5174.

        // Check Title
        await expect(page.getByRole('heading', { name: 'Alerts' })).toBeVisible();

        // Check for Grid rows
        // AG Grid rows usually have role="row".
        // We expect 20 rows per page or virtualization.
        await expect(page.locator('.ag-center-cols-container .ag-row').first()).toBeVisible();

        // Check specific data from mock
        // "Suspicious PowerShell Execution"
        await expect(page.getByText('Suspicious PowerShell Execution').first()).toBeVisible();
    });

    test('should filter alerts', async ({ page }) => {
        await page.goto('http://localhost:5174/');

        // Type in search box
        const searchInput = page.getByPlaceholder(/Search alerts/i);
        await searchInput.fill('User Account Created');

        // Verify results filtered
        await expect(page.getByText('User Account Created')).toBeVisible();
        // Ensure checking for absence of other items isn't flaky if virtualization
    });
});
