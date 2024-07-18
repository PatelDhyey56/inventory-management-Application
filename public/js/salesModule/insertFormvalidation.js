function insertSalesFormValidation(insertFormData) {
  let insertFormErrorObject = {};

  for (let key in insertFormData) {
    switch (key) {
      case 'customer':
        const customerCombo = document.getElementById('customer');

        if (customerCombo.selectedIndex < 0) {
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
        } else if (isNaN(
          parseInt(insertFormData[key]))) {
          insertFormErrorObject[key] = '* Please Enter Valid Amount';
        }
        else {
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
          insertFormErrorObject[key] = '* Please Enter valid Address';
        } else {
          delete insertFormErrorObject[key];
        }
        break;

      case 'date':
        const dateregex = '^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)$';
        if (insertFormData[key].length === 0) {
          insertFormErrorObject[key] = '* require';
        } else if (
          insertFormData[key].trim().length === 0 ||
          isNaN(new Date(insertFormData[key]))
        ) {
          insertFormErrorObject[key] = '* Please Enter Valid Date';
        } else if (new Date() <= new Date(insertFormData[key]) || !RegExp(dateregex).test(insertFormData[key])) {
          insertFormErrorObject[key] = '* Please Enter Valid Date';
        } else {
          delete insertFormErrorObject[key];
        }
        break;
    }
  }
  return insertFormErrorObject;
}
