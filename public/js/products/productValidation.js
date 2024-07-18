function manageProductFormValidation(data) {
  let productFormError = {};

  const numberregex = /^[0-9]+$/;

  for (let key in data) {
    switch (key) {
      case 'storageIn':
        const storageCombo = document.getElementById('storageComboIn');
        if (storageCombo.selectedIndex < 0) {
          productFormError[key] = '* require';
        } else {
          delete productFormError[key];
        }
        break;
      case 'productname':
        if (data[key].length === 0) {
          productFormError[key] = '* require';
        } else if (data[key].length < 3 && data[key] !== '') {
          productFormError[key] = '* Please Enter Productname';
        } else if (data[key].length > 15 && data[key] !== '') {
          productFormError[key] = '* Please Enter Productname';
        } else {
          delete productFormError[key];
        }
        break;

      case 'skuid':
        if (data[key].length === 0) {
          productFormError[key] = '* require';
        } else if (!numberregex.test(data[key]) && data[key] !== '') {
          productFormError[key] = '* Please Enter valid SKUid';
        } else if (data[key].length !== 6) {
          productFormError[key] = '* Please Enter 6 digit SKUid';
        } else {
          delete productFormError[key];
        }
        break;

      case 'cost':
      
        if (data[key].length === 0) {
          productFormError[key] = '* require';
        } else if (!numberregex.test(data[key]) && data[key] !== '') {
          productFormError[key] = '* Please Enter Valid price';
        } else if (data[key].length < 1 && data[key] !== '') {
          productFormError[key] = '* Please Enter Valid price';
        } else if (data[key].length >= 7 && data[key] !== '') {
          productFormError[key] = '* Please Enter Valid price';
        } else {
          delete productFormError[key];
        }
        break;

      case 'category':
        const stateSelectCombo = document.getElementById('category');
        if (stateSelectCombo.selectedIndex < 1) {
          productFormError[key] = '* require';
        } else {
          delete productFormError[key];
        }
        break;
      case 'description':
        if (data[key].length === 0) {
          productFormError[key] = '* require';
        } else if (data[key] !== '' && data[key].length < 3) {
          productFormError[key] = '* Please Enter Valid description';
        } else if (data[key] !== '' && data[key].length > 35) {
          productFormError[key] = '* Please Enter Valid description';
        } else {
          delete productFormError[key];
        }
        break;
    }
  }

  return productFormError;
}
