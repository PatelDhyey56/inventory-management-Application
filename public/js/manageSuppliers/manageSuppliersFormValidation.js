function manageSupplierFormValidation(supplierFormData) {

  let supplierFormErrorObject = {};

  for (let key in supplierFormData) {
    switch (key) {
      case "firstname":
        if (supplierFormData[key].length === 0) {
          supplierFormErrorObject[key] = "* require";
        } else if (supplierFormData[key].trim().length === 0 && supplierFormData[key] !== "") {
          supplierFormErrorObject[key] = "* Please Enter Firstname";
        } else {
          delete supplierFormErrorObject[key];
        }
        break;

      case "lastname":

        if (supplierFormData[key].length === 0) {
          supplierFormErrorObject[key] = "* require";
        } else if (supplierFormData[key].trim().length === 0 && supplierFormData[key] !== "") {
          supplierFormErrorObject[key] = "* Please Enter Lastname";
        } else {
          delete supplierFormErrorObject[key];
        }
        break;

      case "email":

        const regexemail = /^(?!.{255})[a-z0-9-_.+]+@[a-z0-9]+[a-z0-9-.]*\.[a-z0-9]{2,9}/;

        if (supplierFormData[key].length === 0) {
          supplierFormErrorObject[key] = "* require";
        } else if (!regexemail.test(supplierFormData[key]) && supplierFormData[key] !== "") {
          supplierFormErrorObject[key] = "* Please Enter Valid Email";
        } else {
          delete supplierFormErrorObject[key];
        }
        break;

      case "phonenumber":

        if (supplierFormData[key].length === 0) {
          supplierFormErrorObject[key] = "* require";
        } else if ((isNaN(supplierFormData[key]) || supplierFormData[key].length !== 10 || supplierFormData[key].trim().length === 0) && supplierFormData[key] !== "") {
          supplierFormErrorObject[key] = "* Please Enter Valid Phonenumber";
        } else {
          delete supplierFormErrorObject[key];
        }
        break;


      case "companyname":

        if (supplierFormData[key].length === 0) {
          supplierFormErrorObject[key] = "* require";
        } else if (supplierFormData[key].trim().length === 0 && supplierFormData[key] !== "") {
          supplierFormErrorObject[key] = "* Please Enter Companyname";
        } else {
          delete supplierFormErrorObject[key];
        }
        break;

      case "gst":
        const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

        if (supplierFormData[key].length === 0) {
          supplierFormErrorObject[key] = "* require";
        } else if (supplierFormData[key].trim().length === 0 && supplierFormData[key] !== "") {
          supplierFormErrorObject[key] = "* Please Enter GST Number";
        } else if (!gstRegex.test(supplierFormData[key]) && supplierFormData[key] !== "") {
          supplierFormErrorObject[key] = "* Please Enter Valid GST Number";
        } else {
          delete supplierFormErrorObject[key];
        }
        break;

      case "address":

        if (supplierFormData[key].trim().length === 0 && supplierFormData[key] !== "") {
          supplierFormErrorObject[key] = "* Please Enter Address Not Only Space";
        } else {
          delete supplierFormErrorObject[key];
        }
        break;

      case "zipcode":

        if (supplierFormData[key].length === 0) {
          supplierFormErrorObject[key] = "* require";
        } else if (isNaN(supplierFormData[key]) || supplierFormData[key].trim().length === 0) {
          supplierFormErrorObject[key] = "* Please Enter Valid Zipcode";
        } else {
          delete supplierFormErrorObject[key];
        }
        break;

      case "state":

        const stateSelectCombo = document.getElementById("stateSelectCombo");

        if (stateSelectCombo.selectedIndex < 1) {
          supplierFormErrorObject[key] = "* require";
        } else {
          delete supplierFormErrorObject[key];
        }
        break;

      case "city":

        const citySelectCombo = document.getElementById("citySelectCombo");

        if (citySelectCombo.selectedIndex < 1) {
          supplierFormErrorObject[key] = "* require";
        } else {
          delete supplierFormErrorObject[key];
        }
        break;
    }
  }
  return supplierFormErrorObject;
}
