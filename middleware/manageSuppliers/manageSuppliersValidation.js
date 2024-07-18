const logger = require('../../logs.js');

function manageSuppliersValidation(req, res, next) {
  const supplierDetails = req.body;

  let supplierFormErrorObject = {};

  for (let key in supplierDetails) {
    switch (key) {
      case "firstname":
        if (!supplierDetails[key]) {
          supplierFormErrorObject[key] = "* require";
        } else if (supplierDetails[key].trim().length === 0 && supplierDetails[key] !== "") {
          supplierFormErrorObject[key] = "* Please Enter Firstname";
        } else {
          delete supplierFormErrorObject[key];
        }
        break;

      case "lastname":

        if (!supplierDetails[key]) {
          supplierFormErrorObject[key] = "* require";
        } else if (supplierDetails[key].trim().length === 0 && supplierDetails[key] !== "") {
          supplierFormErrorObject[key] = "* Please Enter Lastname";
        } else {
          delete supplierFormErrorObject[key];
        }
        break;

      case "email":

        const regexemail = /^(?!.{51})[a-z0-9-_.+]+@[a-z0-9]+[a-z0-9-.]*\.[a-z0-9]{2,9}/;

        if (!supplierDetails[key]) {
          supplierFormErrorObject[key] = "* require";
        } else if (!regexemail.test(supplierDetails[key]) && supplierDetails[key] !== "") {
          supplierFormErrorObject[key] = "* Please Enter Valid Email";
        } else {
          delete supplierFormErrorObject[key];
        }
        break;

      case "phonenumber":

        if (!supplierDetails[key]) {
          supplierFormErrorObject[key] = "* require";
        } else if (isNaN(supplierDetails[key]) || supplierDetails[key].length !== 10 || supplierDetails[key].trim().length === 0) {
          supplierFormErrorObject[key] = "* Please Enter Valid Phonenumber";
        } else {
          delete supplierFormErrorObject[key];
        }
        break;


      case "companyname":

        if (supplierDetails[key].length === 0) {
          supplierFormErrorObject[key] = "* require";
        } else if (supplierDetails[key].trim().length === 0 && supplierDetails[key] !== "") {
          supplierFormErrorObject[key] = "* Please Enter Companyname";
        } else {
          delete supplierFormErrorObject[key];
        }
        break;

      case "gst":
        const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
        if (supplierDetails[key].length === 0) {
          supplierFormErrorObject[key] = "* require";
        } else if (supplierDetails[key].trim().length === 0 && supplierDetails[key] !== "") {
          supplierFormErrorObject[key] = "* Please Enter GST Number";
        } else if (!gstRegex.test(supplierDetails[key]) && supplierDetails[key] !== "") {
          supplierFormErrorObject[key] = "* Please Enter Valid GST Number";
        } else {
          delete supplierFormErrorObject[key];
        }
        break;

      case "address":

        if (supplierDetails[key] && supplierDetails[key].trim().length === 0) {
          supplierFormErrorObject[key] = "* Please Enter Address Not Only Space";
        } else {
          delete supplierFormErrorObject[key];
        }
        break;

      case "zipcode":
        if (!supplierDetails[key]) {
          supplierFormErrorObject[key] = "* require";
        } else if (isNaN(supplierDetails[key]) || supplierDetails[key].trim().length === 0) {
          supplierFormErrorObject[key] = "* Please Enter Valid Zipcode";
        } else {
          delete supplierFormErrorObject[key];
        }
        break;

      case "state":
        if (supplierDetails[key] === "Select State") {
          supplierFormErrorObject[key] = "* require";
        } else {
          delete supplierFormErrorObject[key];
        }
        break;

      case "city":
        if (supplierDetails[key] === "Select City") {
          supplierFormErrorObject[key] = "* require";
        } else {
          delete supplierFormErrorObject[key];
        }
        break;
    }
  }

  if (Object.keys(supplierFormErrorObject).length === 0) {
    next();
  } else {
    return res.status(400).json(supplierFormErrorObject);
  }
}

module.exports = manageSuppliersValidation;