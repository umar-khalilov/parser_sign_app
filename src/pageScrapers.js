'use strict';

const scraper = async (browser, url = '') => {
    console.log(`Navigating to ${url}...`);
    const page = (await browser.pages())[0];
    await page.goto(url, {
        waitUntil: 'networkidle2',
    });
    return page;
};

const getSign = async page => {
    const divSelector = await page.waitForSelector('div > div');
    const data = await divSelector.evaluate(el => el.textContent);
    const { sign } = JSON.parse(data);
    return { sign };
};

export { scraper, getSign };
