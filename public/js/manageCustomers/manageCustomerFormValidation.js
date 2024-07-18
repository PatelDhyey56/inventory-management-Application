function manageCustomerFormValidation(customerFormData) {

  let customerFormErrorObject = {};

  for (let key in customerFormData) {
    switch (key) {
      case "firstname":
        if (customerFormData[key].length === 0) {
          customerFormErrorObject[key] = "* require";
        } else if (customerFormData[key].trim().length === 0 && customerFormData[key] !== "") {
          customerFormErrorObject[key] = "* Please Enter Firstname";
        } else {
          delete customerFormErrorObject[key];
        }
        break;

      case "lastname":
        if (customerFormData[key].length === 0) {
          customerFormErrorObject[key] = "* require";
        } else if (customerFormData[key].trim().length === 0 && customerFormData[key] !== "") {
          customerFormErrorObject[key] = "* Please Enter Lastname";
        } else {
          delete customerFormErrorObject[key];
        }
        break;

      case "email":
        const regexemail = /^(?!.{255})[a-z0-9-_.+]+@[a-z0-9]+[a-z0-9-.]*\.[a-z0-9]{2,9}/;
        // const regexemail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        if (customerFormData[key].length === 0) {
          customerFormErrorObject[key] = "* require";
        } else if (!regexemail.test(customerFormData[key]) && customerFormData[key] !== "") {
          customerFormErrorObject[key] = "* Please Enter Valid Email";
        } else {
          delete customerFormErrorObject[key];
        }
        break;

      case "phonenumber":
        if (customerFormData[key].length === 0) {
          customerFormErrorObject[key] = "* require";
        } else if ((isNaN(customerFormData[key]) || customerFormData[key].length !== 10 || customerFormData[key].trim().length === 0) && customerFormData[key] !== "") {
          customerFormErrorObject[key] = "* Please Enter Valid Phonenumber";
        } else {
          delete customerFormErrorObject[key];
        }
        break;

      case "address":
        if (customerFormData[key].trim().length === 0 && customerFormData[key] !== "") {
          customerFormErrorObject[key] = "* Please Enter Address Not Only Space";
        } else {
          delete customerFormErrorObject[key];
        }
        break;

      case "zipcode":
        if (customerFormData[key].length === 0) {
          customerFormErrorObject[key] = "* require";
        } else if (isNaN(customerFormData[key]) || customerFormData[key].trim().length === 0) {
          customerFormErrorObject[key] = "* Please Enter Valid Zipcode";
        } else {
          delete customerFormErrorObject[key];
        }
        break;

      case "state":
        const stateSelectCombo = document.getElementById("stateSelectCombo");

        if (stateSelectCombo.selectedIndex < 1) {
          customerFormErrorObject[key] = "* require";
        } else {
          delete customerFormErrorObject[key];
        }
        break;

      case "city":
        const citySelectCombo = document.getElementById("citySelectCombo");

        if (citySelectCombo.selectedIndex < 1) {
          customerFormErrorObject[key] = "* require";
        } else {
          delete customerFormErrorObject[key];
        }
        break;
    }
  }
  return customerFormErrorObject;
}
