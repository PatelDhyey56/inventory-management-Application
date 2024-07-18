function profileFormValidation(data) {
  let profileError = {};
  const regextext = /^[a-zA-Z\\s]+$/;
  for (let key in data) {
    switch (key) {
      case 'email':
        const regexemail =
          /^(?!.{255})[a-z0-9-_.+]+@[a-z0-9]+[a-z0-9-.]*\.[a-z0-9]{2,9}/;
        if (data[key].trim().length === 0) {
          profileError[key] = '* require';
        } else if (!regexemail.test(data[key]) && data[key] !== '') {
          profileError[key] = '* Please Enter Valid Email';
        } else {
          delete profileError[key];
        }
        break;
    }
  }
  return profileError;
}

function submitbtn() {
  try {
    const data = formData('form');
    const profileValidation = profileFormValidation(data);

    if (Object.keys(profileValidation).length > 0) {
      errorShow(profileValidation);
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
}
