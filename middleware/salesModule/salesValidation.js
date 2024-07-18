const logger = require('../../logs.js');

function orderValidation(req, res, next) {
  const insertFormData = req.body;

  let insertFormErrorObject = {};

  for (let key in insertFormData) {
    switch (key) {
      case 'customer':
        if (insertFormData[key] === '') {
          insertFormErrorObject[key] = '* require';
        } else {
          delete insertFormErrorObject[key];
        }
        break;

      case 'amount':
        if (insertFormData[key].length === 0) {
          insertFormErrorObject[key] = '* require';
        } else if (
          insertFormData[key].trim().length === 0 &&
          insertFormData[key] !== ''
        ) {
          insertFormErrorObject[key] = '* Please Enter Amount';
        } else if (isNaN(parseInt(insertFormData[key]))) {
          insertFormErrorObject[key] = '* Please Enter Valid Amount';
        } else {
          delete insertFormErrorObject[key];
        }
        break;

      case 'shippingAddress':
        if (insertFormData[key].length === 0) {
          insertFormErrorObject[key] = '* require';
        } else if (
          insertFormData[key].trim().length === 0 &&
          insertFormData[key] !== ''
        ) {
          insertFormErrorObject[key] = '* Please Enter Lastname';
        } else {
          delete insertFormErrorObject[key];
        }
        break;

      case 'date':
        if (insertFormData[key].length === 0) {
          insertFormErrorObject[key] = '* require';
        } else if (
          insertFormData[key].trim().length === 0 ||
          isNaN(new Date(insertFormData[key]))
        ) {
          insertFormErrorObject[key] = '* Please Enter Valid Date';
        } else if (new Date() < new Date(insertFormData[key])) {
          insertFormErrorObject[key] = '* Please Enter Valid Date';
        } else {
          delete insertFormErrorObject[key];
        }
        break;
    }
  }

  if (Object.keys(insertFormErrorObject).length === 0) {
    next();
  } else {
    return res.status(400).json(insertFormErrorObject);
  }
}
function productValidation(req, res, next) {
  const productFormData = req.body;
  let productFormErrorObject = {};

  for (let key in productFormData) {
    switch (key) {
      case 'category':
        if (productFormData[key] === '') {
          productFormErrorObject[key] = '* require';
        } else {
          delete productFormErrorObject[key];
        }
        break;

      case 'product':
        if (productFormData[key] == '') {
          productFormErrorObject[key] = '* require';
        } else {
          delete productFormErrorObject[key];
        }
        break;

      case 'orderType':
        if (productFormData[key] == '') {
          productFormErrorObject[key] = '* require';
        } else {
          delete productFormErrorObject[key];
        }
        break;

      case 'quantity':
        if (productFormData[key].length === 0) {
          productFormErrorObject[key] = '* require';
        } else if (
          productFormData[key].trim().length === 0 &&
          productFormData[key] !== ''
        ) {
          productFormErrorObject[key] = '* Please Enter Quantity';
        } else if (isNaN(parseInt(productFormData[key]))) {
          productFormErrorObject[key] = '* Please Enter Valid Quantity';
        } else {
          delete productFormErrorObject[key];
        }
        break;
    }
  }
  if (Object.keys(productFormErrorObject).length === 0) {
    next();
  } else {
    return res.status(400).json(productFormErrorObject);
  }
}

module.exports = { orderValidation, productValidation };