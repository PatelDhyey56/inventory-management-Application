//---------update supplier details
async function openUpdateSupplierForm(supplier) {
  const supplierId = supplier.id;
  document.getElementById('myForm').style.display = 'block';
  document.getElementById('submitButton').innerHTML = 'Update';
  document
    .getElementById('submitButton')
    .setAttribute('onclick', `updateSupplierDetails(${supplierId})`);
  showLoader();

  //---old field value clear
  resetSupplierForm();

  const response = await fetch(`/api/getSuppliers/?supplierId=${supplierId}`, {
    method: 'GET',
  });
  hideLoader();
  const supplierDetails = await response.json();
  try {
    if (!response.ok) {
      throw new Error('Error In Get Supplier Details');
    }

    if (response.status === 200) {
      for (let key in supplierDetails[0]) {
        let element = document.querySelector(`[name="${key}"]`);
        switch (key) {
          case 'firstname':
            element.value = supplierDetails[0][key];
            break;
          case 'lastname':
            element.value = supplierDetails[0][key];
            break;
          case 'email':
            element.value = supplierDetails[0][key];
            break;
          case 'phonenumber':
            element.value = supplierDetails[0][key];
            break;
          case 'companyname':
            element.value = supplierDetails[0][key];
            break;
          case 'gst':
            element.value = supplierDetails[0][key];
            break;
          case 'address':
            element.value = supplierDetails[0][key];
            break;
          case 'zipcode':
            element.value = supplierDetails[0][key];
            break;
        }
      }
      getAllState('stateSelectCombo', supplierDetails[0].state);
      const stateSelectCombo = { id: 'stateSelectCombo' };
      getCity(
        stateSelectCombo,
        supplierDetails[0].state,
        supplierDetails[0].city
      );
    }
  } catch (error) {
    if (response.status === 404) {
      messagePopUp(responseMessage.message);
    }

    if (response.status === 500) {
      messagePopUp(supplierDetails.message);
    }
  }
}

async function updateSupplierDetails(supplierId) {
  const supplierFormData = formData('supplierForm'); //parameter as formname
  supplierFormData.supplierId = supplierId;

  const supplierDetailsValidation =
    manageSupplierFormValidation(supplierFormData);

  if (Object.keys(supplierDetailsValidation).length > 0) {
    //----client side validation error
    errorShow(supplierDetailsValidation);
  } else {
    //----backend
    showLoader();
    const response = await fetch('/api/updateSupplier', {
      method: 'POST',
      body: JSON.stringify(supplierFormData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    hideLoader();
    try {
      if (!response.ok) {
        throw new Error('Error In Backend Validation Manage Supplier');
      }

      if (response.status === 200) {
        const responseMessage = await response.json();

        //-----message pop up show
        const supplierForm = document.getElementById('myForm');
        supplierForm.style.display = 'none';
        getSuppliers();
        messagePopUp(responseMessage.message);

        //-----in the supplier form errorspan remove
        const allSpan = document.querySelectorAll('.errorspan');

        allSpan.forEach((element) => {
          element.remove();
        });

        //---reset supplier form
        resetSupplierForm();
      }
    } catch (error) {
      console.log(error);

      if (response.status === 400) {
        const errorObject = await response.json();
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
