 const expect  = require("@playwright/test");
 class PlaywrightUtils {
   

    async click(selector) {
        await global.page.locator(selector).click();  
    }

    async fill(selector,text) {
        await global.page.locator(selector).fill(text);
    }
    async clickAndFill(selector) {
        await global.page.click(selector).fill(selector);
    }

    async waitForSelector(selector) {
        await global.page.waitForSelector(selector);
    }

    async waitForSelector(selector, options) {
        await global.page.waitForSelector(selector, options);
    }

    async waitForTimeout(timeout) {
        await global.page.waitForTimeout(timeout);
    }
    async takeScreenshot(path) {
        await global.page.screenshot({ path});
    }

    async takeScreenshotscreenshot(path, options) {
        await global.page.screenshot({ path, ...options });
    }
    async navigate(url) {
        await global.page.goto(url);
        console.log("url navigated")
    }

    async navigate(url, options) {
        await global.page.goto(url, options);
    }

    async getText(selector) {
        return await global.page.textContent(selector);
    }

    async getAttribute(selector, attributeName) {
        return await global.page.getAttribute(selector, attributeName);
    }

    async waitForNavigation(options) {
        await global.page.waitForNavigation(options);
    }

    async waitForLoadState(state, options) {
        await global.page.waitForLoadState(state, options);
    }

    async closePage() {
        await global.page.close();
    }

    async closeBrowser() {
        await global.page.context().close();
    }
    async expectText(selector, expectedText) {
        const actualText = await global.page.textContent(selector);
        // expect(actualText).toBe(expectedText);
    }

    async expectAttribute(selector, attributeName, expectedValue) {
        const actualValue = await global.page.getAttribute(selector, attributeName);
        expect(actualValue).toBe(expectedValue);
    }
    async  visiblity(selector){
        await page.locator(selector).isVisible();
    }

    async expectHidden(selector) {
        const element = await global.page.$(selector);
        expect(element).not.toBeNull();
        const isVisible = await element.isVisible();
        expect(isVisible).toBe(false);
    }

    async expectUrl(expectedUrl) {
        const actualUrl = global.page.url();
        expect(actualUrl).toBe(expectedUrl);
    }

    async expectTitle(expectedTitle) {
        const actualTitle = await global.page.title();
        expect(actualTitle).toBe(expectedTitle);
    }

    async expectElement(selector) {
        const element = await global.page.$(selector);
        expect(element).not.toBeNull();
    }
    async waitForPageLoad(){
        await page.waitForLoadState('networkidle');
    }
}
module.exports={PlaywrightUtils}


