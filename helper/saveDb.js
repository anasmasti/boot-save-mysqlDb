const puppeteer = require("puppeteer");

// Save MySQL Db
const saveDb = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Go to phpmyadmin
  await page.goto(
    "http://localhost/phpmyadmin/index.php?route=/database/export&db=mediexperts"
  );

  setTimeout(async () => {
    try {
      // Save DB
      await page.click("#buttonGo");
    } catch (error) {
      throw new Error(error);
    } finally {
      setTimeout(async () => {
        // Close the window
        await browser.close();
      }, 6000);
    }
  }, 1500);
};

module.exports = { saveDb };
