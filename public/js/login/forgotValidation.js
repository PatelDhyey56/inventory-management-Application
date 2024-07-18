function forgotFormValidation(data) {
  let forgotError = {};
  for (let key in data) {
    switch (key) {
      case 'email':
        const regexemail = /^(?!.{255})[a-z0-9-_.+]+@[a-z0-9]+[a-z0-9-.]*\.[a-z0-9]{2,9}/;

        if (data[key].length === 0) {
          forgotError[key] = '* require';
        } else if (!regexemail.test(data[key]) && data[key] !== '') {
          forgotError[key] = '* Please Enter Valid Email';
        } else {
          delete forgotError[key];
        }
        break;

      case 'confirm_pass':
        if (data[key].length === 0) {
          forgotError[key] = '* require';
        } else if (data[key].length < 8 && data[key] !== '') {
          forgotError[key] = 'Password must be at least 8 characters';
        } else if (data[key].length > 15 && data[key] !== '') {
          forgotError[key] = 'Password length must not exceed 15 characters';
        } else if (data[key].search(/[A-Z]/) < 0) {
          forgotError[key] =
            'Password must contain at least one uppercase letter';
        } else if (data[key].search(/[a-z]/) < 0) {
          forgotError[key] =
            'Password must contain at least one lowercase letter';
        } else if (data[key].search(/[0-9]/) < 0) {
          forgotError[key] = 'Password must contain at least one number';
        } else if (data[key].search(/[@$!%*?&]/) < 0) {
          forgotError[key] =
            'Password must contain at least one special character';
        } else {
          delete forgotError[key];
        }
        break;
    }
  }

  return forgotError;
}
document.getElementById('new_pass').addEventListener('keyup', (e) => {
  if (e.getModifierState('CapsLock')) {
    document.getElementById('text').innerHTML = 'Caps lock is ON';
  } else {
    document.getElementById('text').innerHTML = '';
  }

});
