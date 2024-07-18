const logger = require('../../logs.js');
const multer = require("multer");
const path = require('path');
const fs = require('fs');

const imageFilter = (req, file, cb) => {
  const fileTypeAllow = ["image/jpg", "image/png", "image/jpeg", "image/JPEG", "image/PNG", "image/JPG"];
  const fileSize = parseInt(req.headers["content-length"]);
  // if (fileTypeAllow.includes(file.mimetype) && fileSize < 1000000) {
  //   // logger.info("csv file");
  //   cb(null, true);
  // }
  if (!fileTypeAllow.includes(file.mimetype)) {
    logger.info("Please upload only jpg, png, jpeg");
    req.fileError = "Please upload only jpg, png, jpeg";
    return cb(null, false);
  } else if (fileSize > 1000000) {
    logger.info("File size should be less than 1 MB");
    req.fileSizeError = "File size should be less than 1 MB";
    return cb(null, false);
  } else {
    cb(null, true);
  }
}


// const imageSize = (req, file, cb) => {
//   if (req.file.size > 1000000) {
//     logger.info("file size increase");
//     req.fileError = "file size less than 1MB allow";
//     return cb(null, false);
//   } else {
//     cb(null, true);
//   }
// }

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/uploads/'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-profileimage-${file.originalname}`);
  },
});

let userProfileStorage = multer({ storage: storage, fileFilter: imageFilter });

module.exports = { userProfileStorage };