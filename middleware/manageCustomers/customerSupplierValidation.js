const logger = require('../../logs.js');

/**common middleware function for manage custoemr and supplier form data input validate */

function manageCustomerSupplierValidation(req, res, next) {
  const formDetails = req.body;

  let formErrorObject = {};

  for (let key in formDetails) {
    switch (key) {
      case "firstname":
        if (!formDetails[key]) {
          formErrorObject[key] = "* require";
        } else if (formDetails[key].trim().length === 0 && formDetails[key] !== "") {
          formErrorObject[key] = "* Please Enter Firstname";
        } else {
          delete formErrorObject[key];
        }
        break;

      case "lastname":

        if (!formDetails[key]) {
          formErrorObject[key] = "* require";
        } else if (formDetails[key].trim().length === 0 && formDetails[key] !== "") {
          formErrorObject[key] = "* Please Enter Lastname";
        } else {
          delete formErrorObject[key];
        }
        break;

      case "email":

        // const regexemail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        const regexemail = /^(?!.{255})[a-z0-9-_.+]+@[a-z0-9]+[a-z0-9-.]*\.[a-z0-9]{2,9}/;

        if (!formDetails[key]) {
          formErrorObject[key] = "* require";
        } else if (!regexemail.test(formDetails[key]) && formDetails[key] !== "") {
          formErrorObject[key] = "* Please Enter Valid Email";
        } else {
          delete formErrorObject[key];
        }
        break;

      case "phonenumber":

        if (!formDetails[key]) {
          formErrorObject[key] = "* require";
        } else if (isNaN(formDetails[key]) || formDetails[key].length !== 10 || formDetails[key].trim().length === 0) {
          formErrorObject[key] = "* Please Enter Valid Phonenumber";
        } else {
          delete formErrorObject[key];
        }
        break;

      case "address":

        if (formDetails[key] && formDetails[key].trim().length === 0) {
          formErrorObject[key] = "* Please Enter Address Not Only Space";
        } else {
          delete formErrorObject[key];
        }
        break;

      case "zipcode":
        if (!formDetails[key]) {
          formErrorObject[key] = "* require";
        } else if (isNaN(formDetails[key]) || formDetails[key].trim().length === 0) {
          formErrorObject[key] = "* Please Enter Valid Zipcode";
        } else {
          delete formErrorObject[key];
        }
        break;

      case "state":
        if (formDetails[key] === "Select State") {
          formErrorObject[key] = "* require";
        } else {
          delete formErrorObject[key];
        }
        break;

      case "city":
        if (formDetails[key] === "Select City") {
          formErrorObject[key] = "* require";
        } else {
          delete formErrorObject[key];
        }
        break;

      case "companyname":

        if (formDetails[key].length === 0) {
          formErrorObject[key] = "* require";
        } else if (formDetails[key].trim().length === 0 && formDetails[key] !== "") {
          formErrorObject[key] = "* Please Enter Companyname";
        } else {
          delete formErrorObject[key];
        }
        break;

      case "gst":
        const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
        if (formDetails[key].length === 0) {
          formErrorObject[key] = "* require";
        } else if (formDetails[key].trim().length === 0 && formDetails[key] !== "") {
          formErrorObject[key] = "* Please Enter GST Number";
        } else if (!gstRegex.test(formDetails[key]) && formDetails[key] !== "") {
          formErrorObject[key] = "* Please Enter Valid GST Number";
        } else {
          delete formErrorObject[key];
        }
        break;

    }
  }

  if (Object.keys(formErrorObject).length === 0) {
    next();
  } else {
    return res.status(400).json(formErrorObject);
  }
}

module.exports = manageCustomerSupplierValidation;