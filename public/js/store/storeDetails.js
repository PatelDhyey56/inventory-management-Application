let id = new URLSearchParams(window.location.search).get('id');

function dataTableGrid(store, startIndex) {
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
    // span1.textContent = '^';
    span1.setAttribute('class', 'span1');
    span1.setAttribute('onclick', `filterUp(event,'ASC')`);
    span1.setAttribute('id', `${key}`);

    let span2 = document.createElement('span');
    // span2.textContent = '^';
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
  // createTh.textContent = 'Action';
  createTh.colSpan = '2';
  createTr.appendChild(createTh);
  table.appendChild(createTr);
  for (const element of store) {
    let createTr = document.createElement('tr');
    tableBody.appendChild(createTr);

    for (const key in element) {
      
      if (key != 'name' && key !="firstname") {
        const createTd = document.createElement('td');
        createTh.setAttribute('class', 'store__actioncolumn');
        if (key == 'id') {
          createTd.textContent = ++startIndex;
          createTr.appendChild(createTd);
        } else if (key !== 'is_delete') {
          createTd.textContent = element[key] == null ? '-' : element[key];
          createTr.appendChild(createTd);
        }
      } else {
        let parentElement=document.getElementById('nameWarehouse')
        parentElement.innerHTML = "Manager Name : "+element["firstname"]+"<br><br>"+"Warehouse Name : "+ element["name"]
         }
    }
    // if (element['is_delete'] == 0) {
    //   const createEditTd = document.createElement('td');
    //   const achor = document.createElement('a');
    //   // achor.setAttribute('href', `/productinfo?id=${element.id}`);
    //   // createEditTd.setAttribute('class', 'editButton');
    //   createEditTd.setAttribute('id', `${element.id}`);
    //   const createEditButton = document.createElement('button');
    //   createEditButton.setAttribute('type', 'button');
    //   // createEditButton.textContent = 'Edit';
    //   // createEditButton.setAttribute('class', 'btn btn-success');
    //   const createDeleteTd = document.createElement('td');
    //   createDeleteTd.setAttribute('id', `${element.id}`);
    //   const createDeleteButton = document.createElement('button');
    //   createDeleteButton.textContent = 'Delete';
    //   createDeleteButton.setAttribute('class', 'btn btn-danger');
    //   createDeleteButton.setAttribute('id', `${element.id}`);
    //   createDeleteButton.setAttribute('type', 'button');
    //   createDeleteButton.setAttribute(
    //     'onclick',
    //     `deleteProduct(${id}, ${element.id})`
    //   );
    //   createDeleteTd.appendChild(createDeleteButton);
    //   // achor.appendChild(createEditButton);
    //   createEditTd.appendChild(achor);
    //   // createTr.appendChild(createEditTd);
    //   createTr.appendChild(createDeleteTd);
    // } else if (element['is_delete'] == 1) {
    //   let actionTd = document.createElement('td');
    //   actionTd.setAttribute('colspan', 2);
    //   actionTd.innerHTML = `<b><i>DELETED</i></b>`;
    //   actionTd.setAttribute('class', 'text-danger');
    //   createTr.appendChild(actionTd);
    // }
  }
}

async function deleteProduct(storeId, productId) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success m-2',
      cancelButton: 'btn btn-danger',
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: 'Are you sure?',
      text: 'Delete Warehouse?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        deleteStoreProduct(storeId, productId);
        swalWithBootstrapButtons
          .fire({
            title: 'Deleted!',
            text: 'Warehouse has been deleted.',
            icon: 'success',
          })
          .then((result) => {
            window.location.reload(`/storeProducts?id=${storeId}`);
          });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: 'Cancelled',
          text: 'Cancelled...',
          icon: 'error',
        });
      }
    });
}

const deleteStoreProduct = async (storeId, productId) => {
  showLoader();
  const response = await fetch(
    `/deleteStoreProduct?storeId=${storeId}&&productId=${productId}`,
    {
      method: 'POST',
    }
  );
  hideLoader();
};

const loadData = async () => {
  await paggination(`/api/storeProducts?id=${id}`);
};
loadData();

function search() {
  let searchbar = document
    .getElementById('searchbar')
    .value.toLowerCase()
    .trim();
  if (searchbar == '') {
    paggination(null, dataArray);
  } else {
    filteredResult = dataArray.filter((ele) => {
      return (
        ele.Productname.toLowerCase().includes(searchbar) ||
        ele.Category.toLowerCase().includes(searchbar) ||
        ele.Description.toLowerCase().includes(searchbar)
      );
    });
    // console.log(filteredResult);
    paggination(null, filteredResult);
  }
}
