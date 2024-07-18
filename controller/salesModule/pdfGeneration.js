const logger = require('../../logs');
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const ejs = require("ejs");


async function generateSalesPdf(orderDetails, reportType) {
  const templatePath = path.join(__dirname, '../../views/salesModule/invoice.ejs');
  const template = fs.readFileSync(templatePath, "utf8");
  const data = orderDetails.data;
  const products = orderDetails.products;
  const html = ejs.render(template, { data, products, user: orderDetails.user, type: orderDetails.type });
  let browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'load' });

  const fileName = `${Date.now()}-${reportType}.pdf`;
  const pdfPath = path.join(__dirname, `../../public/uploads/pdfFiles/${fileName}`);  //path of pdf
  await page.emulateMediaType("print");
  await page.pdf({
    path: pdfPath,
    margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
    printBackground: true,
    formate: 'A4'
  });
  await browser.close();

  if (fs.existsSync(pdfPath)) {
    // const filename = pdfPath.split("/");
    return fileName;
  } else {
    return "";
  }
}


module.exports = { generateSalesPdf };
