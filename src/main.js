'use strict';
import { runBrowser } from './browser.js';
import { getSign, scraper } from './pageScrapers.js';

const main = async () => {
    const browserInstance = await runBrowser();
    const page = await scraper(browserInstance, 'https://dev.amidstyle.com');
    console.log(await getSign(page));
    await browserInstance.close();
};

void main();
