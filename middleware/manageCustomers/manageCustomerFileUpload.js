const logger = require('../../logs.js');
const multer = require("multer");
const path = require('path');
const fs = require('fs');

const csvFilter = (req, file, cb) => {
  if (file.mimetype.includes("csv")) {
    // logger.info("csv file");
    cb(null, true);
  } else {
    logger.info("not csv file");
    req.fileError = "Please upload only csv file";
    return cb(null, false);
  }
}

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/uploads/csvFiles/"));
  },
  filename: (req, file, cb) => {
    // logger.info(file.originalname);
    cb(null, `${Date.now()}-managecustomer-${file.originalname}`);
  }
});

let uploadCustomerFile = multer({ storage: storage, fileFilter: csvFilter });

module.exports = { uploadCustomerFile };