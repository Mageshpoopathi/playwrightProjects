const { Before, AfterAll, After, Status,setDefaultTimeout } = require('@cucumber/cucumber');
const page = require('@playwright/test');
 
Before(async () => {
    console.log('Launch Browser');
    let browser = await page.chromium.launch({ headless: false, args: ['--window-size=1920,1040'] });
    global.browser = browser;
    const context = await browser.newContext();
    global.page = await context.newPage();
 
})
 
// After(async function (scenario) {
//  if (scenario.result.status === Status.FAILED) {
//  const buffer = await global.page.screenshot({ path: `reports/${scenario.pickle.name}.png`, fullPage: true })
//  this.attach(buffer, 'image/png');
//  }
//  console.log('Close Browser');
//  await global.browser.close(); 
// })
 
 
// AfterAll(async()=>{ 
// await global.browser.close();
// })
