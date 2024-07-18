function manageProductFormValidation(req, res, next) {
  const productDetails = req.body;
  let productFormError = {};
  const numberregex = /^[0-9]+$/;
  for (let key in productDetails) {
    switch (key) {
      case 'storageIn':
        if (productDetails[key] == '') {
          productFormError[key] = '* require';
        } else {
          delete productFormError[key];
        }
        break;
      case 'productname':
        if (productDetails[key].length === 0) {
          productFormError[key] = '* require';
        } else if (
          productDetails[key].length < 3 &&
          productDetails[key] !== ''
        ) {
          productFormError[key] = '* Please Enter Productname';
        } else if (
          productDetails[key].length > 15 &&
          productDetails[key] !== ''
        ) {
          productFormError[key] = '* Please Enter Productname';
        } else {
          delete productFormError[key];
        }
        break;

      case 'skuid':
        if (productDetails[key].length === 0) {
          productFormError[key] = '* require';
        } else if (
          !numberregex.test(productDetails[key]) &&
          productDetails[key] !== ''
        ) {
          productFormError[key] = '* Please Enter valid SKUid';
        } else if (productDetails[key].length !== 6) {
          productFormError[key] = '* Please Enter 6 digit SKUid';
        } else {
          delete productFormError[key];
        }
        break;

      case 'cost':
        if (productDetails[key].length === 0) {
          productFormError[key] = '* require';
        } else if (
          !numberregex.test(productDetails[key]) &&
          productDetails[key] !== ''
        ) {
          productFormError[key] = '* Please Enter Valid cost';
        } else {
          delete productFormError[key];
        }
        break;

      case 'category':
        if (productDetails[key] == 'select here') {
          productFormError[key] = '* require';
        } else {
          delete productFormError[key];
        }
        break;

      case 'description':
        if (productDetails[key].length === 0) {
          productFormError[key] = '* require';
        } else if (
          productDetails[key] !== '' &&
          productDetails[key].length < 3
        ) {
          productFormError[key] = '* Please Enter Valid description';
        } else if (
          productDetails[key] !== '' &&
          productDetails[key].length > 35
        ) {
          productFormError[key] = '* Please Enter Valid description';
        } else {
          delete productFormError[key];
        }
        break;
    }
  }
  if (Object.keys(productFormError).length === 0) {
    next();
  } else {
    return res.status(400).json(productFormError);
  }
}
module.exports = manageProductFormValidation;
