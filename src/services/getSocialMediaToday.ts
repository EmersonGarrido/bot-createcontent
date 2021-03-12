import puppeteer = require('puppeteer');

export default async function(url: string){
  const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url);

    const title = (await page.$eval(".display-heading-04", el => el.textContent)).replace("\n"," ");

    function extractItems() {
      const items = [];

      const extractedElements = document.querySelectorAll('.article-body p').forEach(item => {
        items.push(item.textContent);
      });

      return items.join(' ');
    }
    
    let items = await page.evaluate(extractItems)

    await browser.close();

    const data = {
      title : title,
      text : items,
    }

    return data
}