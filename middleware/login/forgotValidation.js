function forgotFormValidation(req, res, next) {
  const forgotDetails = req.body;
  let forgotError = {};
  for (let key in forgotDetails) {
    switch (key) {
      case 'email':
        const regexemail = /^(?!.{255})[a-z0-9-_.+]+@[a-z0-9]+[a-z0-9-.]*\.[a-z0-9]{2,9}/;

        if (forgotDetails[key].length === 0) {
          forgotError[key] = '* require';
        } else if (
          !regexemail.test(forgotDetails[key]) &&
          forgotDetails[key] !== ''
        ) {
          forgotError[key] = '* Please Enter Valid Email';
        } else {
          delete forgotError[key];
        }
        break;
      case 'confirm_pass':
        if (forgotDetails[key].length === 0) {
          forgotError[key] = '* require';
        } else if (forgotDetails[key].length < 8 && forgotDetails[key] !== '') {
          forgotError[key] = 'Password must be at least 8 characters';
        } else if (
          forgotDetails[key].length > 15 &&
          forgotDetails[key] !== ''
        ) {
          forgotError[key] = 'Password length must not exceed 15 characters';
        } else if (forgotDetails[key].search(/[A-Z]/) < 0) {
          forgotError[key] =
            'Password must contain at least one uppercase letter';
        } else if (forgotDetails[key].search(/[a-z]/) < 0) {
          forgotError[key] =
            'Password must contain at least one lowercase letter';
        } else if (forgotDetails[key].search(/[0-9]/) < 0) {
          forgotError[key] = 'Password must contain at least one number';
        } else if (forgotDetails[key].search(/[@$!%*?&]/) < 0) {
          forgotError[key] =
            'Password must contain at least one special character';
        } else {
          delete forgotError[key];
        }
        break;
    }
  }
  if (Object.keys(forgotError).length === 0) {
    next();
  } else {
    return res.status(400).json(forgotError);
  }
}
module.exports = forgotFormValidation;
