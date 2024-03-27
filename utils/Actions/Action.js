class Action{
    async toVisible(webElement) {
        global.page.locator(webElement).toBeVisible();
    }
}