function manageManagerFormValidation(data) {
  let managerFormError = {};

  const regextext = /^[a-zA-Z\\s]+$/;
  for (let key in data) {
    switch (key) {
      case 'firstname':
        if (data[key].length === 0) {
          managerFormError[key] = '* require';
        } else if (!regextext.test(data[key]) && data[key] !== '') {
          managerFormError[key] = '* Please valid Firstname';
        } else if (data[key].trim().length === 0 && data[key] !== '') {
          managerFormError[key] = '* Please Enter Firstname';
        } else if (data[key].trim().length < 3 && data[key] !== '') {
          managerFormError[key] = '* Please valid firstname';
        } else if (data[key].trim().length > 45 && data[key] !== '') {
          managerFormError[key] = '* Please valid firstname';
        } else {
          delete managerFormError[key];
        }
        break;

      case 'lastname':
        if (data[key].trim().length === 0) {
          managerFormError[key] = '* require';
        } else if (!regextext.test(data[key]) && data[key] !== '') {
          managerFormError[key] = '* Please valid Lastname';
        } else if (data[key].trim().length === 0 && data[key] !== '') {
          managerFormError[key] = '* Please Enter Lastname';
        } else if (data[key].trim().length < 3 && data[key] !== '') {
          managerFormError[key] = '* Please valid Lastname';
        } else if (data[key].trim().length > 45 && data[key] !== '') {
          managerFormError[key] = '* Please valid Lastname';
        } else {
          delete managerFormError[key];
        }
        break;

      case 'email':
        const regexemail =
          /^(?!.{255})[a-z0-9-_.+]+@[a-z0-9]+[a-z0-9-.]*\.[a-z0-9]{2,9}/;

        if (data[key].trim().length === 0) {
          managerFormError[key] = '* require';
        } else if (!regexemail.test(data[key]) && data[key] !== '') {
          managerFormError[key] = '* Please Enter Valid Email';
        } else {
          delete managerFormError[key];
        }
        break;

      case 'state':
        const stateSelectCombo = document.getElementById('state');
        if (stateSelectCombo.selectedIndex < 1) {
          managerFormError[key] = '* require';
        } else {
          delete managerFormError[key];
        }
        break;
      case 'place':
        const storeCombo = document.getElementById('place');
        if (storeCombo.selectedIndex < 1) {
          managerFormError[key] = '* require';
        } else {
          delete managerFormError[key];
        }
        break;
    }
  }

  return managerFormError;
}
