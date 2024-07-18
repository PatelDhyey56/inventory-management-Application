const passField = document.getElementById('password');
document.getElementById('eye_slash').addEventListener('click', function () {
  if (passField.type == 'password') {
    passField.type = 'text';
    document.getElementById('eye').style.display = 'block';
    document.getElementById('eye_slash').style.display = 'none';
  }
});
document.getElementById('eye').addEventListener('click', function () {
  if ((passField.type = 'text')) {
    passField.type = 'password';
    document.getElementById('eye').style.display = 'none';
    document.getElementById('eye_slash').style.display = 'block';
  }
});

async function submitbtn() {
  try {
    const data = formData('form');
    const loginValidation = loginFormValidation(data);
    if (Object.keys(loginValidation).length > 0) {
      //----client side validation error
      errorShow(loginValidation);
    } else {
      const response = await fetch('/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status == 200) {
        Swal.fire({
          icon: 'success',
          title: 'Welcome Inventory Management...',
          showConfirmButton: false,
          timer: 1000,
        }).then((result) => {
          window.location = `/dashboard`;
        });
        document.body.classList.remove('swal2-height-auto');
      }
      if (response.status == 401) {
        error = 'invalid email or password';
        document.getElementById('main_err').innerHTML = error;
      }
      if (response.status == 404) {
        error = 'user not exist';
        document.getElementById('main_err').innerHTML = error;
      }
      if (response.status == 402) {
        error = 'Sorry!! You are no longer exist';
        document.getElementById('forgot').style.display = 'none';
        document.getElementById('main_err').innerHTML = error;
      }
      if (response.status == 403) {
        error = 'Password was expired Kindly go through forgot Password';
        document.getElementById('expire').innerHTML = error;
      }
      if (response.status === 400) {
        const errorObject = await response.json();

        errorShow(errorObject);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

async function checkLoginFetch() {
  try {
    const response = await fetch('/checkLogin');
    const result = await response.json();
    if (result) {
      window.location.href = '/dashboard';
    }
  } catch (error) {
    console.log(error);
  }
}
checkLoginFetch();
