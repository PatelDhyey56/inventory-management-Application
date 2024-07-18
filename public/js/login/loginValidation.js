function loginFormValidation(data) {
  let loginError = {};
  for (let key in data) {
    switch (key) {
      case 'email':
        const regexemail =
          /^(?!.{255})[a-z0-9-_.+]+@[a-z0-9]+[a-z0-9-.]*\.[a-z0-9]{2,9}/;

        if (data[key].length === 0) {
          loginError[key] = '* require';
        } else if (!regexemail.test(data[key]) && data[key] !== '') {
          loginError[key] = '* Please Enter Valid Email';
        } else {
          delete loginError[key];
        }
        break;
      case 'password':
        if (data[key].length === 0) {
          loginError[key] = '* require';
        } else if (data[key].length < 8 && data[key] !== '') {
          loginError[key] = 'Password must be at least 8 characters';
        } else if (data[key].length > 15 && data[key] !== '') {
          loginError[key] = 'Password length must not exceed 15 characters';
        } else if (data[key].search(/[A-Z]/) < 0) {
          loginError[key] =
            'Password must contain at least one uppercase letter';
        } else if (data[key].search(/[a-z]/) < 0) {
          loginError[key] =
            'Password must contain at least one lowercase letter';
        } else if (data[key].search(/[0-9]/) < 0) {
          loginError[key] = 'Password must contain at least one number';
        } else if (data[key].search(/[@$!%*?&]/) < 0) {
          loginError[key] =
            'Password must contain at least one special character';
        } else {
          delete loginError[key];
        }
        break;
    }
  }
  return loginError;
}
// document.getElementById('password').addEventListener('keyup', (e) => {
//   if (e.getModifierState('CapsLock')) {
//     document.getElementById('text').innerHTML = 'Caps lock is ON';
//   } else {
//     document.getElementById('text').innerHTML = '';
//   }
// });
