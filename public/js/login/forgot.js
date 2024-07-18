function checkPass() {
  const pass1 = document.getElementById('new_pass').value;
  const pass2 = document.getElementById('confirm_pass').value;
  if (pass1 == pass2) {
    return true;
  } else {
    errorMsg = 'password not matched';
    document.getElementById('error_forgot').innerHTML = errorMsg;
    return false;
  }
}

const passField = document.getElementById('confirm_pass');
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
  if (checkPass()) {
    try {
      const data = formData('form');
      const forgotValidation = forgotFormValidation(data);

      if (Object.keys(forgotValidation).length > 0) {
        //----client side validation error
        errorShow(forgotValidation);
      } else {
        const response = await fetch(location.pathname, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(data),
        });

       
        if (response.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Your Password has been saved !",
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {
            window.location = `/`;
          });
          document.body.classList.remove('swal2-height-auto')
        }
        if (response.status == 401) {
          //unauthorized
          error = 'password not matched';
          document.getElementById('error_forgot').innerHTML = error;
          alert('passwoed not match');
        }
        if (response.status === 400) {
          const errorObject = await response.json();

          errorShow(errorObject);
        }
        if (response.status == 404) {
          //unauthorized
          error = 'User not valid';
          document.getElementById('error_forgot').innerHTML = error;
        }
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    return;
  }
}
