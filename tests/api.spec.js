import { test, expect } from '@playwright/test';

test('GET request test', async ({ page }) => {
    // Make a GET request using Playwright's request object
    const response = await page.request.get('https://reqres.in/api/users?page=2');
    // Log the response body
    console.log(await response.json());
    // Assert response status code
    expect(response.status()).toBe(200);
});

test('POST request test', async ({ page }) => {
    // Make a POST request using Playwright's request object
    const response = await page.request.post('https://reqres.in/api/login', {
        // Request body
        json: { 'name': 'magesh', 'mail': 'magesh432@gmail.com' }
    });
    // Log the response body
    console.log(await response.json());
    // Assert response status code
    expect(response.status()).toBe(200);
});
