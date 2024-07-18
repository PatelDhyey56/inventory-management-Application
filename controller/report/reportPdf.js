const logger = require('../../logs.js');
const fs = require("fs");
const puppeteer = require("puppeteer");
const path = require('path');
const ejs = require("ejs");

const { productGenerateReport, productOutOfStockGenerateReport, storageDetails } = require('../../service/report/reportPdf.js');

async function reportPdfPage(req, res) {
  return res.render('reports/reportPdf', {
    data: req.user
  });
}

// async function generatePdf(req, res) {
//   const data = req.body;
//   // logger.info(data);
//   const templatePath = path.join(__dirname, '../../views/reports/pdfTemplate/productPdfTemplate.ejs');
//   // logger.info(templatePath);
//   const template = fs.readFileSync(templatePath, "utf8");
//   // console.log(template);

//   // console.log(data.productDetails);

//   // {
//   //   productData: data.productDetails,
//   //   storeDetails: []
//   // }

//   const html = ejs.render(template, { data: data });
//   // console.log(html);
//   let browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.setContent(html, { waitUntil: 'load' });

//   // To reflect CSS used for screens instead of print
//   // await page.emulateMediaType('screen');
//   let pdfPath = path.join(__dirname, `../../public/uploads/pdfFile/${Date.now()}-ProductDetails.pdf`);  //path of pdf

//   await page.pdf({
//     path: pdfPath,
//     margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
//     printBackground: true,
//     formate: 'A4'
//   });
//   await browser.close();

//   const pdfFile = fs.readFileSync(pdfPath);

//   res.setHeader('Content-Type', 'application/pdf');
//   res.setHeader('Content-Disposition', `attachment; filename=ProductDetails.pdf`);

//   res.send(pdfFile);
//   // if (fs.existsSync(pdfPath)) {
//   //   const filename = pdfPath.split("/");
//   //   logger.info(req.origin);
//   //   return res.status(200).json({ pdfName: `${filename[filename.length - 1]}` });
//   // } else {
//   //   return res.status(500).json({ message: "Something Went Wrong...." });
//   // }
// }

async function generatePdf(data, reportType) {
  const templatePath = path.join(__dirname, '../../views/reports/pdfTemplate/productPdfTemplate.ejs');
  const template = fs.readFileSync(templatePath, "utf8");
  const html = ejs.render(template, { data: data });
  let browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'load' });

  // To reflect CSS used for screens instead of print
  // await page.emulateMediaType('screen');
  const fileName = `${Date.now()}-${reportType}.pdf`;
  const pdfPath = path.join(__dirname, `../../public/uploads/pdfFiles/${fileName}`);  //path of pdf

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

async function productReportGenerate(req, res) {
  try {
    const roleId = req.user.roleId;
    let storageId;
    if (roleId === 4) {
      storageId = req.body.selectStorageId;
    } else {
      storageId = req.user.storageId;
    }
    const productDetailsArray = await productGenerateReport(req.body, storageId);
    const storageDetailsArray = await storageDetails(storageId);

    if (productDetailsArray.length > 0 && storageDetailsArray.length > 0) {
      const productDetailsObject = {};
      productDetailsObject.productDetails = productDetailsArray;
      productDetailsObject.storeDetails = storageDetailsArray;
      productDetailsObject.categoryName = req.body.categoryName;
      productDetailsObject.reportType = req.body.reportType;

      const pdfFile = await generatePdf(productDetailsObject, "ProductDetails");

      if (!pdfFile) {
        return res.status(500).json({ message: "PDF Not Generate.." });
      } else {
        return res.status(200).json({ pdfName: pdfFile });
      }
    } else {
      return res.status(404).json({ message: "Products Not Found" });
    }
  } catch (error) {
    logger.logError("Product Generate Report: " + error);
    return res.status(500).json({ message: "Something Went Wrong.." });
  }
}

async function outOfStockProducts(req, res) {
  try {
    let storageId;
    const roleId = req.user.roleId;
    if (roleId === 4) {
      storageId = req.body.selectStorageId;
    } else {
      storageId = req.user.storageId;
    }
    const productOutOfStockArray = await productOutOfStockGenerateReport(req.body, storageId);
    const storageDetailsArray = await storageDetails(storageId);

    if (productOutOfStockArray.length > 0 && storageDetailsArray.length > 0) {
      const productDetailsObject = {};
      productDetailsObject.productDetails = productOutOfStockArray;
      productDetailsObject.storeDetails = storageDetailsArray;
      productDetailsObject.categoryName = req.body.categoryName;
      productDetailsObject.reportType = req.body.reportType;
      productDetailsObject.maximumStockQunatity = req.body.maximumQunatity;
      const pdfFile = await generatePdf(productDetailsObject, "OutOfStockProducts");

      if (!pdfFile) {
        return res.status(500).json({ message: "PDF Not Generate.." });
      } else {
        return res.status(200).json({ pdfName: pdfFile });
      }
    } else {
      return res.status(404).json({ message: "Products Not Found" });
    }
  } catch (error) {
    logger.logError("Product Out Of Stock Report:" + error);
    return res.status(500).json({ message: "Something Went Wrong.." });
  }
}

module.exports = { reportPdfPage, productReportGenerate, outOfStockProducts, generatePdf };