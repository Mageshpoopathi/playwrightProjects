const { Before, AfterAll, After, Status } = require('@cucumber/cucumber');
const page = require('@playwright/test');
const { chromium, firefox, webkit } = require('@playwright/test');
 
// Before(async () => {
//     console.log('Launch Browser');
//     let browser = await page.chromium.launch({ headless: false, args: ['--window-size=1920,1040'] });
//     global.browser = browser;
//     const context = await browser.newContext();
//     global.page = await context.newPage();
 
// })
 
Before(async () => {
    
    let browser;
    switch ("chromium") {
        case 'chromium':
            console.log('Launching Chromium Browser');
            browser = await chromium.launch({
                headless: false,
                timeout:40000
            });
            break;
        case 'msedge':
            console.log('Launching MSEdge Browser');
            browser = await chromium.launch({
                headless: false,
                executablePath: process.env.EXECUTABLE_PATH,
            });
            break;
        case 'firefox':
            console.log('Launching FireFox Browser');
            browser = await firefox.launch({
                headless: false
            });
            break;
        case 'webkit':
            console.log('Launching Webkit Browser');
            browser = await webkit.launch({
                headless: false,
            });
            break;
        default:
            throw new Error('Unsupported browser specified in the .env file');
    }
 
    global.browser = browser;
    const context = await browser.newContext();
    global.page = await context.newPage();
});
 
After(async function (scenario) {
   // global.page.waitForTimeout(10000);
    if (scenario.result.status === Status.FAILED) {
        const buffer = await global.page.screenshot({ path: `reports/${scenario.pickle.name}.png`, fullPage: true })
        this.attach(buffer, 'image/png');
    }
    console.log('Close Browser');
    await global.browser.close();
    
})