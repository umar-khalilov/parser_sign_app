'use strict';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

export const runBrowser = async () => {
    try {
        console.log('Opening the browser......');
        puppeteer.use(StealthPlugin());

        const browser = await puppeteer.launch({
            headless: 'new',
            ignoreHTTPSErrors: true,
        });
        return browser;
    } catch (err) {
        console.error('Could not create a browser instance => ', err);
    }
};
