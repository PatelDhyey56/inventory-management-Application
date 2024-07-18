function loginFormValidation(req, res, next) {
  const loginDetails = req.body;
  let loginError = {};
  for (let key in loginDetails) {
    switch (key) {
      case 'email':
        const regexemail = /^(?!.{255})[a-z0-9-_.+]+@[a-z0-9]+[a-z0-9-.]*\.[a-z0-9]{2,9}/;

        if (loginDetails[key].length === 0) {
          loginError[key] = '* require';
        } else if (
          !regexemail.test(loginDetails[key]) &&
          loginDetails[key] !== ''
        ) {
          loginError[key] = '* Please Enter Valid Email';
        } else {
          delete loginError[key];
        }
        break;
      case 'password':
        if (loginDetails[key].length === 0) {
          loginError[key] = '* require';
        } else if (loginDetails[key].length < 8 && loginDetails[key] !== '') {
          loginError[key] = 'Password must be at least 8 characters';
        } else if (loginDetails[key].length > 15 && loginDetails[key] !== '') {
          loginError[key] = 'Password length must not exceed 15 characters';
        } else if (loginDetails[key].search(/[A-Z]/) < 0) {
          loginError[key] =
            'Password must contain at least one uppercase letter';
        } else if (loginDetails[key].search(/[a-z]/) < 0) {
          loginError[key] =
            'Password must contain at least one lowercase letter';
        } else if (loginDetails[key].search(/[0-9]/) < 0) {
          loginError[key] = 'Password must contain at least one number';
        } else if (loginDetails[key].search(/[@$!%*?&]/) < 0) {
          loginError[key] =
            'Password must contain at least one special character';
        } else {
          delete loginError[key];
        }
        break;
    }
  }
  if (Object.keys(loginError).length === 0) {
    next();
  } else {
    return res.status(400).json(loginError);
  }
}
module.exports = loginFormValidation;
