function manageManagerFormValidation(req, res, next) {
  const managerDetails = req.body;
  let managerFormError = {};
  for (let key in managerDetails) {
    switch (key) {
      case 'firstname':
        if (managerDetails[key].length === 0) {
          managerFormError[key] = '* require';
        } else if (
          managerDetails[key].trim().length === 0 &&
          managerDetails[key] !== ''
        ) {
          managerFormError[key] = '* Please Enter Firstname';
        } else if (
          managerDetails[key].trim().length < 3 &&
          managerDetails[key] !== ''
        ) {
          managerFormError[key] = '* Please valid firstname';
        } else if (
          managerDetails[key].trim().length > 45 &&
          managerDetails[key] !== ''
        ) {
          managerFormError[key] = '* Please valid firstname';
        } else {
          delete managerFormError[key];
        }
        break;

      case 'lastname':
        if (managerDetails[key].length === 0) {
          managerFormError[key] = '* require';
        } else if (
          managerDetails[key].trim().length === 0 &&
          managerDetails[key] !== ''
        ) {
          managerFormError[key] = '* Please Enter Lastname';
        } else if (
          managerDetails[key].trim().length < 3 &&
          managerDetails[key] !== ''
        ) {
          managerFormError[key] = '* Please valid Lastname';
        } else if (
          managerDetails[key].trim().length > 15 &&
          managerDetails[key] !== ''
        ) {
          managerFormError[key] = '* Please valid Lastname';
        } else {
          delete managerFormError[key];
        }
        break;

      case 'email':
        const regexemail =
        /^(?!.{255})[a-z0-9-_.+]+@[a-z0-9]+[a-z0-9-.]*\.[a-z0-9]{2,9}/;
        if (managerDetails[key].length === 0) {
          managerFormError[key] = '* require';
        } else if (
          !regexemail.test(managerDetails[key]) &&
          managerDetails[key] !== ''
        ) {
          managerFormError[key] = '* Please Enter Valid Email';
        } else {
          delete managerFormError[key];
        }
        break;

      case 'state':
        if (managerDetails[key] == 'select here') {
          managerFormError[key] = '*require';
        } else {
          delete managerFormError[key];
        }
        break;
      case 'place':
        if (managerDetails[key] == 'select here') {
          managerFormError[key] = '*require';
        } else {
          delete managerFormError[key];
        }
        break;
    }
  }
  if (Object.keys(managerFormError).length === 0) {
    next();
  } else {
    return res.status(400).json(managerFormError);
  }
}

module.exports = manageManagerFormValidation;
