let url = new URL(window.location.href);

let allCategory = '';
async function initial() {
  allCategory = await getAllCategory();
  document.getElementById('categoryFilter').innerHTML = allCategory;
}
initial();
async function addProduct() {
  document.getElementById('category').innerHTML = allCategory;
  const customerForm = document.getElementById('myForm');
  customerForm.style.display = 'block';
  document.getElementById('submitBtn').innerHTML = 'Submit';
  document.getElementById('main2').style = `filter: blur(2px);`;
  document.getElementById('head').style = `filter: blur(2px);`;
  document.getElementById('grid').style = `filter: blur(2px);`;
}
function closeForm() {
  document.getElementById('myForm').style.display = 'none';
  document.getElementById('main2').style = 'none';
  document.getElementById('grid').style = 'none';
  document.getElementById('head').style = 'none';
}
async function submitbtn() {
  try {
    const data = formData('productForm');
    const productValidation = manageProductFormValidation(data);

    if (Object.keys(productValidation).length > 0) {
      //----client side validation error
      errorShow(productValidation);
    } else {
      url = `/products`;
      showLoader();
      const response = await fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });
      hideLoader();
      if (response.status == 200) {
        alert('product added');
        window.location = `/products`;
      }
      if (response.status === 409) {
        document.getElementById('error').innerHTML = 'product already exist';
        document.getElementById('error').style.color = 'red';
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

async function getProducts() {
  await paggination('/api/products');
}
getProducts();

function dataTableGrid(product, startIndex) {
  const table = document.getElementById('thead');
  const tableBody = document.getElementById('tbody');
  let createTh = document.createElement('th');
  let createTr = document.createElement('tr');
  let span = document.createElement('span');
  table.innerHTML = '';
  tableBody.innerHTML = '';
  createTh.innerHTML = '';

  for (let key of [
    'id',
    'Productname',
    'SKUid',
    'Category',
    'Cost',
    'Description',
    'Stock',
  ]) {
    if (key === 'id') {
      key = 'No.';
    }
    span = document.createElement('span');
    span.setAttribute('class', 'd-inline-flex flex-row align-items-center');
    createTh = document.createElement('th');
    createTh.setAttribute('class', 'align-middle');
    span.textContent = key;
    createTr.appendChild(createTh);
    createTh.appendChild(span);
    table.appendChild(createTr);
    let spanMain = document.createElement('span');
    spanMain.setAttribute(
      'class',
      'd-inline-flex flex-column align-items-center ms-2'
    );
    let span1 = document.createElement('span');
    span1.textContent = '^';
    span1.setAttribute('class', 'span1');
    span1.setAttribute('onclick', `filterUp(event,'ASC')`);
    span1.setAttribute('id', `${key}`);

    let span2 = document.createElement('span');
    span2.textContent = '^';
    span2.setAttribute('class', 'span2');
    span2.setAttribute('onclick', `filterUp(event,'DESC')`);
    span2.setAttribute('id', `${key}`);
    spanMain.appendChild(span1);
    spanMain.appendChild(span2);
    span.appendChild(spanMain);
    if (key == 'No.') {
      spanMain.remove();
    }
  }
  createTh = document.createElement('th');
  createTh.setAttribute('class', 'align-middle');
  createTh.textContent = 'Action';
  createTh.colSpan = roleId == 4 ? '3' : '1';
  createTr.appendChild(createTh);
  table.appendChild(createTr);

  for (const element of product) {
    let createTr = document.createElement('tr');
    tableBody.appendChild(createTr);
    if (element.Stock < 10) {
      createTr.classList.add('stockout');
    }
    for (const key in element) {
      const createTd = document.createElement('td');
      if (key == 'id') {
        createTd.textContent = ++startIndex;
        createTr.appendChild(createTd);
      } else if (key !== 'is_delete' && key !== 'categoryId') {
        createTd.textContent = element[key] == null ? '-' : element[key];
        createTr.appendChild(createTd);
      }
    }
    if (element['is_delete'] == 0) {
      if (roleId == 4) {
        const createViewTd = document.createElement('td');
        const achor0 = document.createElement('a');
        achor0.setAttribute('href', `/productView?id=${element.id}`);
        const createViewButton = document.createElement('button');
        createViewButton.setAttribute('type', 'button');
        createViewButton.setAttribute('class', 'btn btn-outline-primary');
        createViewButton.textContent = 'View';
        createViewTd.appendChild(achor0);
        achor0.appendChild(createViewButton);
        createTr.appendChild(createViewTd);
      }
      const createEditTd = document.createElement('td');
      const achor = document.createElement('a');
      achor.setAttribute('href', `/productinfo?id=${element.id}`);
      createEditTd.setAttribute('class', 'editButton');
      createEditTd.setAttribute('id', `${element.id}`);
      const createEditButton = document.createElement('button');
      createEditButton.setAttribute('type', 'button');
      createEditButton.textContent = 'Edit';
      createEditButton.setAttribute('class', 'btn btn-success');

      achor.appendChild(createEditButton);
      createEditTd.appendChild(achor);

      createTr.appendChild(createEditTd);
      if (roleId == 4) {
        const createDeleteTd = document.createElement('td');
        createDeleteTd.setAttribute('id', `${element.id}`);
        const createDeleteButton = document.createElement('button');
        createDeleteButton.textContent = 'Delete';
        createDeleteButton.setAttribute('class', 'btn btn-danger');
        createDeleteButton.setAttribute('id', `${element.id}`);
        createDeleteButton.setAttribute('type', 'button');
        createDeleteButton.setAttribute('onclick', 'deleteProduct(this)');
        createDeleteTd.appendChild(createDeleteButton);
        createTr.appendChild(createDeleteTd);
      }
    } else if (element['is_delete'] == 1) {
      let actionTd = document.createElement('td');
      actionTd.setAttribute('colspan', 3);
      actionTd.innerHTML = `<b><i>DELETED</i></b>`;
      createTr.appendChild(actionTd);
    }
  }
}

async function deleteProduct(product) {
  const id = product.id;
  let modal = new bootstrap.Modal(document.getElementById('deleteModal'));
  modal.show();
  let confirm = document.getElementById('confirm');
  confirm.setAttribute('onclick', `deleteProductPop(${id})`);
}

async function deleteProductPop(id) {
  url = `/api/deleteProduct/${id}`;
  showLoader();
  const response = await fetch(url);
  hideLoader();
  try {
    if (response.status == 200) {
      const message = await response.json();
      window.location = '/products';
    }
    if (response.status == 404) {
      const message = await response.json();
      console.log(message.message);
    }
  } catch (error) {
    console.log(error);
  }
}

function modelHide() {
  bootstrap.Modal.getInstance(document.getElementById('deleteModal')).hide();
}

function filterUp(event, order) {
  const key = event.target.getAttribute('id');
  if (document.getElementById('storageComboIn') != null) {
    let storage = document.getElementById('storageCombo').value;
    url = `/api/products?field=${key}&order=${order}&storage=${storage}`;
  } else {
    url = `/api/products?field=${key}&order=${order}`;
  }
  paggination(url);
}
const search = () => {
  let search = document.getElementById('search').value.toLowerCase().trim();
  if (search == '') {
    paggination(null, dataArray);
  } else {
    filteredResult = dataArray.filter((ele) => {
      return (
        ele.Productname.toLowerCase().includes(search) ||
        ele.Category.toLowerCase().includes(search)
      );
    });
    paggination(null, filteredResult);
  }
};

async function getAllCategory() {
  try {
    showLoader();
    const response = await fetch('api/combos/productCategory');
    const data = await response.json();
    hideLoader();
    const store = data;
    // let option = document.getElementById('category');
    let str;
    str = `<option value="">All</option>`;
    store.forEach((element) => {
      str += `<option value="${element.opt_id}">${element.value}</option>`;
    });
    return str;
  } catch (error) {
    console.log(error);
    return false;
  }
}

function categoryFilter() {
  category = document.getElementById('categoryFilter').value;
  if (category === '') {
    paggination(null, dataArray);
  } else {
    filteredResult = dataArray.filter((ele) => {
      if (ele.categoryId == category) {
        return ele;
      }
    });
    paggination(null, filteredResult);
  }
}