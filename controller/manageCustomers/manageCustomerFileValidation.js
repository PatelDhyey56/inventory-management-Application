const logger = require('../../logs.js');

function manageCustomerValidation(customerDetails) {

  let customerFormErrorObject = {};

  for (let key in customerDetails) {
    switch (key) {
      case "firstname":
        if (!customerDetails[key]) {
          customerFormErrorObject[key] = "* require";
        } else if (customerDetails[key].trim().length === 0 && customerDetails[key] !== "") {
          customerFormErrorObject[key] = "* Please Enter Firstname";
        } else {
          delete customerFormErrorObject[key];
        }
        break;

      case "lastname":

        if (!customerDetails[key]) {
          customerFormErrorObject[key] = "* require";
        } else if (customerDetails[key].trim().length === 0 && customerDetails[key] !== "") {
          customerFormErrorObject[key] = "* Please Enter Lastname";
        } else {
          delete customerFormErrorObject[key];
        }
        break;

      case "email":

        const regexemail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

        if (!customerDetails[key]) {
          customerFormErrorObject[key] = "* require";
        } else if (!regexemail.test(customerDetails[key]) && customerDetails[key] !== "") {
          customerFormErrorObject[key] = "* Please Enter Valid Email";
        } else {
          delete customerFormErrorObject[key];
        }
        break;

      case "phonenumber":

        if (!customerDetails[key]) {
          customerFormErrorObject[key] = "* require";
        } else if (isNaN(customerDetails[key]) || customerDetails[key].length !== 10 || customerDetails[key].trim().length === 0) {
          customerFormErrorObject[key] = "* Please Enter Valid Phonenumber";
        } else {
          delete customerFormErrorObject[key];
        }
        break;

      case "address":

        if (customerDetails[key] && customerDetails[key].trim().length === 0) {
          customerFormErrorObject[key] = "* Please Enter Address Not Only Space";
        } else {
          delete customerFormErrorObject[key];
        }
        break;

      case "zipcode":
        if (!customerDetails[key]) {
          customerFormErrorObject[key] = "* require";
        } else if (isNaN(customerDetails[key]) || customerDetails[key].trim().length === 0) {
          customerFormErrorObject[key] = "* Please Enter Valid Zipcode";
        } else {
          delete customerFormErrorObject[key];
        }
        break;

      case "state":
        if (customerDetails[key] === "Select State") {
          customerFormErrorObject[key] = "* require";
        } else {
          delete customerFormErrorObject[key];
        }
        break;

      case "city":
        if (customerDetails[key] === "Select City") {
          customerFormErrorObject[key] = "* require";
        } else {
          delete customerFormErrorObject[key];
        }
        break;
    }
  }

  if (Object.keys(customerFormErrorObject).length === 0) {
    return false;
  } else {
    return true;
  }
}

module.exports = manageCustomerValidation;