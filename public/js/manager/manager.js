let url = new URL(window.location.href);

function addManager() {
  const customerForm = document.getElementById('myForm');
  customerForm.style.display = 'block';
  customerForm.style.overflow = 'hidden';
  document.getElementById('submitBtn').innerHTML = 'Submit';
  document.getElementById('filter').style = `filter: blur(2px);`;
  document.getElementById('head').style = `filter: blur(2px);`;
  document.getElementById('grid').style = `filter: blur(2px);`;
  // getAllStore();
  getAllCity('state');
}

function resetManagerForm() {
  const managerInputField = document.querySelectorAll('.managerInputField');
  if (managerInputField.length > 0) {
    for (let element of managerInputField) {
      switch (element.name) {
        case 'email':
          element.value = '';
          element.disabled = false;
          break;
        default:
          element.value = '';
      }
    }
  }

  const state = document.getElementById('state');
  if (state) {
    state.selectedIndex = 0;
  }

  const place = document.getElementById('place');
  if (place) {
    place.innerHTML = '';
  }
}

function closeForm() {
  document.getElementById('myForm').style.display = 'none';
  document.getElementById('filter').style = 'none';
  document.getElementById('grid').style = 'none';
  document.getElementById('head').style = 'none';
  resetManagerForm();
}

async function submitbtn() {
  try {
    const data = formData('form');
    const managerValidation = manageManagerFormValidation(data);
    if (Object.keys(managerValidation).length > 0) {
      //----client side validation error
      errorShow(managerValidation);
    } else {
      url = `/manager`;
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
        alert('Manager added');
        window.location = `/user`;
      }
      if (response.status === 409) {
        document.getElementById('error').innerHTML = 'manager already exist';
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

const getAllCity = async (id, name) => {
  try {
    showLoader();
    const response = await fetch('/cityCombo');
    const data = await response.json();
    hideLoader();
    const store = data.result;
    let option = document.getElementById(`${id}`);
    option.innerHTML = '';
    option.innerHTML = `<option value="select here">Select City</option>`;
    store.forEach((element, index) => {
      if (name && element.city_name === name) {
        option.innerHTML += `<option value="${element.city_id}" selected>${element.city_name}</option>`;
      } else {
        option.innerHTML += `<option value="${element.city_id}">${element.city_name}</option>`;
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStore = async (cityid, storename) => {
  try {
    let stateComboValue = document.getElementById('state');
    let index;
    if (stateComboValue.selectedIndex > 0) {
      index = stateComboValue.value;
    } else if (cityid && storename) {
      index = cityid;
    }
    let option = document.getElementById('place');
    showLoader();
    const response = await fetch(`/storeCombo/${index}`);
    const data = await response.json();
    hideLoader();
    const store = data.result;
    option.innerHTML = '';
    option.innerHTML = `<option value="select here">Select Store</option>`;
    store.forEach((element) => {
      if (storename && element.name === storename) {
        option.innerHTML += `<option value="${element.id}" selected>${element.name}</option>`;
      } else {
        option.innerHTML += `<option value="${element.id}">${element.name}</option>`;
      }
    });
  } catch (error) {
    console.log(error);
  }
};

function dataTableGrid(manager, startIndex) {
  // if (manager.length === 0) {
  //   document.getElementById('error').innerHTML = 'No data Found!!!';
  //   document.getElementById('th').innerHTML = '';
  // } else {
  //   document.getElementById('error').innerHTML = '';
  // }
  const table = document.getElementById('thead');
  const tableBody = document.getElementById('tbody');
  let createTh = document.createElement('th');
  let createTr = document.createElement('tr');
  let span = document.createElement('span');
  table.innerHTML = '';
  tableBody.innerHTML = '';
  createTh.innerHTML = '';
  for (let key in manager[0]) {
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
      'd-inline-flex flex-column align-items-center ms-3'
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

    if (key == 'No.' || key == 'Status') {
      spanMain.remove();
    }
  }
  createTh = document.createElement('th');
  createTh.setAttribute('class', 'align-middle');
  createTh.textContent = 'Action';
  createTh.colSpan = '2';
  createTr.appendChild(createTh);
  table.appendChild(createTr);

  for (const element of manager) {
    const createTr = document.createElement('tr');
    tableBody.appendChild(createTr);

    for (const key in element) {
      const createTd = document.createElement('td');
      if (key == 'id') {
        createTd.textContent = ++startIndex;
        createTr.appendChild(createTd);
      } else if (key !== 'Created' && key !== 'Updated') {
        createTd.textContent = element[key] == null ? '-' : element[key];
        createTr.appendChild(createTd);
      } else {
        createTd.textContent =
          element[key] == null ? '-' : renderTimestamp(element[key]);
        createTr.appendChild(createTd);
      }
    }

    const createEditTd = document.createElement('td');
    createEditTd.setAttribute('class', 'editButton');
    createEditTd.setAttribute('id', `${element.id}`);
    createEditTd.setAttribute('onclick', 'updateManager(this)');
    const createEditButton = document.createElement('button');
    createEditButton.setAttribute('type', 'button');
    createEditButton.textContent = 'Edit';
    createEditButton.setAttribute('class', 'btn btn-success');
    createEditTd.appendChild(createEditButton);
    const createDeleteTd = document.createElement('td');
    createDeleteTd.setAttribute('id', `${element.id}`);
    createDeleteTd.setAttribute('class', 'deleteButton');
    createDeleteTd.setAttribute('onclick', 'deleteManager(this)');
    const createDeleteButton = document.createElement('button');
    createDeleteButton.setAttribute('type', 'button');
    createDeleteButton.textContent = 'Delete';
    createDeleteButton.setAttribute('class', 'btn btn-danger');
    createDeleteTd.appendChild(createDeleteButton);
    createTr.appendChild(createEditTd);
    createTr.appendChild(createDeleteTd);
  }
}

async function updateManager(manager) {
  const id = manager.id;
  url = `/api/getmanager/${id}`;

  document.getElementById('myForm').style.display = 'block';
  document.getElementById('submitBtn').innerHTML = 'Update';
  document.getElementById('filter').style = `filter: blur(2px);`;
  document.getElementById('grid').style = `filter: blur(2px);`;
  document.getElementById('head').style = `filter: blur(2px);`;

  document
    .getElementById('submitBtn')
    .setAttribute('onclick', `updateDeails(${id})`);
  showLoader();
  const response = await fetch(url);
  const managerDetails = await response.json();
  hideLoader();

  try {
    if (!response.ok) {
      throw new Error('Error In Get Manager Details');
    }
    if (response.status == 200) {
      for (const key in managerDetails[0]) {
        let element = document.querySelector(`[name="${key}"]`);
        switch (key) {
          case 'firstname':
            element.value = managerDetails[0][key];
            break;
          case 'lastname':
            element.value = managerDetails[0][key];
            break;
          case 'email':
            element.value = managerDetails[0][key];
            document.getElementById(`${key}`).disabled = true;
            break;
          case 'city_name':
            await getAllCity('state', managerDetails[0].city_name);
            break;
          case 'name':
            await getAllStore(
              managerDetails[0].city_id,
              managerDetails[0].name
            );
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}

async function updateDeails(id) {
  try {
    const data = formData('form');
    data.id = id;
    url = `/updatemanager`;

    const managerValidation = manageManagerFormValidation(data);
    if (Object.keys(managerValidation).length > 0) {
      //----client side validation error
      errorShow(managerValidation);
    } else {
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
        alert('Manager updated');
        window.location = `/manager`;
      }
      if (response.status == 409) {
        document.getElementById('error').innerHTML = 'manager already exist';
        document.getElementById('error').style.color = 'red';
      }
      if (response.status == 400) {
        const errorObject = await response.json();
        errorShow(errorObject);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteManager(manager) {
  const id = manager.id;

  let modal = new bootstrap.Modal(document.getElementById('deleteModal'));
  modal.show();
  let confirm = document.getElementById('confirm');
  confirm.setAttribute('onclick', `deleteManagerPop(${id})`);
}

async function deleteManagerPop(id) {
  url = `/api/deleteManager/${id}`;
  showLoader();
  const response = await fetch(url);
  hideLoader();
  try {
    if (response.status == 200) {
      const message = await response.json();
      window.location = '/manager';
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

function managerFilter() {
  let status = document.getElementById('status').value;
  url = `/api/getmanagers?status=${status}`;
  paggination(url);
}
managerFilter();

function filterUp(event, order) {
  let status = document.getElementById('status').value;
  const key = event.target.getAttribute('id');
  url = `/api/getmanagers?status=${status}&field=${key}&order=${order}`;
  paggination(url);
}

const search = () => {
  let search = document.getElementById('search').value.toLowerCase().trim();
  if (search == '') {
    paggination(null, dataArray);
  } else {
    filteredResult = dataArray.filter((ele) => {
      return (
        ele.Firstname.toLowerCase().includes(search) ||
        ele.Lastname.toLowerCase().includes(search) ||
        ele.Email.toLowerCase().includes(search) ||
        ele.Place.toLowerCase().includes(search) ||
        ele.Location.toLowerCase().includes(search)
      );
    });
    paggination(null, filteredResult);
  }
};
