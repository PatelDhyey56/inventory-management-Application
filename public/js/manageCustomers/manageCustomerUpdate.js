//---------update customer details
async function openUpdateCustomerForm(customer) {

  const customerId = customer.id;
  document.getElementById('myForm').style.display = 'block';
  document.getElementById('submitButton').innerHTML = 'Update';
  document
    .getElementById('submitButton')
    .setAttribute('onclick', `updateCustomerDetails(${customerId})`);
  showLoader();

  //--reset
  resetCustomerForm();

  const response = await fetch(`/api/getCustomers/?customerId=${customerId}`, {
    method: 'GET',
  });
  const customerDetails = await response.json();
  hideLoader();
  try {
    if (!response.ok) {
      throw new Error('Error In Get Customer Details');
    }

    if (response.status === 200) {
      for (let key in customerDetails[0]) {
        let element = document.querySelector(`[name="${key}"]`);
        switch (key) {
          case 'firstname':
            element.value = customerDetails[0][key];
            break;
          case 'lastname':
            element.value = customerDetails[0][key];
            break;
          case 'email':
            element.value = customerDetails[0][key];
            break;
          case 'phonenumber':
            element.value = customerDetails[0][key];
            break;
          case 'address':
            element.value = customerDetails[0][key];
            break;
          case 'zipcode':
            element.value = customerDetails[0][key];
            break;
        }
      }
      getAllState('stateSelectCombo', customerDetails[0].state);
      const stateSelectCombo = { id: 'stateSelectCombo' };
      getCity(
        stateSelectCombo,
        customerDetails[0].state,
        customerDetails[0].city
      );
    }
  } catch (error) {
    if (response.status === 404) {
      messagePopUp(customerDetails.message);
    }

    if (response.status === 500) {
      messagePopUp(customerDetails.message);
    }
  }
}

async function updateCustomerDetails(customerId) {
  const customerFormData = formData('customerForm'); //parameter as formname
  customerFormData.customerId = customerId;

  const customerDetailsValidation =
    manageCustomerFormValidation(customerFormData);
  // const customerDetailsValidation = true;

  if (Object.keys(customerDetailsValidation).length > 0) {
    //----client side validation error
    errorShow(customerDetailsValidation);
  } else {
    //----backend
    showLoader();
    const response = await fetch('/api/updateCustomer', {
      method: 'POST',
      body: JSON.stringify(customerFormData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    hideLoader();
    try {
      if (!response.ok) {
        throw new Error('Error In Backend Validation Manage Customer');
      }

      if (response.status === 200) {
        const responseMessage = await response.json();
        const customerForm = document.getElementById('myForm');
        customerForm.style.display = 'none';
        getCustomers();
        messagePopUp(responseMessage.message);

        //--reset
        resetCustomerForm();
      }
    } catch (error) {
      console.log(error);

      if (response.status === 400) {
        const errorObject = await response.json();
        // console.log(errorObject);
        errorShow(errorObject);
      }

      if (response.status === 404) {
        const responseMessage = await response.json();
        messagePopUp(responseMessage.message);
      }

      if (response.status === 500) {
        const responseMessage = await response.json();
        messagePopUp(responseMessage.message);
      }
    }
  }
}
