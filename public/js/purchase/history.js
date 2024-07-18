pageSize = 4;
let queryString = '';

const admin = document.getElementById('admin');

const modal = new bootstrap.Modal('#deleteModal');

const mapping = {
  'Supplier Name': 'fname',
  'Company Name': 'company',
  Phone: 'phone',
  GST: 'gst',
  Amount: 'amount',
  Date: 'date',
};

async function initial() {
  const paymentOptions = (await generateDropDown('paymentStatus')).content;

  document.getElementById('floatingPaymentStatus').innerHTML += paymentOptions;

  if (admin) {
    const storageOptions = await generateWarehousesDropDown(1, true);

    const floatingStorageId = document.getElementById('floatingStorageId');

    floatingStorageId.innerHTML = storageOptions;
  }
}

function dataTableGrid(records) {
  try {
    if (records.length) {
      let head = `<tr>`;
      for (let key of [
        'No.',
        'Supplier Name',
        'Company Name',
        'Phone',
        'GST',
        'Amount',
        'Date',
      ]) {
        head += `<th scope="col" class="align-middle">
        <span class="d-inline-flex flex-row align-items-center">
          ${key}
          ${
            mapping[key]
              ? `
          <span class="d-inline-flex flex-column align-items-center ms-2">
            <span style="cursor: pointer" onclick="paggination('api/purchases?key=${mapping[key]}&value=asc&${queryString}')">^</span>
            <span style="rotate: 180deg; cursor: pointer" onclick="paggination('api/purchases?key=${mapping[key]}&value=desc&${queryString}')">^</span>
          </span>
          `
              : ``
          }
        </span>
      </th>`;
      }

      head += `<th scope="col" colspan="3" class="align-middle">Action</th>`;

      head += `</tr>`;

      document.getElementById('thead').innerHTML = head;

      const tbody = document.getElementById('tbody');
      tbody.innerHTML = '';

      records.forEach((obj, index) => {
        let tr = document.createElement('tr');

        let noTd = document.createElement('td');
        noTd.innerText = startIndex + index + 1;

        let suppTd = document.createElement('td');
        suppTd.innerText = obj.fname;

        let comTd = document.createElement('td');
        comTd.innerText = obj.company;

        let phTd = document.createElement('td');
        phTd.innerText = obj.phone;

        let gstTd = document.createElement('td');
        gstTd.innerText = obj.gst;

        let amountTd = document.createElement('td');
        amountTd.innerText = obj.amount;

        let dateTd = document.createElement('td');
        dateTd.innerText = new Date(obj.date).toLocaleDateString();

        [noTd, suppTd, comTd, phTd, gstTd, amountTd, dateTd].forEach((e) =>
          tr.appendChild(e)
        );

        if (!obj.is_delete) {
          let viewTd = document.createElement('td');
          viewTd.innerHTML = `<button class="btn" onclick="viewPurchaseOrder(${obj?.id})">
          <img src="icons/book.svg" width="25" height="25">
        </button>`;

          let editTd = document.createElement('td');
          editTd.innerHTML = `<button class="btn" onclick="window.location.href = '/purchaseOrder?orderId=${obj?.id}'">
            <img src="src/assets/manageCustomer/edit.svg" width="25" height="25">
          </button>`;

          let deleteTd = document.createElement('td');
          deleteTd.innerHTML = `<button class="btn" onclick="deletePurchaseOrder(${obj.id})">
            <img src="src/assets/manageCustomer/delete.svg" width="25" height="25">
          </button>`;

          [viewTd, editTd, deleteTd].forEach((e) => tr.appendChild(e));
        } else {
          let actionTd = document.createElement('td');
          actionTd.setAttribute('colspan', 3);
          actionTd.innerHTML = `<b><i>DELETED</i></b>`;
          [actionTd].forEach((e) => tr.appendChild(e));
        }

        tbody.append(tr);
      });
    } else {
      document.getElementById('thead').innerHTML = '';
      document.getElementById('tbody').innerHTML = '<h5>No records found</h5>';
    }
  } catch (error) {
    console.log(error);
  }
}

function triggerPaymentStatus(e) {
  const query = new URLSearchParams(queryString);
  query.set('payment', e.target.value);
  queryString = query.toString();
  paggination(`api/purchases?${queryString}`);
}

function triggerStorageStatus(e) {
  if (admin) {
    const query = new URLSearchParams(queryString);
    query.set('storage', e.target.value);
    queryString = query.toString();
    paggination(`api/purchases?${queryString}`);
  }
}

function searchAnything(e) {
  let filteredOrders = dataArray.filter((obj) =>
    [obj.fname, obj.company, obj.phone, obj.gst, obj.oname].some((v) =>
      new RegExp(`.*${e.target.value.toLowerCase().trim()}.*`).test(
        v.toLowerCase()
      )
    )
  );

  paggination(null, filteredOrders);
}

async function deletePurchaseOrder(orderId) {
  modal.show();

  // Setting onclick so that we don't need to explicity remove click listener once called.
  document.getElementById('confirm').onclick = async () => {
    if (orderId) {
      showLoader();
      const orderDetails = await getOrderDetails(orderId);
      orderDetails?.products.forEach(({ purchaseProductId }) => {
        fetch(`api/purchase/product/${purchaseProductId}`, {
          method: 'DELETE',
        });
      });

      await fetch(`api/purchase/${orderId}`, {
        method: 'DELETE',
      });
      hideLoader();
      modal.hide();
      paggination('api/purchases');
    }
  };
}

async function getOrderDetails(id) {
  if (id) {
    showLoader();
    const response = await fetch(`api/order/${id}`);
    hideLoader();
    return await response.json();
  }
}

function modelHide() {
  modal.hide();
}

initial();
paggination('api/purchases');
