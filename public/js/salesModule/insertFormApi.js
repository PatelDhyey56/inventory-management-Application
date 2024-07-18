async function insertOrder() {
  let orderid = document.getElementById('orderid');
  let flag = false;
  let isInsert = false;
  let id;
  let storage = '';
  if (document.getElementById('storageCombo') != null) {
    storage = document.getElementById('storageCombo').value;
  }
  const insertFormData = formData('insertSalesData');
  insertFormData['orderType'] = '8';
  insertFormData['storage'] = storage;
  const insertFormErrorValidation = insertSalesFormValidation(insertFormData);

  if (Object.keys(insertFormErrorValidation).length > 0) {
    //----client side validation error
    errorShow(insertFormErrorValidation);
  } else {
    if (orderid.value != '') {
      id = orderid.value;
      url = `/updateSalesOrder`;
    } else {
      url = `/insertSalesOrder`;
      isInsert = true;
    }
    let option = {
      method: 'POST',
      body: new URLSearchParams(insertFormData),
    };
    let [result, response] = await commonFetch(url, option);

    try {
      if (!response.ok) {
        throw new Error('Error In Backend Validation Manage Customer');
      }

      if (response.status === 200) {
        flag = true;
        if (isInsert == true) {
          id = result.rows.insertId;
        }
      }
      if (flag == true) {
        document.getElementById('productOrderId').value = id;
        displayProductForm();
        await getCombos('productCategory');
        await getallProducts();
        fetching();
      }
    } catch (error) {
      console.log(error);

      if (response.status === 400) {
        errorShow(result);
      }
    }
  }
}

async function getcustomer() {
  const [result, response] = await commonFetch('/getCustomers');
  generateCombo(result.rows, 'customer');
}
getcustomer();

async function generateCombo(result, id) {
  let str;
  result.forEach((data) => {
    if (id != 'productCategory') {
      str += `<option value="${data.opt_id}">${data.value}</option>`;
    } else if (data.is_delete == 0) {
      str += `<option value="${data.opt_id}">${data.value}</option>`;
    }
  });
  document.getElementById(`${id}`).innerHTML = str;
}

async function getCombos(name) {
  let [result, response] = await commonFetch(`/api/combos/${name}`);
  generateCombo(result, name);
}
getCombos('paymentStatus');
