const colmap = new Map([
  ['id', 'ID'],
  ['firstname', 'FirstName'],
  ['lastname', 'LastName'],
  ['amount', 'Amount'],
  ['shipping_address', 'ShippingAddress'],
  ['payment_status', 'PaymentStatus'],
  ['order_date', 'Date'],
  ['type', 'OrderType'],
]);

async function fetching(offset) {
  // let orderby = document.getElementById('orderby').value;
  // let order = document.getElementById('order').value;
  let storage = '';
  if (document.getElementById('storageCombo') != null) {
    storage = document.getElementById('storageCombo').value;
  }
  url = `/salesorder?storage=${storage}`;
  url = url + offset;
  paggination(url);
}

let count = 1;
function dataTableGrid(result, startIndex) {
  let head = `<tr>`;
  if (result.length === 0) {
    document.getElementById('error').innerHTML = 'No Data Found!!!';
    document.getElementById('thead').innerHTML = '';
    document.getElementById('tbody').innerHTML = '';
  } else {
    document.getElementById('error').innerHTML = '';
    for (let key in result[0]) {
      if (
        key != 'created_at' &&
        key != 'customer_id' &&
        key != 'storage_id' &&
        key != 'is_delete'
      ) {
        head += `<th scope="col"> <span class="d-inline-flex flex-row align-items-center">${colmap.get(
          key
        )} <span class="d-inline-flex flex-column align-items-center ms-2">
      <span style="cursor: pointer" onclick="onclickOrderby('${key}','asc')">^</span>
      <span style="rotate: 180deg; cursor: pointer" onclick="onclickOrderby('${key}','desc')">^</span></span>
    </span></th>`;
      }
    }
    head += `<th scope="col" colspan="3" style="text-align: center;">Actions</th>`;
    head += `</tr>`;
    document.getElementById('thead').innerHTML = head;

    let body = ``;
    result.forEach((data) => {
      let d = new Date(data.order_date);
      let dtOffset = new Date(
        d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
      );
      body += `<tr>
        <td scope="row">${startIndex + 1}</td>
        <td>${data.firstname}</td>
        <td>${data.lastname}</td>
        <td>${data.amount}</td>
				<td>${data.type}</td>
        <td>${data.shipping_address}</td>
        <td>${data.payment_status == 10 ? 'Pending' : 'Paid'}</td>
        <td>${dtOffset.toISOString().split('T')[0]}</td>
        ${data.is_delete == 0
          ? `<td><a class="btn btn-outline-primary" onclick="viewOrder(${data.id})">View</a></td><td>
      <a class='btn btn-success' id=${data.storage_id}edit${data.id} onclick="updateOrder('edit',event,'order')">EDIT</a></td><td>
       <a class="btn btn-danger" id=${data.storage_id}delete${data.id} onclick="updateOrder('delete',event,'order')">DELETE</a></td>
        `
            : `<td colspan="3"><p  class="deleted">DELETED</p></td>`
        }</tr>`;
      startIndex++;
    });
    document.getElementById('tbody').innerHTML = body;
  }
}
async function paymentFilter() {
  let paymentStatus = document.getElementById('payment').value;
  if (paymentStatus == '') {
    // let arr = dataArray
    paggination(null, dataArray);
  } else {
    filteredResult = dataArray.filter((ele) => {
      return ele.payment_status == paymentStatus;
    });
    paggination(null, filteredResult);
  }
}
/* <td><a class="btn btn-outline-primary" onclick="generatePdf(${data.ID})">Invoice</a></td> */

// function generatePdf(id) {
//   console.log(id);
//   window.location.href = `/getPdf?id=${id}`
// }
async function viewOrder(id) {
  const modal = new bootstrap.Modal('#pdfModal');
  modal.show();

  const response = await fetch(`/salesOrderView?invoiceId=${id}&type=invoice`);
  try {
    if (!response.ok) {
      throw new Error("Can't render pdf");
    }

    const htmlResponse = await response.text();
    document.getElementById('pdfModalBody').innerHTML = htmlResponse;

    document.getElementById('confirmPdfDownload').onclick = async () => {
      const response = await fetch(`/invoice?invoiceId=${id}&type=invoice`, {
        method: 'GET',
      });

      // console.log(response.status);
      try {
        if (!response.ok) {
          throw new Error('Unable To Download PDF');
        }

        if (response.status === 200) {
          const responsePdfName = await response.json();

          const pdfmodalfooter = document.getElementById('pdfmodalfooter');
          const confirmPdfDownload =
            document.getElementById('confirmPdfDownload');
          confirmPdfDownload.remove();
          const createA = document.createElement('a');
          createA.setAttribute('id', 'downloadInvoiceButton');
          createA.setAttribute('class', 'btn btn-outline-primary');
          createA.setAttribute(
            'href',
            `${window.location.origin}/uploads/pdfFiles/${responsePdfName.pdfName}`
          );
          createA.setAttribute('download', `${responsePdfName.pdfName}`);
          createA.innerHTML = 'Download PDF';
          pdfmodalfooter.appendChild(createA);

          document.getElementById('downloadInvoiceButton').onclick = () => {
            const pdfmodalfooter = document.getElementById('pdfmodalfooter');
            const button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.setAttribute('id', 'confirmPdfDownload');
            button.setAttribute('class', 'btn btn-danger');
            button.innerHTML = 'Generate PDF';
            pdfmodalfooter.appendChild(button);

            const downloadInvoiceButton = document.getElementById(
              'downloadInvoiceButton'
            );
            if (downloadInvoiceButton) {
              downloadInvoiceButton.remove();
            }

            //socket implment for delete generated file
            let socket = io();
            socket.emit('unlinkProductPdf', {
              pdfName: responsePdfName.pdfName,
              folderName: "pdfFiles"
            });
            modal.hide();
          };
        }
      } catch (error) {
        modal.hide();
        const responseMessage = await response.json();
        if (response.status === 404) {
          messagePopUp(responseMessage.message);
        }

        if (response.status === 500) {
          messagePopUp(responseMessage.message);
        }
      }
    };
  } catch (error) {
    modal.hide();
    console.log(error);
    const responseMessage = await response.json();

    if (response.status === 400) {
      messagePopUp(responseMessage.message);
    }

    if (response.status === 500) {
      messagePopUp(responseMessage.message);
    }
  }
}

function pdfModelHide(id) {
  const pdfmodalfooter = document.getElementById('pdfmodalfooter');
  const confirmPdfDownload = document.getElementById('confirmPdfDownload');
  if (!confirmPdfDownload) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('id', 'confirmPdfDownload');
    button.setAttribute('class', 'btn btn-danger');
    button.innerHTML = 'Generate PDF';
    pdfmodalfooter.appendChild(button);
  }
  const downloadInvoiceButton = document.getElementById(
    'downloadInvoiceButton'
  );
  if (downloadInvoiceButton) {
    //socket implment for delete generated file
    let socket = io();
    socket.emit('unlinkProductPdf', {
      pdfName: downloadInvoiceButton.download,
      folderName: "pdfFiles"
    });
    downloadInvoiceButton.remove();
  }

  const modal = new bootstrap.Modal(id);
  modal.hide();
}

function searchFilter() {
  let searchbar = document.getElementById('searchbar').value.toLowerCase();
  if (searchbar == '') {
    paggination(null, dataArray);
  } else {
    filteredResult = dataArray.filter((ele) => {
      return (
        ele.firstname.toLowerCase().includes(searchbar) ||
        ele.lastname.toLowerCase().includes(searchbar) ||
        ele.shipping_address.toLowerCase().includes(searchbar) ||
        // ele.amount.toString().includes(searchbar) ||
        ele.order_date.includes(searchbar)
      );
    });
    // console.log(filteredResult);
    paggination(null, filteredResult);
  }
}

function onclickOrderby(col, type) {
  fetching(`&orderby=${col.toLowerCase()}&order=${type}`);
}

async function onLoad() {
  if (document.getElementById('storageCombo') != null) {
    const storageOptionos = await generateWarehousesDropDown(1, true);
    document.getElementById('storageCombo').innerHTML = storageOptionos;
  }
  await generateCombo('paymentStatus', 'payment');
  await fetching();
}
onLoad();

async function generateCombo(name, id) {
  const response = await fetch(`/api/combos/${name}`);
  const result = await response.json();
  let str = `<option value="">Select</option>`;

  result.forEach((data) => {
    str += `<option value="${data.opt_id}">${data.value}</option>`;
  });
  document.getElementById(`${id}`).innerHTML = str;
}
