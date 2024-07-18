let url = new URL(window.location.href);

function loadPreview(e) {
  let reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = () => {
    document.getElementById('profileImage').src = reader.result;
  };
}

function profileFormValidation(data) {
  let profileError = {};
  const regextext = /^[a-zA-Z\\s]+$/;
  for (let key in data) {
    switch (key) {
      case 'firstname':
        if (data[key].length === 0) {
          profileError[key] = '* require';
        } else if (!regextext.test(data[key]) && data[key] !== '') {
          profileError[key] = '* Please valid Firstname';
        } else if (data[key].length < 3 && data[key] !== '') {
          profileError[key] = '* Please valid firstname';
        } else if (data[key].length > 45 && data[key] !== '') {
          profileError[key] = '* Please valid firstname';
        } else {
          delete profileError[key];
        }
        break;
      case 'lastname':
        if (data[key].trim().length === 0) {
          profileError[key] = '* require';
        } else if (!regextext.test(data[key]) && data[key] !== '') {
          profileError[key] = '* Please valid Lastname';
        } else if (data[key].trim().length === 0 && data[key] !== '') {
          profileError[key] = '* Please Enter Lastname';
        } else if (data[key].trim().length < 3 && data[key] !== '') {
          profileError[key] = '* Please valid Lastname';
        } else if (data[key].trim().length > 45 && data[key] !== '') {
          profileError[key] = '* Please valid Lastname';
        } else {
          delete profileError[key];
        }
        break;
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
      case 'dob':
        const date = /\d{4}-\d{1,2}-\d{1,2}/;
        if (data[key].trim().length === 0) {
          profileError[key] = '* require';
        } else if (!date.test(data[key]) && data[key] !== '') {
          profileError[key] = '* Please Enter Valid date';
        }
        break;
    }
  }
  return profileError;
}

async function submitbtn() {
  const data = formData('form');
  const profileValidation = profileFormValidation(data);

  if (Object.keys(profileValidation).length > 0) {
    errorShow(profileValidation);

    // for (let key in profileValidation) {
    //   const test = (document.getElementsByName(`${key}`)[0].value = '');
    // }
    return false;
  } else {
    return true;
    //     const profileForm = document.getElementById("form");
    //     const formData = new FormData(profileForm);
    //     console.log(formData);
    //     const response = await fetch("/profileEdit", {
    //       method: 'POST',
    //       body: formData
    //     });
    //     try {
    //       if (!response.ok) {
    //         throw new Error("Can't update profile");
    //       }

    //       if (response.status === 200) {
    //         const responseMessage = response.json();
    //         messagePopUp(responseMessage.message);
    //       }
    //     } catch (error) {
    //       const responseMessage = response.json();
    //       if (response.status === 400) {
    //         messagePopUp(responseMessage.message);
    //       }

    //       if (response.status === 500) {
    //         messagePopUp(responseMessage.message);
    //       }
    //     }
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  }
}
